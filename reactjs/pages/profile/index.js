import { getSession } from "next-auth/client";
import { connectToDatabase } from "../../helpers/db";

function ProfilePage(props) {
  return (
    <div className="center">
      {props.users.map((u) => (
        <div key={u._id}>
          <h1>{u.name}</h1>
          <h1>{u.email}</h1>
          <h1>
            {u.penize < 4 ? u.penize + " Educaky" : u.penize + " Educaku"}
          </h1>
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
