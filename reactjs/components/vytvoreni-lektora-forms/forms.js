import Card from "../ui/Card";
import classes from "./form.module.css";
import { useRef, useState } from "react";

function VytvareniLektora(props) {
  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [color, setColor] = useState();
  const colorInputRef = useRef();
  // console.log(colorInputRef);
  function submitHandler(event) {
    event.preventDefault();
    const enteredUsername = usernameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredColor = colorInputRef.current.value;
    console.log(enteredColor);
    const UData = {
      name: enteredUsername,
      password: enteredPassword,
      email: enteredEmail,
      color: enteredColor,
    };
    props.onAddLector(UData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="uname">Jméno</label>
          <input type="text" required id="uname" ref={usernameInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" required id="email" ref={emailInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="color">Barva</label>
          <input type="color" required id="color" ref={colorInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="password">Heslo</label>
          <input
            type="password"
            required
            id="password"
            ref={passwordInputRef}
          />
        </div>

        <button>Vytvořit účet</button>
      </form>
    </Card>
  );
}

export default VytvareniLektora;
