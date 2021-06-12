import { useSession } from "next-auth/client";
import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./platba_form.module.css";

function PlatbaForm(props) {
  const [session, loading] = useSession();
  const castkaInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredCastka = castkaInputRef.current.value;

    const Castka = {
      castka: enteredCastka,
      userEmail: userEmail,
    };
    console.log(Castka);

    props.onAddPenize(Castka);
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  const userEmail = session.user.email;
  return (
    <Card>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="castka">Castka</label>
          <input type="text" required id="castka" ref={castkaInputRef} />
        </div>

        <div className={classes.actions}>
          <button>Nahrat penize</button>
        </div>
      </form>
    </Card>
  );
}

export default PlatbaForm;
