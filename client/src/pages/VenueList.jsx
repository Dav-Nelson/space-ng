import React, { useState } from 'react';

const VenueList = () => {
  const [location, setLocation] = useState('');
  const venues = [
    { id: 1, name: 'Co-Lab Abuja', location: 'Wuse 2', hourly_rate: 2000 },
    { id: 2, name: 'The Meeting Room', location: 'Gwarinpa', hourly_rate: 1500 },
  ];

  const filtered = venues.filter(v => v.location.toLowerCase().includes(location.toLowerCase()));

  return (
    <div className="container mx-auto p-4">
      <input 
        className="border p-2 w-full mb-4" 
        placeholder="Search by location..." 
        onChange={(e) => setLocation(e.target.value)} 
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(v => (
          <div key={v.id} className="border p-4 rounded shadow">
            <h3 className="font-bold">{v.name}</h3>
            <p>{v.location} - ₦{v.hourly_rate}/hr</p>
            <a href={`/venue/${v.id}`} className="text-blue-500">View Details</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VenueList;
