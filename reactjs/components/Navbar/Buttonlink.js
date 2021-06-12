import Link from "next/link";

import NavStyle from "./NavStyle.module.css";
function Buttonlink(props) {
  return (
    <Link href={props.link}>
      <a className={NavStyle.button}>{props.nazev}</a>
    </Link>
  );
}

export default Buttonlink;