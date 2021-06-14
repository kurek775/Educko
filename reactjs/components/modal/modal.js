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
      <h1>Chcete se prihlasit k hodine</h1>
      <p>Za prihlaseni se vam odecte 5 Educkoinu</p>
      <p>{props.events}</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Zrusit
      </button>
      <button className="btn" onClick={confirmHandler}>
        Zapsat se na hodinu
      </button>
    </div>
  );
}

export default Modal;
