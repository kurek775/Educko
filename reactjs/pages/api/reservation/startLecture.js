import { ObjectID } from "bson";
import { connectToDatabase } from "../../../helpers/db";
import { sendLectureData } from "../../../helpers/lectureMailer";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;
  const { id } = data;
  const newID = new ObjectID(id);
  if (!id) {
    res.status(422).json({
      message: "Stala se chyba",
    });
    return;
  }
  const client = await connectToDatabase();
  const db = client.db();
  const result = await db.collection("Reservation").findOne({ _id: newID });
  const { predmet, zapsan } = result;
  await sendLectureData({
    email: zapsan.map((u) => u.uzivatel),
    name: zapsan.map((u) => u.jmeno),
  });
  if (!result) {
    res.status(422).json({ message: "Hodina nenalezena" });
  }
  res.status(201).json({ message: "Hodina zahajena", predmet });
  client.close();
}

export default handler;
