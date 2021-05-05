import Link from "next/link";

import NavStyle from "./NavStyle.module.css";
function Login_button() {
  return (
    <div>
      <Link href="/login-page">
        <div className="actions">
          <a className={NavStyle.button}>Přihlášení</a>
        </div>
      </Link>
    </div>
  );
}

export default Login_button;
