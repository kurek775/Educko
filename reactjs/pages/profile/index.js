import { getSession } from "next-auth/client";

function ProfilePage(props) {
  const { email, name } = props;
  return (
    <div className="center">
      <h1>{name}</h1>
      <h1>{email}</h1>
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
    return {
      props: {
        name,
        email,
      },
    };
  }
}

export default ProfilePage;
