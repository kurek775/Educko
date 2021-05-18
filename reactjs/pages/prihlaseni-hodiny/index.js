import SignInForm from "../../components/hodiny/prihlaseni";
import { getSession } from "next-auth/client";
import { connectToDatabase } from "../../helpers/db";

function SingToLecture(props) {
  return (
    <div>
      <SignInForm reservation={props.reservation} user={props.user} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  const userEmail = session.user.email;
  const client = await connectToDatabase();
  const reserveCollection = await client
    .db()
    .collection("Reservation")
    .find({})
    .toArray();
  const user = await client
    .db()
    .collection("Users")
    .find({ email: userEmail })
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
        user: JSON.parse(JSON.stringify(user)),
        reservation: JSON.parse(JSON.stringify(reserveCollection)),
      },
    };
  }
}
export default SingToLecture;
