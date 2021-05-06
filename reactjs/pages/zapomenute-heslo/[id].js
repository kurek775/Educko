import { useRouter } from "next/router";
import ZmenaHeslaForm from "../../components/Navbar/Zmena_hesla";
import classes from "./forgotPassword.module.css";
import { useState } from "react";

function PasswordReset() {
  const [error, setError] = useState(false);
  const router = useRouter();

  async function submitHandler(passwordData) {
    const response = await fetch("/api/user/heslo", {
      method: "PATCH",
      body: JSON.stringify(passwordData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      console.log(data);
      setError(true);
      return;
    }
    console.log(data);
    router.replace("/");
  }
  return (
    <div className={classes.modal}>
      <ZmenaHeslaForm onAddMeetup={submitHandler}></ZmenaHeslaForm>
      {error && <p>Heslo je zadano spatne</p>}
    </div>
  );
}

export default PasswordReset;
