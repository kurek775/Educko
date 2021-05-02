
import classes from '../Modalreg.module.css';
import RegisterForm from "../Register_form"
import { useRouter } from "next/router";


function Modalreg(){
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-user", {
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
   <RegisterForm onAddMeetup={addMeetupHandler}></RegisterForm>
    </div>
    );
}

export default Modalreg;
