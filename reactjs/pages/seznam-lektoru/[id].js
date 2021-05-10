import { connectToDatabase } from "../../helpers/db";
import { Fragment } from "react";
import { ObjectID } from "bson";
import { useSession } from "next-auth/client";

function LektorDetail(props) {
  const [session, loading] = useSession();
  console.log(session);
  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <Fragment>
        <div key={props.lektor._id}>
          <h1>{props.lektor.name}</h1>
          <p>{props.lektor.email}</p>
          <p>PREDMETY</p>
        </div>
        {session.user.name === "admin" && <button>Smazat lektora</button>}
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
