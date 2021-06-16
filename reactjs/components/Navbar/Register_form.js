import { useRef, useState } from "react";

import Card from "../ui/Card";
import classes from "./Register_form.module.css";

function RegisterForm(props) {
  const tridy = [
    {
      id: 1,
      trida: "1. trida",
    },
    {
      id: 2,
      trida: "2. trida",
    },
    {
      id: 3,
      trida: "3. trida",
    },
    {
      id: 4,
      trida: "4. trida",
    },
    {
      id: 5,
      trida: "5. trida",
    },
  ];
  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const emailZastupceRef = useRef();
  const passwordInputRef = useRef();
  const [selected, setSelected] = useState();
  const addTrida = (trida) => {
    setSelected(trida);
  };

  function submitHandler(event) {
    event.preventDefault();

    const enteredUname = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const eneteredZastupceMail = emailZastupceRef.current.value;
    const trida = selected;

    const UData = {
      name: enteredUname,
      password: enteredPassword,
      trida: trida,
      email: enteredEmail,
      emailZastupce: eneteredZastupceMail,
    };

    props.onAddMeetup(UData);
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="uname">Vase jmeno</label>
        <input type="text" required id="uname" ref={usernameInputRef} />
      </div>

      <div className={classes.control}>
        <label htmlFor="email">Vas e-mail</label>
        <input type="text" required id="email" ref={emailInputRef} />
      </div>

      <div className={classes.control}>
        <label htmlFor="emailZastupce">E-mail zakoneho zastupce</label>
        <input type="text" required id="emailZastupce" ref={emailZastupceRef} />
      </div>

      {tridy.map((e) => (
        <div key={e.id}>
          <label for="prvni">{e.trida}</label>
          <input
            type="radio"
            id="prvni"
            name="trida"
            value="1. trida"
            onChange={() => addTrida(e.trida)}
          />
        </div>
      ))}
      {/* <div>
        <label for="prvni">1. trida</label>
        <input type="radio" id="prvni" name="trida" value="1. trida" />
      </div>
      <div>
        <label for="druha">2. trida</label>
        <input type="radio" id="druha" name="trida" value="2. trida" />
      </div>
      <div>
        <label for="treti">3. trida</label>
        <input type="radio" id="treti" name="trida" value="3. trida" />
      </div>
      <div>
        <label for="ctvrta">4. trida</label>
        <input type="radio" id="ctvrta" name="trida" value="4. trida" />
      </div>
      <div>
        <label for="pata">5. trida</label>
        <input type="radio" id="pata" name="trida" value="5. trida" />
      </div> */}

      <div className={classes.control}>
        <label htmlFor="password">Heslo</label>
        <input type="password" required id="password" ref={passwordInputRef} />
      </div>

      <button>Vytvořit účet</button>
    </form>
  );
}

export default RegisterForm;
