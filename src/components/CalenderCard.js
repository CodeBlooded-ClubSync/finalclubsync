// src/components/EventCard.jsx
import React from 'react';
import './EventCard.css';

const CalenderCard = ({ title, date, location, organizer }) => {
  return (
    <div className="bg-[#1e1e1e] p-4 rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-300">📍 {location}</p>
      <p className="text-gray-400">🗓 {date}</p>
      <p className="text-gray-400">👤 {organizer}</p>
    </div>
  );
};

export default CalenderCard;
