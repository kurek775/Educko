import { connectToDatabase } from "../../../helpers/db";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;
  const { hodina, datum, popis, predmet, konec } = data;
  if (!predmet || !datum || !popis || !hodina || !konec) {
    res.status(422).json({
      message: "Neplatný vstup - něco ze vstupních dat chybí.",
    });
    return;
  }
  console.log(hodina, datum, popis, predmet);
  const client = await connectToDatabase();
  const db = client.db();
  const result = await db.collection("Reservation").insertOne({
    predmet: predmet,
    datum: datum,
    konec: konec,
    popis: popis,
    hodina: hodina,
    kapacita: 0,
    zapsan: [],
  });
  if (!result) {
    res.status(422).json({ message: "Nekde se stala chyba" });
  }
  res
    .status(201)
    .json({ message: "Předmět byl vytvořen.", predmet, datum, hodina });
  client.close();
}

export default handler;
