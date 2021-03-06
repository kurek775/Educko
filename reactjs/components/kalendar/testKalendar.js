import { Calendar, momentLocalizer } from "react-big-calendar";
import Modal from "../modal/modal";
import Backdrop from "../modal/backdrop";
import { useSession } from "next-auth/client";
import moment from "moment";
import { useRef, useState } from "react";
require("moment/locale/cs");

const localizer = momentLocalizer(moment);
const date = new Date();
const endDate = new Date() + 1;

function MyCalendar(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [id, setID] = useState("");
  const [zapsan, setZapsan] = useState(false);
  // const [castka, setCastka] = useState();
  const [session, loading] = useSession();
  let userEmail = "";
  props.user.map((prop) => (userEmail = prop.email));

  function openModalHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  async function prihlasitHandler(resID) {
    const enteredEmail = userEmail;
    const enteredID = resID;
    const enteredName = session.user.name;
    // const enteredCena = castka;

    const SRData = {
      email: enteredEmail,
      name: enteredName,
      id: enteredID,
      // castka: castka,
    };

    props.onSignReservation(SRData);
    setModalIsOpen(false);
  }

  function odhlasitHandler(resID) {
    const enteredEmail = userEmail;
    const enteredID = resID;

    const SRData = {
      email: enteredEmail,
      id: enteredID,
      // castka: castka,
    };

    props.onRemoveReservation(SRData);
    setModalIsOpen(false);
  }

  let events = [];
  let allDay = false;
  props.reservation.map((res) => {
    events.push({
      id: res._id,
      // cena: res.cena,
      kapacita: res.kapacita,
      title: res.predmet,
      meetURL: res.meetURL,
      barva: res.barva,
      jmeno: res.jmeno,
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
        eventPropGetter={(event) => {
          let newStyle = {
            backgroundColor: event.barva,
          };
          return {
            style: newStyle,
          };
        }}
        onSelectEvent={(event) => {
          {
            if (
              session.user.image === "user" &&
              !event.users.some((u) => u.uzivatel === userEmail)
            ) {
              openModalHandler();
              setID(event.id);
              // setCastka(event.cena);
              setZapsan(true);
            } else {
              openModalHandler();
              setID(event.id);
              // setCastka(event.cena);
              setZapsan(false);
            }
          }
        }}
        startAccessor="start"
        endAccessor="end"
        culture="cs"
        messages={{
          next: "Dal????",
          previous: "P??edchoz??",
          today: "Dnes",
          month: "M??s??c",
          week: "T??den",
          day: "Den",
          date: "Datum",
          time: "??as",
          event: "Ud??lost",
          agenda: "Detail",
        }}
        style={{ height: 600 }}
      />
      {modalIsOpen && (
        <Modal
          onCancel={() => odhlasitHandler(id)}
          onConfirm={() => prihlasitHandler(id)}
          zapsan={zapsan}
          events={events}
          id={id}
        />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default MyCalendar;
