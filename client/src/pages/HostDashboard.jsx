import React, { useState } from 'react';

const HostDashboard = () => {
  const [listings, setListings] = useState([
    { id: 1, name: 'Main Conference Room' }
  ]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Host Dashboard</h2>
      <button className="bg-blue-600 text-white px-4 py-2 mb-4 rounded">+ Add Venue</button>
      <div className="bg-white p-4 shadow rounded">
        <h3 className="font-bold mb-2">Your Listings</h3>
        {listings.map(l => (
          <div key={l.id} className="border-b py-2 flex justify-between">
            {l.name}
            <button className="text-red-500">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HostDashboard;
