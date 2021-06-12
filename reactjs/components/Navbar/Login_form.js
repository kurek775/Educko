import classes from "./Login_form.module.css";
import { useRef } from "react";
import Link from "next/link";

import Register_link from "./Register_link";
import ForgottenPassword from "../../pages/zapomenute-heslo";
import ZapomenuteHeslo_link from "./Zapomenute_link";

function Loginform(props) {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function confirmHandler() {
    props.onConfirm();
  }
  async function submitHandler(event) {
    event.preventDefault();
    const enteredPassword = passwordInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    const UData = {
      password: enteredPassword,
      email: enteredEmail,
    };

    props.onAddMeetup(UData);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input type="email" required id="email" ref={emailInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Heslo</label>
        <input type="password" required id="password" ref={passwordInputRef} />
      </div>
      <ul>
        <li>
          <Register_link></Register_link>
        </li>
        <li>
          <ZapomenuteHeslo_link></ZapomenuteHeslo_link>
        </li>
        <li>
          <div className={classes.actions}>
            <button>Přihlásit</button>
          </div>
        </li>
      </ul>
    </form>
  );
}

export default Loginform;
