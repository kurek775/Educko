import Card from "../ui/Card";
import { createRef, useEffect, useRef, useState } from "react";
import classes from "./edit-lektor-form.module.css";

function EditLektorForm(props) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const subjectInputRef = useRef([]);
  const [selected, setSelected] = useState([]);

  const addSubject = (_id, predmet) => {
    setSelected([
      ...selected,
      {
        id: _id,
        predmet: predmet,
      },
    ]);
  };

  // console.log(selected);
  function submitHandler(event) {
    event.preventDefault();
    const enteredID = props.id;
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredSubject = selected;
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
          {props.subject.map((sub, i) => (
            <div key={sub._id}>
              <input
                type="checkbox"
                id={sub._id}
                value={sub.predmet}
                onChange={() => addSubject(sub._id, sub.predmet)}
              />
              <label htmlFor={sub._id}>{sub.predmet}</label>
            </div>
          ))}
        </div>

  
          <button>Uložit změny</button>
        
      </form>
      <h2>Predmety ktere uci tento lektor</h2>
      {props.predmety.map((pred) => (
        <div key={pred.id}>
          <p>{pred.predmet}</p>
        </div>
      ))}
    </Card>
  );
}

export default EditLektorForm;
