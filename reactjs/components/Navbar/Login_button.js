import Link from "next/link";

import NavStyle from "./NavStyle.module.css";
function Login_button() {
  return (
    <Link href="/login-page">
      <a className={NavStyle.Lbutton}>Přihlášení</a>
    </Link>
  );
}

export default Login_button;
