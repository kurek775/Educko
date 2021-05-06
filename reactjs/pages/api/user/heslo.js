import { ObjectID } from "bson";
import { hashPassword } from "../../../helpers/auth";
import { connectToDatabase } from "../../../helpers/db";

async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }
  const data = req.body;
  const { id, password } = data;
  const newId = new ObjectID(id);
  if (!password || password.trim().length < 7) {
    res.status(422).json({ message: "Heslo je prilis kratke" });
    return;
  }
  const client = await connectToDatabase();
  // const getMail = client.db().collection("Users").findOne({ _id: id });
  const userCollection = client.db().collection("Users");
  const user = await userCollection.findOne({ _id: newId });
  // const { email } = user;
  // console.log(email);
  if (user) {
    const hashedPassword = await hashPassword(password);
    const result = await userCollection.updateOne(
      { _id: newId },
      { $set: { password: hashedPassword } }
    );
    client.close();
    res.status(200).json({ message: "Heslo bylo zmeneno" });
    return;
  } else {
    res.status(422).json({
      message: "Uzivatel s timto id neexistuje ",
      id: newId,
      text: id,
    });
    client.close();
  }
}

export default handler;
