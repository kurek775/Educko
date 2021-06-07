import { connectToDatabase } from "../../../helpers/db";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;
  const { castka, userEmail } = data;
  if (!castka) {
    res.status(422).json({
      message: "Neplatný vstup",
    });
    return;
  }
  const newCastka = parseInt(castka) / 4;
  const client = await connectToDatabase();
  const usersCollection = await client.db().collection("Users");

  const result = await usersCollection.updateOne(
    { email: userEmail },
    {
      $inc: {
        penize: newCastka,
      },
    }
  );
  res.status(201).json({ message: "Platba byla uskutecnena" });
  client.close();
}

export default handler;
