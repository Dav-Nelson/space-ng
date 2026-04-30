import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // In a real app, fetch from /api/bookings/user
    setBookings([
      { id: 1, venue: 'Co-Lab Abuja', start_time: '2026-05-01 10:00', status: 'confirmed' },
    ]);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Your Bookings</h2>
      <div className="bg-white shadow rounded-lg p-6">
        {bookings.length === 0 ? <p>No bookings yet.</p> : (
          <ul className="divide-y">
            {bookings.map(b => (
              <li key={b.id} className="py-4 flex justify-between">
                <span>{b.venue} - {b.start_time}</span>
                <span className="text-green-600 font-semibold uppercase">{b.status}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
