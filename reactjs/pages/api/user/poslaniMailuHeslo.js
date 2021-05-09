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
  const existingLector = await db
    .collection("Lectores")
    .findOne({ email: email });

  if (existingUser) {
    const { name, _id } = existingUser;
    await sendConfirmationEmail({ email: email, name: name, hash: _id });
    res.status(201).json({ message: "Email byl odeslan" });
    client.close();
    return;
  } else if (existingLector) {
    const { name, _id } = existingLector;
    await sendConfirmationEmail({ email: email, name: name, hash: _id });
    res.status(201).json({ message: "Email byl odeslan" });
    client.close();
    return;
  } else if (!user) {
    res.status(422).json({ message: "Uzivatel  s timto emailem neexistuje" });
    client.close();
  } else if (!lector) {
    res.status(422).json({ message: "Lektor  s timto emailem neexistuje" });
    client.close();
  } else {
    res.status(422).json({ message: "Tento email jeste nebyl pouzit" });
    client.close();
  }
}

export default handler;
