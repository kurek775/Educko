import nodemailer from "nodemailer";

export function sendContactMail({ email, zprava }) {
  return new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GOOGLE_USER,
        pass: process.env.GOOGLE_PASSWORD,
      },
      secure: true,
    });

    const message = {
      from: email,
      to: process.env.GOOGLE_USER,
      subject: `Zprava od ${email}`,
      html: `
      <p>${zprava}</p>
      <p>Email pro odpovezeni zpravy: ${email}</p>`,
    };
    transporter.sendMail(message, function (err, info) {
      if (err) {
        console.log(err);
        rej(err);
      } else {
        console.log("succes");
        res(info);
      }
    });
  });
}

export default sendContactMail;
