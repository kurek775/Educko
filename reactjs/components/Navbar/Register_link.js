
import Link from "next/link";
import {useState} from "react";
import Modalreg from "../../pages/reg_modal"
import classes from "./Register_link.module.css"

function Register_link(){
  
    return( <div>

    <Link href="/reg_modal">
    <div className = {classes.linktoreg}  >Ještě u nás nemáte učet </div>

    </Link>

  </div>)
  
    


}

export default Register_link;