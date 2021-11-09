import nodemailer from "nodemailer";

export function sendContactMail({ email, zprava }) {
  return new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.forpsi.com",
      port: 587,
      secure: true,
      auth: {
        user: process.env.EDUCKO_MAIL,
        pass: process.env.EDUCKO_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const message = {
      from: email,
      to: process.env.EDUCKO_MAIL,
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
