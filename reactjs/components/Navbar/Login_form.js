
import classes from './Login_form.module.css';
import {useRef} from "react";

import Register_link from './Register_link';

function Loginform(props){
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
    return( 
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
        <li ><Register_link></Register_link></li>
<li><div className={classes.actions}>
        <button >Přihlásit</button>
        </div></li>
        </ul>
        
       
    </form>

   
  
    );
}

export default Loginform;

