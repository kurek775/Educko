import Card from "../ui/Card";
import classes from "./form.module.css";
import { useRef } from "react";

function VytvareniPredmetuForm(props) {
  const nazevPredmetuRef = useRef();
  const zkratkaPredmetuRef = useRef();
  const popisPredmetuRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredNazevPredmetu = nazevPredmetuRef.current.value;
    const enteredZkratkaPredmetu = zkratkaPredmetuRef.current.value;
    const enteredPopisPredmetu = popisPredmetuRef.current.value;

    const PredmetData = {
      predmet: enteredNazevPredmetu,
      zkratka: enteredZkratkaPredmetu,
      popis: enteredPopisPredmetu,
    };
    props.onAddSubject(PredmetData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="predmet">Nazev předmětu</label>
          <input type="text" required id="predmet" ref={nazevPredmetuRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="zkratka">Zkratka předmětu</label>
          <input type="text" required id="zkratka" ref={zkratkaPredmetuRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="password">Popis předmětu</label>
          <textarea
            id="popis"
            name="popis"
            rows="4"
            ref={popisPredmetuRef}
          ></textarea>
        </div>

   
          <button>Přidat předmět do databáze</button>
      
      </form>
    </Card>
  );
}

export default VytvareniPredmetuForm;
