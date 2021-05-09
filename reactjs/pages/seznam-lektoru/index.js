import { connectToDatabase } from "../../helpers/db";
import classes from "./seznamlektoru.module.css";
import Card from "../../components/ui/Card";

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
              <button>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const client = await connectToDatabase();
  const lectoresCollection = await client
    .db()
    .collection("Lectores")
    .find({})
    .toArray();
  return {
    props: {
      lectores: JSON.parse(JSON.stringify(lectoresCollection)),
    },
  };
}

export default SeznamLektoru;
