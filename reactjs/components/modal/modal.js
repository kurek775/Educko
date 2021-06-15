import classes from "./modal.module.css";

function Modal(props) {
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
      {props.zapsan === true && <p>Za přihlášení se vám odečte 5 Educkoinů</p>}
      <p>{props.events}</p>
      <button className={classes.button} onClick={cancelHandler}>
        Zrušit
      </button>
      {props.zapsan === true && (
        <button className={classes.button1} onClick={confirmHandler}>
          Zapsat se na hodinu
        </button>
      )}
    </div>
  );
}

export default Modal;
