import Link from "next/link";
import {useState} from "react";
import Modal from "../../pages/login-page";
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
<Link href="/login-page">
    <div className="actions"> 
      <a className={NavStyle.button} onClick={deleteHandler}>Přihlášení</a></div>
</Link>
  </div>)
}

export default Todo;








