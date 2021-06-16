import { ObjectID } from "bson";
import { connectToDatabase } from "../../../helpers/db";

async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }
  const data = req.body;
  const { email, id } = data;
  const newId = new ObjectID(id);

  const client = await connectToDatabase();

  const reservationCollection = await client.db().collection("Reservation");

  const result = await reservationCollection.updateOne(
    { _id: newId },
    {
      $pull: {
        zapsan: { uzivatel: email },
      },
    }
  );
  res.status(201).json({
    message: "Odhlasil jste se z hodiny",
    email: email,
    id: newId,
  });
  client.close();
}

export default handler;
