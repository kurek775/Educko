import React, { useState } from "react";
import LectureForm from "../../components/hodiny/lecture-form";
import classes from "./modal.module.css";
import { connectToDatabase } from "../../helpers/db";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";

function CreateLecture(props) {
  const router = useRouter();
  const [error, setError] = useState(false);

  async function addReserveHandler(enteredReserveData) {
    const response = await fetch("/api/reservation/createLecture", {
      method: "POST",
      body: JSON.stringify(enteredReserveData),
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
      <LectureForm
        predmet={props.subjects}
        ucitel={props.lectors}
        onAddReserve={addReserveHandler}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const client = await connectToDatabase();
  const subjectCollection = await client
    .db()
    .collection("Subject")
    .find({})
    .toArray();

  const lectorCollection = await client
    .db()
    .collection("Lectores")
    .find({})
    .toArray();

  return {
    props: {
      subjects: JSON.parse(JSON.stringify(subjectCollection)),
      lectors: JSON.parse(JSON.stringify(lectorCollection)),
    },
  };
}

export default CreateLecture;
