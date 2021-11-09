import nodemailer from "nodemailer";

export function sendLectureData({ email, name, link }) {
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
      from: process.env.EDUCKO_MAIL,
      to: email,
      subject: "Hodina zacina",
      html: `
      <h3>Zdravime te</h3>
        <p>Hodina zachvilku zacina</p>
        <p>Pro pripojeni klikni na tento odkaz: <a target="_" href="${link}">Vstoupit na hodinu</a></p>
        <p>Prejeme hezky den</p>
        <h4>Educko</h4>`,
    };
    transporter.sendMail(message, function (err, info) {
      if (err) {
        rej(err.message + " " + email);
      } else {
        res(info);
      }
    });
  });
}

export default sendLectureData;
