import classes from "./prihlaseni.module.css";
import { useRef } from "react";
import { useSession } from "next-auth/client";

function SignInForm(props) {
  const [session, loading] = useSession();

  // console.log(props.reservation.map((prop) => console.log(prop)));
  const maximalniKapacita = 20;
  let userEmail = "";
  props.user.map((prop) => (userEmail = prop.email));

  async function prihlasitHandler(resID) {
    const enteredEmail = userEmail;
    const enteredID = resID;
    const enteredName = session.user.name;

    const SRData = {
      email: enteredEmail,
      name: enteredName,
      id: enteredID,
    };

    props.onSignReservation(SRData);
  }

  async function odhlasitHandler(resID) {
    const enteredEmail = userEmail;
    const enteredID = resID;
    const enteredName = session.user.name;

    const SRData = {
      email: enteredEmail,
      name: enteredName,
      id: enteredID,
    };

    props.onSignOutReservation(SRData);
  }

  async function zahajitHandler(resID) {
    const enteredID = resID;

    const Data = {
      id: enteredID,
    };

    props.onStartLecture(Data);
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  const sessionEmail = session.user.email;
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
            {session.user.image === "user" && (
              <div className={classes.actions}>
                {prop.zapsan.some((e) => e.uzivatel === sessionEmail) ? (
                  <button onClick={() => odhlasitHandler(prop._id)}>
                    Odhlasit se
                  </button>
                ) : (
                  <button onClick={() => prihlasitHandler(prop._id)}>
                    Prihlasit se
                  </button>
                )}
              </div>
            )}

            {session.user.image === "lector" && (
              <div className={classes.actions}>
                <button onClick={() => zahajitHandler(prop._id)}>
                  Zahajit
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SignInForm;
