import classes from "./prihlaseni.module.css";
import { useRef } from "react";

function SignInForm(props) {
  const idReservaceRef = useRef();
  console.log(idReservaceRef);
  const maximalniKapacita = 20;
  let userEmail = "";
  props.user.map((prop) => (userEmail = prop.email));
  console.log(userEmail);
  async function prihlasitHandler(event) {
    event.preventDefault();
    const EnteredMail = userMail;
  }

  // ID HODINY ZAJISTIT
  return (
    <div>
      <h1 className={classes.headline}>Seznam planovanych hodin</h1>
      <ul className={classes.container}>
        {props.reservation.map((prop) => (
          <li key={prop._id} className={classes.modal}>
            <h1>{prop.hodina}</h1>
            <h3>{prop.predmet}</h3>
            <h4>{prop.datum}</h4>
            <p>
              {maximalniKapacita}/{prop.kapacita}
            </p>
            <p>{prop.popis}</p>
            <div className={classes.actions}>
              <button onClick={prihlasitHandler}>Prihlasit se</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SignInForm;
