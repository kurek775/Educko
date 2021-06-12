import classes from "./kontak.module.css";
import Kontaktform from "../../components/Navbar/Kontaktform";
function contacts() {
  return (
    <div className={classes.container}>
      <h1>Kontakty</h1>
      <p>
Máte na nás dotazy neváhejte kontaktujte nás na : 5648978977989778 nebo vyplňte tento formulář.
      </p>
      <Kontaktform></Kontaktform>
    </div>
  );
}
export default contacts;
