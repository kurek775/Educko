import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://dbEducko:Rs5ZnltffS0Bh22L@educko.h5stn.mongodb.net/Educko?retryWrites=true&w=majority"
  );
  return client;
}
