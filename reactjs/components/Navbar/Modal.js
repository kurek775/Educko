
import classes from './Modal.module.css';
import {useRef} from "react";

import Todor from './Todor';

function Modal(props){
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    function confirmHandler(){
props.onConfirm();
    }
    function submitHandler(event) {
        event.preventDefault();
    
     
        const enteredPassword = passwordInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
      
    
        const UData = {
  
          password: enteredPassword,
           email: enteredEmail,
    
        };
    
        props.onAddMeetup(UData);
      }
    return( <div className={classes.modal}>
    <form  className={classes.form} onSubmit={submitHandler}>
    <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input type='text' required id='email' ref={emailInputRef} />
        </div>
        <div className={classes.control} >
          <label htmlFor='address'>Heslo</label>
          <input type='text' required id='password' ref={passwordInputRef} />
        </div>
        <ul>
        <li><Todor></Todor></li>
<li><div className={classes.actions}>
        <button onClick={confirmHandler}>Přihlásit</button>
        </div></li>
        </ul>
        
       
    </form>

   
    </div>
    );
}

export default Modal;

