import classes from "./Kontaktform.module.css";
import { useRef } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function Kontaktform(props) {
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  function confirmHandler() {
    props.onConfirm();
  }
  async function submitHandler(event) {
    event.preventDefault();
    const enteredMessage = messageInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    const UData = {
      message: enteredMessage,
      email: enteredEmail,
    };

    props.onAddMessage(UData);
  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="email">Váš email</label>
        <input type="email" required id="email" ref={emailInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="message">Vaše zpráva</label>
        <textarea type="message" required id="message" ref={messageInputRef} />
      </div>

      <div className={classes.actions}>
        <button>Odeslat</button>
      </div>
    </form>
  );
}

export default Kontaktform;
