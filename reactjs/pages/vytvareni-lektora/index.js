import VytvareniLektora from "../../components/vytvoreni-lektora-forms/forms";
import classes from "./Modal.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

function SchuzkaPage() {
  const router = useRouter();
  const [error, setError] = useState(false);

  async function addLectorHandler(enteredLectorData) {
    const response = await fetch("/api/lectors/createLector", {
      method: "POST",
      body: JSON.stringify(enteredLectorData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      setError(true);
      return;
    }
    console.log(data);
    router.replace("/");
  }
  return (
    <div className={classes.modal}>
      <VytvareniLektora onAddLector={addLectorHandler} />
    </div>
  );
}

export default SchuzkaPage;
