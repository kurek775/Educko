/*
import Loginform from './Login_form';
import classes from './Modal.module.css';
import { useRouter } from "next/router";

function Modal(){
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/login-user", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  }
    
    return( <div className={classes.modal}>
  
       <Loginform onAddMeetup={addMeetupHandler}></Loginform>


   
    </div>
    );
}

export default Modal;

