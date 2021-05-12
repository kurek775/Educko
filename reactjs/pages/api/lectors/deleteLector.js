import { hashPassword } from "../../../helpers/auth";
import { connectToDatabase } from "../../../helpers/db";

async function handler(req, res) {
  if (req.method !== "DELETE") {
    return;
  }
  const data = req.body;
  const { email, name } = data;

  const client = await connectToDatabase();
  const db = client.db();

  const result = await db.collection("Lectores").deleteOne({ email: email });
  res
    .status(201)
    .json({ message: "Lektor byl odstraněn", name: name, email: email });
  client.close();
}

export default handler;
