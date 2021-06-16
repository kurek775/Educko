import classes from "./modal.module.css";

function Modal(props) {
  console.log(props.events);
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }
  //   console.log(props.events);
  return (
    <div className={classes.modal}>
      <h1>{props.zapsan ? "Chcete se přihlásit" : "Jste přihlášen"}</h1>
      {props.events.map(
        (e) =>
          e.id === props.id && (
            <div key={props.id}>
              <p>{e.title}</p>
              <p>{e.jmeno}</p>
              <p>
                {e.kapacita} / {e.users.length}
              </p>
              <p>{e.start.toString()}</p>
            </div>
          )
      )}
      {props.zapsan === true && (
        <div>
          {props.events.map((e) => (
            <p>Za rezervaci zaplatite {e.cena} Educkoinu</p>
          ))}
        </div>
      )}

      {props.zapsan === false && (
        <button className={classes.button} onClick={cancelHandler}>
          Zrušit
        </button>
      )}

      {props.zapsan === true && (
        <div>
          {props.events.map((e) =>
            e.users.length === e.kapacita ? (
              <p>Hodina je zaplnena</p>
            ) : (
              <button onClick={confirmHandler}>Zapsat se na hodinu</button>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Modal;
