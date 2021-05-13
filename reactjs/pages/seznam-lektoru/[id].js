import { connectToDatabase } from "../../helpers/db";
import { Fragment } from "react";
import { ObjectID } from "bson";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import Link from "next/link";

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
        <div key={props.lektor._id}>
          <h1>{props.lektor.name}</h1>
          <p>{props.lektor.email}</p>
          <p>PREDMETY</p>
          <div>
            {props.lektor.subject.map((sub) => (
              <div key={sub.id}>
                <p>{sub.predmet}</p>
              </div>
            ))}
          </div>
        </div>
        {session.user.name === "admin" && (
          <button onClick={deleteHandler}>Smazat lektora</button>
        )}
        {session.user.name === "admin" && (
          <Link href={"/seznam-lektoru/uprava-lektora/" + props.lektor._id}>
            <button>Upravit lektora</button>
          </Link>
        )}
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
