import classes from "./zapomenuteHeslo.module.css";
import Card from "../ui/Card";
import { useRef } from "react";

function ZapomenuteHeslo(props) {
  const emailInputRef = useRef();
  async function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;

    const UData = {
      email: enteredEmail,
    };

    props.onAddMeetup(UData);
  }
  return (

      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="text" required id="email" ref={emailInputRef} />
        </div>
     
          <button>Změnit heslo</button>
  
      </form>
 
  
  );
}

export default ZapomenuteHeslo;
