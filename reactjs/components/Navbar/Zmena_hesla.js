import Card from "../ui/Card";
import classes from "./zapomenuteHeslo.module.css";
import { useRef } from "react";
import { useRouter } from "next/router";

function ZmenaHeslaForm(props) {
  const router = useRouter();
  const passwordInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const id = router.asPath.replace("/zapomenute-heslo/", "");
    const enteredPassword = passwordInputRef.current.value;

    const UData = {
      id: id,
      password: enteredPassword,
    };

    props.onAddMeetup(UData);
  }
  return (
<div className={classes.modal}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="password">Nove heslo</label>
          <input
            type="password"
            required
            id="password"
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Změnit heslo</button>
        </div>
      </form>
    </div>
  );
}

export default ZmenaHeslaForm;
