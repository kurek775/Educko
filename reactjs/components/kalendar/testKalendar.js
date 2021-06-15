import { Calendar, momentLocalizer } from "react-big-calendar";
import {Modal, Button }from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSession } from "next-auth/client";
import moment from "moment";
import { useState } from "react";
require("moment/locale/cs");


const localizer = momentLocalizer(moment);
const date = new Date();
const endDate = new Date() + 1;

function MyCalendar(props) {
  const [show, setShow] = useState(false);
  const [session, loading] = useSession();
  let userEmail = "";
  props.user.map((prop) => (userEmail = prop.email));
  const zapsan = props.reservation.map((res) => res.zapsan);

  function popupModal() {
    return (
      <Modal.Dialog>
      <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
      
        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
      
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
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
        popup={true}
        localizer={localizer}
        events={events}
        onSelectEvent={(event) => {
          if (
            session.user.image === "user" &&
            !event.users.some((u) => u.uzivatel === userEmail)
          ) {
            prihlasitHandler(event.id);
            // popupModal();
          } else {
            // alert(event.description);
            // handleShow();
            // handleShow;
            setShow(true);
            console.log(show);
            popupModal;
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
