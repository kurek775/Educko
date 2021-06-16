import Card from "../ui/Card";
import { useRef, useState } from "react";
import classes from "./lecture-form.module.css";
import { useSession } from "next-auth/client";

function LectureForm(props) {
  const [session, loading] = useSession();
  let ucitelJmeno;
  let ucitelBarva;
  const datumInputRef = useRef();
  const konecInputRef = useRef();
  const hodinaInputRef = useRef();
  const popisInputRef = useRef();
  const cenaInputRef = useRef();
  const kapacitaInputRef = useRef();
  const [selected, setSelected] = useState();
  const addSubject = (predmet) => {
    setSelected(predmet);
  };

  function submitHandler(event) {
    event.preventDefault();
    const enteredHodina = hodinaInputRef.current.value;
    const enteredPredmet = selected;
    const enteredDatum = new Date(datumInputRef.current.value).toString();
    const enteredKonecDatum = new Date(konecInputRef.current.value).toString();
    const eneterPopis = popisInputRef.current.value;
    const ucitel = session.user.email;
    const jmeno = ucitelJmeno;
    const barva = ucitelBarva;
    const kapacita = kapacitaInputRef.current.value;
    const cena = cenaInputRef.current.value;

    // console.log(enteredDatum);
    const RData = {
      predmet: enteredPredmet,
      datum: enteredDatum,
      konec: enteredKonecDatum,
      popis: eneterPopis,
      hodina: enteredHodina,
      ucitel: ucitel,
      barva: barva,
      jmeno: jmeno,
      cena: cena,
      kapacita: kapacita,
    };
    props.onAddReserve(RData);
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  {
    props.ucitel.map((z) => {
      if (session.user.email === z.email) {
        ucitelJmeno = z.name;
        ucitelBarva = z.barva;
      }
    });
  }

  return (
    <Card>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="hodina">Nazev hodiny</label>
          <input type="text" required id="hodina" ref={hodinaInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="datum-zacatek">Datum</label>
          <input
            type="datetime-local"
            required
            id="datum-zacatek"
            ref={datumInputRef}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="datum-konec">Konec hodiny</label>
          <input
            type="datetime-local"
            required
            id="datum-konec"
            ref={konecInputRef}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="hodina">Cena</label>
          <input type="number" required id="hodina" ref={cenaInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="hodina">Kapacita</label>
          <input type="number" required id="hodina" ref={kapacitaInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="popis">Popis</label>
          <textarea required id="popis" rows="4" ref={popisInputRef} />
        </div>

        <div>
          {props.predmet.map((sub, i) => (
            <div key={sub._id}>
              <input
                name="predmet"
                type="radio"
                id={sub._id}
                value={sub.predmet}
                onChange={() => addSubject(sub.predmet)}
              />
              <label htmlFor={sub._id}>{sub.predmet}</label>
            </div>
          ))}
        </div>

        <button>Vytvorit hodinu</button>
      </form>
    </Card>
  );
}

export default LectureForm;
