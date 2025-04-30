// components/CalenderView.js
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

const CalenderView = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={[
        { title: "Tech Fest", date: "2025-05-04" },
        { title: "Coding Contest", date: "2025-05-10" },
        { title: "Workshop", date: "2025-05-15" }
      ]}
      height="auto"
    />
  );
};

export default CalenderView;
