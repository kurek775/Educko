import { connectToDatabase } from "../../../helpers/db";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;
  const {
    hodina,
    datum,
    popis,
    predmet,
    konec,
    ucitel,
    jmeno,
    barva,
    kapacita,
    meetURL,
  } = data;
  if (
    !predmet ||
    !datum ||
    !popis ||
    !hodina ||
    !konec ||
    !kapacita ||
    !meetURL
  ) {
    res.status(422).json({
      message: "Neplatný vstup - něco ze vstupních dat chybí.",
    });
    return;
  }
  const client = await connectToDatabase();
  const db = client.db();

  const result = await db.collection("Reservation").insertOne({
    predmet: predmet,
    ucitel: ucitel,
    jmeno: jmeno,
    datum: datum,
    konec: konec,
    popis: popis,
    hodina: hodina,
    barva: barva,
    meetURL: meetURL,
    kapacita: parseInt(kapacita),
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
