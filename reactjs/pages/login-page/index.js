import Loginform from "../../components/Navbar/Login_form";
import classes from "./Modal.module.css";
import { useRouter } from "next/router";
import { getSession, signIn } from "next-auth/client";
import { useState } from "react";

function Modal() {
  const router = useRouter();
  const [error, setError] = useState(false);

  async function addMeetupHandler(enteredMeetupData) {
    const { email, password } = enteredMeetupData;
    const result = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });
    if (!result.error) {
      router.replace("/");
    } else {
      setError(true);
    }
    console.log(result);
  }

  return (
    <div className={classes.modal}>
      <Loginform onAddMeetup={addMeetupHandler}></Loginform>
      {error && <p className="red">Heslo nebo email byl zadan spatne</p>}
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

export default Modal;
