import { connectToDatabase } from "../../../helpers/db";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;
  const { predmet, zkratka, popis } = data;
  if (!predmet || !zkratka || !popis) {
    res.status(422).json({
      message: "Neplatný vstup - něco ze vstupních dat chybí.",
    });
    return;
  }
  const client = await connectToDatabase();
  const db = client.db();
  const upperCaseZkratka = zkratka.toUpperCase();
  const subjectDb = await db
    .collection("Subject")
    .findOne({ zkratka: upperCaseZkratka });
  if (subjectDb) {
    res.status(422).json({
      message:
        "Tento předmět již existuje, obraťte se na administrátora stránky.",
    });
    client.close();
    return;
  }
  const result = await db.collection("Subject").insertOne({
    predmet: predmet,
    zkratka: upperCaseZkratka,
    popis: popis,
  });
  res
    .status(201)
    .json({ message: "Předmět byl vytvořen.", predmet, upperCaseZkratka });
  client.close();
}

export default handler;
