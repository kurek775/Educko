import { hashPassword } from "../../../helpers/auth";
import { connectToDatabase } from "../../../helpers/db";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;
  const { email, password, name, color } = data;
  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7 ||
    !name ||
    name.trim().length < 4 ||
    name === "admin"
  ) {
    res.status(422).json({
      message: "Neplatný vstup - heslo by mělo mít minimálně 7 znaků",
    });
    return;
  }
  const client = await connectToDatabase();
  const db = client.db();
  const lektor = "lector";

  const existingUser = await db
    .collection("Lectores")
    .findOne({ email: email });
  if (existingUser) {
    res.status(422).json({ message: "Lektor s tímto emailem již existuje" });
    client.close();
    return;
  }
  const hashedPassword = await hashPassword(password);
  const result = await db.collection("Lectores").insertOne({
    email: email,
    password: hashedPassword,
    name: name,
    role: lektor,
    barva: color,
    subject: [],
  });
  res.status(201).json({ message: "Lektor byl vytvořen" });
  client.close();
}

export default handler;
