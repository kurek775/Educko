import classes from "./kontak.module.css";
import Kontaktform from "../../components/Navbar/Kontaktform";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useRouter } from "next/router";
function contacts() {
  const router = useRouter();
  async function sendMail(enteredData) {
    // console.log(enteredData);
    const response = await fetch("/api/mail/contactMail", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      //setError(true);
      console.log(response);
      return;
    }
    console.log(data);
    router.replace("/");
  }
  return (
    <div className={classes.flexBox}>
      <div className={classes.flexItem}>
        <ul>
          <li className={classes.content}>
            <FaEnvelope size={25} style={{ marginRight: 5 }} /> info@educko.cz
          </li>
          <li className={classes.content}>
            <FaPhoneAlt size={25} style={{ marginRight: 5 }} /> 879 456 133
          </li>
        </ul>
      </div>
      <div className={classes.flexItem2}></div>
      <div className={classes.container}>
        <h1>Kontakty</h1>
        <p>
          Máte na nás dotazy neváhejte kontaktujte nás na : 5648978977989778
          nebo vyplňte tento formulář.
        </p>
        <Kontaktform onAddMessage={sendMail}></Kontaktform>
      </div>
    </div>
  );
}
export default contacts;
