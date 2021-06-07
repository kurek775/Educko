import { ObjectID } from "bson";
import { connectToDatabase } from "../../../helpers/db";

async function handler(req, res) {
  if (req.method !== "GET") {
    return;
  }

  const client = await connectToDatabase();

  const usersCollection = await client.db().collection("Users");

  const result = await usersCollection.find({}).toArray();
  res.status(201).json({
    result,
  });
  //   console.log("DATA " + usersCollection);
  client.close();
  return usersCollection;
}

export default handler;
