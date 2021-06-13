import { getSession } from "next-auth/client";
import { connectToDatabase } from "../../helpers/db";
import classes from "./profile.module.css"
function ProfilePage(props) {
  return (
    <div className={classes.info}>
      {props.users.map((u) => (
        <div key={u._id} >
          <ul>
<li>jméno: {u.name}</li>
<li>email: {u.email}</li>
<li> stav konta: {u.penize < 4 ? u.penize + " Educkoiny" : u.penize + " Educkoiny"}</li>


          </ul>
    
        </div>
      ))}
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
    console.log(usersCollection);
    return {
      props: {
        users: JSON.parse(JSON.stringify(usersCollection)),
        name,
        email,
      },
    };
  }
}

export default ProfilePage;
