import {useState} from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop"
import NavStyle from "./NavStyle.module.css";
function Todo(){
   const [modalIsOpen, setModalIsOpen]= useState(false);
function deleteHandler(){
setModalIsOpen(true);
    
}
function closeModalHandler(){
    setModalIsOpen(false);
        
    }
    return( <div>

    <div className="actions"> 
      <button className={NavStyle.button} onClick={deleteHandler}>Přihlášení</button></div>
   {modalIsOpen &&<Modal onCancel={closeModalHandler} onConfirm= {closeModalHandler}/>}
   {modalIsOpen &&<Backdrop onClick={closeModalHandler}/>}
  </div>)
}

export default Todo;








