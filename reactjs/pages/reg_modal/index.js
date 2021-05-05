import classes from "./reg_modal.module.css";
import RegisterForm from "../../components/Navbar/Register_form";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";
import { useState } from "react";

function Modalreg() {
  const router = useRouter();
  const [error, setError] = useState(false);

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/auth/signup", {
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
      <RegisterForm onAddMeetup={addMeetupHandler}></RegisterForm>
      {error && <p>Email jiz existuje nebo heslo je prilis kratke</p>}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        session,
      },
    };
  }
}

export default Modalreg;
