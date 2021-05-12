import Card from "../ui/Card";
import { useRef } from "react";
import classes from "./edit-lektor-form.module.css";

function EditLektorForm(props) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const subjectInputRef = useRef([]);

  console.log(subjectInputRef);
  function submitHandler(event) {
    event.preventDefault();
    const enteredID = props.id;
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredSubject = subjectInputRef.current.value;
    console.log(enteredSubject);
    const LData = {
      id: enteredID,
      name: enteredName,
      email: enteredEmail,
      subject: enteredSubject,
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
        <div>
          {props.subject.map((sub) => (
            <div key={sub._id}>
              <input
                type="checkbox"
                id={sub._id}
                name={sub._id}
                defaultValue=""
                ref={subjectInputRef}
              />
              <label htmlFor={sub._id}>{sub.predmet}</label>
            </div>
          ))}
        </div>

        <div className={classes.actions}>
          <button>Uložit změny</button>
        </div>
      </form>
    </Card>
  );
}

export default EditLektorForm;
