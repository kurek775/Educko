import { ObjectID } from "bson";
import { getSession } from "next-auth/client";
import { Fragment, useState } from "react";
import EditLektorForm from "../../../components/edit-lektor/edit-lektor-form";
import classes from "./modal.module.css";
import { useRouter } from "next/router";

import { connectToDatabase } from "../../../helpers/db";

function EditLektor(props) {
  const router = useRouter();
  const [error, setError] = useState(false);
  async function submitHandler(EntereData) {
    const response = await fetch("/api/lectors/editLector", {
      method: "PATCH",
      body: JSON.stringify(EntereData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      setError(true);
      return;
    }
    router.replace("/seznam-lektoru");
  }
  return (
    <div className={classes.modal}>
      <EditLektorForm
        onEditLektor={submitHandler}
        name={props.lektor.name}
        email={props.lektor.email}
        id={props.lektor._id}
      ></EditLektorForm>
      {error && <p>Email je zadán špatně</p>}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const newId = new ObjectID(params.id);
  const client = await connectToDatabase();
  const lectorsData = await client
    .db()
    .collection("Lectores")
    .findOne({ _id: newId });
  return {
    props: {
      lektor: JSON.parse(JSON.stringify(lectorsData)),
    },
  };
}

export default EditLektor;
