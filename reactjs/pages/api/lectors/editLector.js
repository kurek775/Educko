import { ObjectID } from "bson";
import { connectToDatabase } from "../../../helpers/db";

async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }
  const data = req.body;
  const { email, name, id, subject } = data;
  const newId = new ObjectID(id);
  const newEmail = email;
  const newName = name;

  const client = await connectToDatabase();

  const lectoresCollection = await client.db().collection("Lectores");

  const result = await lectoresCollection.updateOne(
    { _id: newId },
    { $set: { email: newEmail, name: newName, subject: subject } }
  );
  res.status(201).json({
    message: "Změna proběhla úspěšně",
    name: newName,
    email: newEmail,
    subject: subject,
  });
  client.close();
}

export default handler;
