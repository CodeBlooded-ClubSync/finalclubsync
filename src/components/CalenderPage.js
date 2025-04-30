import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '../AllCss/CalenderPage.css';
import events from '../components/EventData'; // ✅ Import shared data


const CalendarPage = () => {
  return (
    <div className="calendar-page-container">
      <div className="events-grid">
        {events.map((event) => (
          <a href={`/event/${event.id}`} key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p><strong>📍</strong> {event.location}</p>
            <p><strong>📅</strong> {event.date}</p>
            <p><strong>👤</strong> {event.organizer}</p>
          </a>
        ))}
      </div>

      <div className="calendar-sidebar">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          height="auto"
        />
      </div>
    </div>
  );
};

export default CalendarPage;
