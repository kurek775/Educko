import classes from "./prihlaseni.module.css";
import { useRef } from "react";
import { useSession } from "next-auth/client";

function SignInForm(props) {
  const [session, loading] = useSession();
  console.log(props.reservation.map((prop) => console.log(prop)));
  const maximalniKapacita = 20;
  let userEmail = "";
  props.user.map((prop) => (userEmail = prop.email));
  async function prihlasitHandler(resID) {
    const enteredEmail = userEmail;
    const enteredID = resID;

    const SRData = {
      email: enteredEmail,
      id: enteredID,
    };

    props.onSignReservation(SRData);
  }
  async function odhlasitHandler(resID) {
    const enteredEmail = userEmail;
    const enteredID = resID;

    const SRData = {
      email: enteredEmail,
      id: enteredID,
    };

    props.onSignOutReservation(SRData);
  }
  if (loading) {
    return <p>Loading...</p>;
  }
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
            {/* OPRAVIT TLACITKA - ZOBRAZUJOU SE BLBE */}
            <div className={classes.actions}>
              {/* {prop.zapsan.length < 20 && (
                <button onClick={() => prihlasitHandler(prop._id)}>
                  Prihlasit se
                </button>
              )} */}
              {prop.zapsan.map((p) => (
                <div key={p.uzivatel}>
                  {p.uzivatel === session.user.email && (
                    <button onClick={() => odhlasitHandler(prop._id)}>
                      Odhlasit se
                    </button>
                  )}

                  {p.uzivatel !== session.user.email && (
                    <button onClick={() => prihlasitHandler(prop._id)}>
                      Prihlasit se
                    </button>
                  )}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SignInForm;
