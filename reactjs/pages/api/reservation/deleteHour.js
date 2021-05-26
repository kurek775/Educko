import { ObjectID } from "bson";
import { connectToDatabase } from "../../../helpers/db";

async function handler(req, res) {
  if (req.method !== "DELETE") {
    return;
  }
  const data = req.body;
  const { id } = data;
  const newId = new ObjectID(id);

  const client = await connectToDatabase();

  const reservationCollection = await client.db().collection("Reservation");

  const result = await reservationCollection.deleteOne({ _id: newId });
  res.status(201).json({
    message: "Hodina smazana",
    id: newId,
  });
  client.close();
}

export default handler;
