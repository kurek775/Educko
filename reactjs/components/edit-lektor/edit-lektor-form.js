import Card from "../ui/Card";
import { useRef } from "react";
import classes from "./edit-lektor-form.module.css";

function EditLektorForm(props) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredID = props.id;
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const LData = {
      id: enteredID,
      name: enteredName,
      email: enteredEmail,
    };
    props.onEditLektor(LData);
  }

  return (
    <Card>
      <form key={props.id} onSubmit={submitHandler} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="name">Jmeno</label>
          <input
            type="text"
            required
            id="name"
            defaultValue={props.name}
            ref={nameInputRef}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            required
            id="email"
            defaultValue={props.email}
            ref={emailInputRef}
          />
        </div>

        <div className={classes.actions}>
          <button>Uložit změny</button>
        </div>
      </form>
    </Card>
  );
}

export default EditLektorForm;
