import nodemailer from "nodemailer";

export function sendLectureData({ email, name }) {
  // let listemail = [];
  // let listname = [];
  // for (let i = 0; i <= email.length; i++) {
  //   listemail.push(email[i]);
  // }
  // for (let i = 0; i <= name.length; i++) {
  //   listname.push(name[i]);
  // }
  return new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GOOGLE_USER,
        pass: process.env.GOOGLE_PASSWORD,
      },
    });

    const message = {
      from: process.env.GOOGLE_USER,
      to: email,
      subject: "Hodina zacina",
      html: `
      <h3>Zdravime te</h3>
        <p>Hodina zachvilku zacina</p>
        <p>Pro pripojeni klikni na tento odkaz: <a target="_" href="TADY BUDE ADRESA K HODINE">Vstoupit na hodinu</a></p>
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
