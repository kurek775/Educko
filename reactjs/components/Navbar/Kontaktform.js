import classes from "./Kontaktform.module.css";
import { useRef } from "react";


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
      <label> Vložením zprávy souhlasíte s podmínkami ochrany osobních údajů</label>
     

      <div className={classes.actions}>
        <button>Odeslat</button>
      </div>
    </form>



  );
}

export default Kontaktform;
