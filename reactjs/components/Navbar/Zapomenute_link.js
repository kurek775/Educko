import classes from "./Register_link.module.css";
import Link from "next/link";

function ZapomenuteHeslo_link() {
  return (
    <div>
      <Link href="/zapomenute-heslo">
        <div className={classes.linktoreg}>Zapomenute heslo?</div>
      </Link>
    </div>
  );
}

export default ZapomenuteHeslo_link;
