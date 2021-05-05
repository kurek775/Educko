import Link from "next/link";

import NavStyle from "./NavStyle.module.css";
function Login_button() {
  return (
    <div>
      <Link href="/login-page">
        <div>
          <button className={NavStyle.button}>Přihlášení</button>
        </div>
      </Link>
    </div>
  );
}

export default Login_button;
