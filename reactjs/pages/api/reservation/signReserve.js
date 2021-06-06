import { ObjectID } from "bson";
import { connectToDatabase } from "../../../helpers/db";

async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }
  const data = req.body;
  const { email, id, name } = data;
  const newId = new ObjectID(id);

  const client = await connectToDatabase();

  const reservationCollection = await client.db().collection("Reservation");

  const result = await reservationCollection.updateOne(
    { _id: newId },
    {
      $push: {
        zapsan: { uzivatel: email, jmeno: name },
      },
      $inc: {
        kapacita: 1,
      },
    }
  );
  res.status(201).json({
    message: "Byl jste zapsan k hodine",
    email: email,
    id: newId,
  });
  client.close();
}

export default handler;
