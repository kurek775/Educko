
import Link from "next/link";
import {useState} from "react";
import Modalreg from "../../pages/reg_modal"
import classes from "./Todor.module.css"

function Todor(){
   const [modalIsOpen, setModalIsOpen]= useState(false);
function deleteHandler(){
setModalIsOpen(true);
    
}
function closeModalHandler(){
    setModalIsOpen(false);
        
    }
    return( <div>

    
      <div className = {classes.linktoreg}onClick={deleteHandler}>Ještě u nás nemáte učet ?</div>
   {modalIsOpen &&<Modalreg  onConfirm= {closeModalHandler}/>}

  </div>)
}

export default Todor;