import { connectToDatabase } from "../../helpers/db";
import classes from "./seznamlektoru.module.css";
import Link from "next/link";
import { getSession } from "next-auth/client";

function SeznamLektoru({ lectores }) {
  return (
    <div>
      <h1 className={classes.headline}>Naši lektoři</h1>
      <ul className={classes.container}>
        {lectores.map((lector) => (
          <li key={lector._id} className={classes.modal}>
            <h1>{lector.name}</h1>
            <p>{lector.email}</p>
            <div className={classes.actions}>
              <Link href={"seznam-lektoru/" + lector._id}>
                <button>Detail</button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  const client = await connectToDatabase();
  const lectoresCollection = await client
    .db()
    .collection("Lectores")
    .find({})
    .toArray();
  if (!session) {
    return {
      redirect: {
        destination: "/login-page",
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        lectores: JSON.parse(JSON.stringify(lectoresCollection)),
      },
    };
  }
}

export default SeznamLektoru;
