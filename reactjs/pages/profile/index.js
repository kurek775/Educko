import { getSession, session, useSession } from "next-auth/client";
import { connectToDatabase } from "../../helpers/db";
import classes from "./profile.module.css";
function ProfilePage(props) {
  const [session, loading] = useSession();
  console.log(
    props.reservation.map((u) =>
      u.zapsan.some((z) => z.uzivatel === props.email)
    )
  );
  return (
    <div>
      <div className={classes.infouser}>
        {props.users.map((u) => (
          <div>
            <ul key={u._id}>
              <li>jméno: {u.name}</li>
              <li>email: {u.email}</li>
              {/* <li>
                {" "}
                stav konta:{" "}
                {u.penize < 4
                  ? u.penize + " Educkoiny"
                  : u.penize + " Educkoiny"}
              </li> */}
            </ul>
          </div>
        ))}
      </div>
      {session.user.image !== "lector" && (
        <div>
          <div className={classes.blok}>
            <h2>Moje hodiny</h2>
          </div>
          <div className={classes.info}>
            {props.reservation.map(
              (u) =>
                u.zapsan.some((z) => z.uzivatel === props.email) && (
                  <ul key={u._id}>
                    <li>Nazev hodiny: {u.hodina}</li>
                    <li>Predmet: {u.predmet}</li>
                    <li>Popis hodiny: {u.popis}</li>
                    <li>Datum: {u.datum}</li>
                    <li>URL Hodiny: {u.meetURL}</li>
                  </ul>
                )
            )}
            {/* {props.reservation.map((u) =>
            u.zapsan.some((z) => z.uzivatel === props.email)
          ) && (
            <div>
              
            </div>
          )} */}
          </div>
        </div>
      )}
    </div>
  );
}
export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/login-page",
        permanent: false,
      },
    };
  } else {
    const { name, email } = session.user;
    const client = await connectToDatabase();
    const usersCollection = await client
      .db()
      .collection("Users")
      .find({ email: email })
      .toArray();
    const reservationCollection = await client
      .db()
      .collection("Reservation")
      .find({})
      .toArray();
    return {
      props: {
        users: JSON.parse(JSON.stringify(usersCollection)),
        reservation: JSON.parse(JSON.stringify(reservationCollection)),
        email,
      },
    };
  }
}

export default ProfilePage;
