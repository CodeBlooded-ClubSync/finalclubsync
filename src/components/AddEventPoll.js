import React, { useState } from 'react';

const AddEventPoll = () => {
  const predefinedData = {
    location: 'Auditorium Block A',
    time: '16:30',
    venue: 'Seminar Hall 1'
  };

  const [responses, setResponses] = useState({
    locationResponse: '',
    timeResponse: '',
    venueResponse: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResponses((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Poll Submitted:', { ...predefinedData, ...responses });
    alert('Thank you for your response!');
    setResponses({
      locationResponse: '',
      timeResponse: '',
      venueResponse: ''
    });
  };

  return (
    <div className="w-full mt-10 bg-gray-100 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold text-[#004d4d] mb-4">Event Poll</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">

        {/* Location Section */}
        <div>
          <p className="font-medium text-gray-700">Proposed Location: <span className="text-black">{predefinedData.location}</span></p>
          <div className="mt-2 flex gap-4">
            <label>
              <input
                type="radio"
                name="locationResponse"
                value="agree"
                checked={responses.locationResponse === 'agree'}
                onChange={handleChange}
                required
              /> Agree
            </label>
            <label>
              <input
                type="radio"
                name="locationResponse"
                value="disagree"
                checked={responses.locationResponse === 'disagree'}
                onChange={handleChange}
              /> Disagree
            </label>
          </div>
        </div>

        {/* Time Section */}
        <div>
          <p className="font-medium text-gray-700">Proposed Time: <span className="text-black">{predefinedData.time}</span></p>
          <div className="mt-2 flex gap-4">
            <label>
              <input
                type="radio"
                name="timeResponse"
                value="agree"
                checked={responses.timeResponse === 'agree'}
                onChange={handleChange}
                required
              /> Agree
            </label>
            <label>
              <input
                type="radio"
                name="timeResponse"
                value="disagree"
                checked={responses.timeResponse === 'disagree'}
                onChange={handleChange}
              /> Disagree
            </label>
          </div>
        </div>

        {/* Venue Section */}
        <div>
          <p className="font-medium text-gray-700">Proposed Venue: <span className="text-black">{predefinedData.venue}</span></p>
          <div className="mt-2 flex gap-4">
            <label>
              <input
                type="radio"
                name="venueResponse"
                value="agree"
                checked={responses.venueResponse === 'agree'}
                onChange={handleChange}
                required
              /> Agree
            </label>
            <label>
              <input
                type="radio"
                name="venueResponse"
                value="disagree"
                checked={responses.venueResponse === 'disagree'}
                onChange={handleChange}
              /> Disagree
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#004d4d] text-white px-4 py-2 rounded-lg hover:bg-[#006666] w-fit"
        >
          Submit Poll
        </button>
      </form>
    </div>
  );
};

export default AddEventPoll;