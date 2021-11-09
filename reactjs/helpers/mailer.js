import nodemailer from "nodemailer";

export function sendConfirmationEmail({ email, name, hash }) {
  return new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.forpsi.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EDUCKO_MAIL,
        pass: process.env.EDUCKO_PASSWORD,
      },
    });

    const message = {
      from: process.env.EDUCKO_MAIL,
      to: email,
      subject: "Zmena hesla",
      html: `
      <h3>Zdravime te ${name}</h3>
        <p>Pokud jste tento pozadavek neposlali vy, tak to prosim ignorujte</p>
        <p>Pro zmenu hesla kliknete na tento odkaz: <a target="_" href="${process.env.DOMAIN}/zapomenute-heslo/${hash}">Zmena hesla</a></p>
        <p>Prejeme hezky den</p>
        <h4>Educko</h4>`,
    };
    transporter.sendMail(message, function (err, info) {
      if (err) {
        rej(err);
      } else {
        res(info);
      }
    });
  });
}

export default sendConfirmationEmail;
