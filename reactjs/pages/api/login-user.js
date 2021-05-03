
import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";
// /api/new-meetup
// POST /api/new-meetup

async function handlerLog(req, res) {
  if (req.method === "POST") {

   
    const data = ({
     
      email:req.body.email,
      password:req.password,
    })

    const client = await MongoClient.connect(
      "mongodb+srv://dbEducko:Rs5ZnltffS0Bh22L@educko.h5stn.mongodb.net/Educko?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("Users");
    console.log("jsi tam")
    const result = await meetupsCollection.find(data.email)
    console.log(result);
    bcrypt.compare(data.password,result.password,(err,res) => {
      if (err) {
        console.error(err)
    
        return
      }
      console.log(res)
    })
    console.log(result.password);

    client.close();
    res.status(200).json({ message: "User verified!" });
  

  }
}

export default handlerLog;


