import { sendContactMail } from "../../../helpers/contactMailer";
// import { connectToDatabase } from "../../../helpers/db";
// import { sendConfirmationEmail } from "../../../helpers/mailer";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;
  const { email, message } = data;
  console.log(email, message);

  await sendContactMail({
    email: email,
    zprava: message,
  });
  res.status(201).json({
    message: "Email byl odeslan",
  });
  return;
  // client.close();
}

export default handler;
