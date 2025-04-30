import React, { useState } from 'react';
import './AddEventPage.css';

const AddEventPage = ({ onAddEvent }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    organizer: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAddEvent) {
      onAddEvent(formData);
    }
    alert('Event added!');
    setFormData({ title: '', date: '', location: '', organizer: '' });
  };

  return (
    <div className="add-event-container">
      <h2>Add New Event</h2>
      <form className="event-form" onSubmit={handleSubmit}>
        <label>
          Event Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>
        <label>
          Location:
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        </label>
        <label>
          Organizer:
          <input type="text" name="organizer" value={formData.organizer} onChange={handleChange} required />
        </label>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default AddEventPage;
