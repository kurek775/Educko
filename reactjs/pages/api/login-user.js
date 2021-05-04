
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
   

 
  const top = (await person).toString();
  const selectedMeetup = await meetupsCollection.findOne({
    email: req.body.password,})
 
    console.log(selectedMeetup);
    console.log(req.body.email);

    bcrypt.compare(req.body.password,person.password,(err,res) => {
      if (err) {
        console.error(err)
    
        return
      }
      console.log(res)
    })
    console.log("top2");

    client.close();
    res.status(200).json({ message: "User verified!" });
  

  }
}

export default handlerLog;


