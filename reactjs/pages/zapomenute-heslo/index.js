import ZapomenuteHeslo from "../../components/Navbar/ZapomenuteHeslo";
import classes from "./forgotPassword.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

function ForgottenPassword() {
  const router = useRouter();
  const [error, setError] = useState(false);

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/user/poslaniMailuHeslo", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      setError(true);
      return;
      // throw new Error(data.message || "Stala se nejaka chyba");
    }
    console.log(data);
    router.replace("/");
  }
  return (
    <div className={classes.modal}>
      <ZapomenuteHeslo onAddMeetup={addMeetupHandler}></ZapomenuteHeslo>
    </div>
  );
}

export default ForgottenPassword;
