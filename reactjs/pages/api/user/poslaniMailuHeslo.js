import { hashPassword } from "../../../helpers/auth";
import { connectToDatabase } from "../../../helpers/db";
import { sendConfirmationEmail } from "../../../helpers/mailer";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;
  const { email } = data;
  const client = await connectToDatabase();
  const db = client.db();

  const existingUser = await db.collection("Users").findOne({ email: email });
  const { name, _id } = existingUser;
  if (existingUser) {
    await sendConfirmationEmail({ email: email, name: name, hash: _id });
    res.status(201).json({ message: "Email byl odeslan" });
    client.close();
    return;
  } else {
    res.status(422).json({ message: "Uzivatel s timto emailem neexistuje" });
    client.close();
  }
}

export default handler;
