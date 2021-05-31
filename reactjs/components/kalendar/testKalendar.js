import { Calendar, momentLocalizer } from "react-big-calendar";
import { useSession } from "next-auth/client";
import moment from "moment";
require("moment/locale/cs");

const localizer = momentLocalizer(moment);
const date = new Date();
const endDate = new Date() + 1;

function MyCalendar(props) {
  const [session, loading] = useSession();
  let userEmail = "";
  props.user.map((prop) => (userEmail = prop.email));
  const zapsan = props.reservation.map((res) => res.zapsan);

  async function prihlasitHandler(resID) {
    const enteredEmail = userEmail;
    const enteredID = resID;
    const enteredName = session.user.name;

    const SRData = {
      email: enteredEmail,
      name: enteredName,
      id: enteredID,
    };

    props.onSignReservation(SRData);
  }

  let events = [];
  let allDay = false;
  props.reservation.map((res) => {
    events.push({
      id: res._id,
      title: res.predmet,
      start: new Date(res.datum),
      end: new Date(res.konec),
      users: res.zapsan,
      description: res.popis,
      allDay: false,
    });
  });
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        onSelectEvent={(event) => {
          if (
            session.user.image === "user" &&
            !event.users.some((u) => u.uzivatel === userEmail)
          ) {
            prihlasitHandler(event.id);
          } else {
            alert(event.description);
          }
        }}
        startAccessor="start"
        endAccessor="end"
        culture="cs"
        messages={{
          next: "Další",
          previous: "Předchozí",
          today: "Dnes",
          month: "Měsíc",
          week: "Týden",
          day: "Den",
          date: "Datum",
          time: "Čas",
          event: "Událost",
          agenda: "Detail",
        }}
        style={{ height: 600 }}
      />
    </div>
  );
}

export default MyCalendar;
