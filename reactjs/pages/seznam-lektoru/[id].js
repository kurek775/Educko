import { connectToDatabase } from "../../helpers/db";
import { Fragment } from "react";
import { ObjectID } from "bson";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import Link from "next/link";
import classes from "./seznamlektoru.module.css"

function LektorDetail(props) {
  const [session, loading] = useSession();
  const router = useRouter();

  async function deleteHandler(event) {
    const UData = {
      name: props.lektor.name,
      email: props.lektor.email,
    };
    event.preventDefault();
    const response = await fetch("/api/lectors/deleteLector", {
      method: "DELETE",
      body: JSON.stringify(UData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      return;
    }
    console.log(data);
    router.replace("/");
  }

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <Fragment>
    <div className={classes.Detail}>
        <div key={props.lektor._id} >
      
          <h1 >{props.lektor.name}</h1>
          <p>{props.lektor.email}</p>
          <p>Vyučuje : </p>
          <div>
            {props.lektor.subject.map((sub) => (
              <div key={sub.id}>
                <p>{sub.predmet}</p>
              </div>
            ))}
          </div>
          </div>
         
        {session.user.name === "admin" && (
          <button className={classes.Smazat} onClick={deleteHandler}>Smazat lektora</button>
        )}
        {session.user.name === "admin" && (
          <Link href={"/seznam-lektoru/uprava-lektora/" + props.lektor._id}>
            <button className={classes.Edit}>Upravit lektora</button>
          </Link>
        )}
        </div>
      </Fragment>
    );
  }
}

export async function getStaticProps({ params }) {
  const id = new ObjectID(params.id);
  const client = await connectToDatabase();
  const lektorsData = await client
    .db()
    .collection("Lectores")
    .findOne({ _id: id });
  console.log(lektorsData);
  return {
    props: {
      lektor: JSON.parse(JSON.stringify(lektorsData)),
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const client = await connectToDatabase();
  const lektorsData = await client
    .db()
    .collection("Lectores")
    .find({})
    .toArray();
  const paths = lektorsData.map((lector) => {
    return {
      params: {
        id: lector._id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
}

export default LektorDetail;
