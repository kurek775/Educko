import MyCalendar from "../../components/kalendar/testKalendar";
import { getSession } from "next-auth/client";
import { connectToDatabase } from "../../helpers/db";
import { useRouter } from "next/router";

function Calendar(props) {
  const router = useRouter();

  async function sendReservationHandler(enteredReservation) {
    const response = await fetch("/api/reservation/signReserve", {
      method: "PATCH",
      body: JSON.stringify(enteredReservation),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      setError(true);
      return;
    }
    router.replace("/kalendar-rezervaci");
  }

  async function removeReservationHandler(enteredReservation) {
    const response = await fetch("/api/reservation/deleteReservation", {
      method: "PATCH",
      body: JSON.stringify(enteredReservation),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      setError(true);
      return;
    }
    router.replace("/kalendar-rezervaci");
  }

  return (
    <MyCalendar
      user={props.user}
      reservation={props.reservation}
      onSignReservation={sendReservationHandler}
      onRemoveReservation={removeReservationHandler}
    />
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
    const userEmail = session.user.email;
    const client = await connectToDatabase();
    const reserveCollection = await client
      .db()
      .collection("Reservation")
      .find({})
      .toArray();
    console.log(JSON.parse(JSON.stringify(reserveCollection)));
    const user = await client
      .db()
      .collection("Users")
      .find({ email: userEmail })
      .toArray();
    return {
      props: {
        user: JSON.parse(JSON.stringify(user)),
        reservation: JSON.parse(JSON.stringify(reserveCollection)),
      },
    };
  }
}
export default Calendar;
