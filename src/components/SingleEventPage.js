// import React from 'react';
// import { useParams } from 'react-router-dom';
// import events from '../components/EventData'; // Adjust path if needed

// const SingleEventPage = () => {
//   const { id } = useParams();
//   const event = events.find(e => e.id === parseInt(id));

//   if (!event) return <h2 className="text-center mt-10">Event not found</h2>;

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
//       <p><strong>Date:</strong> {event.date}</p>
//       <p><strong>Location:</strong> {event.location}</p>
//       <p><strong>Organizer:</strong> {event.organizer}</p>
//       <p><strong>Description:</strong> {event.description}</p>
//     </div>
//   );
// };

// export default SingleEventPage;

import React from 'react';
import { useParams } from 'react-router-dom';
import events from '../components/EventData'; // Adjust the path if needed

const SingleEventPage = () => {
  const { id } = useParams();
  const event = events.find(e => e.id === parseInt(id));

  if (!event) {
    return <h2 className="text-center mt-10 text-xl text-red-500">Event not found</h2>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">{event.title}</h1>
        <p className="text-gray-700 mb-2"><strong>Date:</strong> {event.date}</p>
        <p className="text-gray-700 mb-2"><strong>Location:</strong> {event.location}</p>
        <p className="text-gray-700 mb-2"><strong>Organizer:</strong> {event.organizer}</p>
        <p className="text-gray-700"><strong>Description:</strong> {event.description}</p>
      </div>
    </div>
  );
};

export default SingleEventPage;
