import Link from "next/link";
import classes from "./Register_link.module.css";

function ZapomenuteHeslo() {
  return (
    <div>
      <Link href="/reg_modal">
        <div className={classes.linktoreg}>Zapomněli jste heslo?</div>
      </Link>
    </div>
  );
}

export default ZapomenuteHeslo;
