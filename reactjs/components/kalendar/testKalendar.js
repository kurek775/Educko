import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
require("moment/locale/cs");

const localizer = momentLocalizer(moment);
const date = new Date();
const endDate = new Date() + 1;
const Events = [
  {
    id: 0,
    title: "All Day Event very long title",
    allDay: true,
    start: new Date(2021, 3, 0),
    end: new Date(2021, 3, 1),
  },
  {
    id: 1,
    title: "Long Event",
    start: new Date(2021, 3, 7),
    end: new Date(2021, 3, 10),
  },

  {
    id: 2,
    title: "DTS STARTS",
    start: new Date(2021, 2, 13, 0, 0, 0),
    end: new Date(2021, 2, 20, 0, 0, 0),
  },

  {
    id: 3,
    title: "DTS ENDS",
    start: new Date(2021, 10, 6, 0, 0, 0),
    end: new Date(2021, 10, 13, 0, 0, 0),
  },

  {
    id: 4,
    title: "Some Event",
    start: new Date(2021, 3, 9, 0, 0, 0),
    end: new Date(2021, 3, 10, 0, 0, 0),
  },
];

function MyCalendar(props) {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={Events}
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
        }}
        style={{ height: 500 }}
      />
    </div>
  );
}

export default MyCalendar;
