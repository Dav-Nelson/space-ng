import React from 'react';
import { useParams } from 'react-router-dom';

const VenueDetail = () => {
  const { id } = useParams();
  
  const handleBook = () => {
    alert('Booking request sent!');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Venue {id} Details</h2>
      <p className="mb-4">Professional space equipped with high-speed Wi-Fi and ergonomic chairs.</p>
      <button onClick={handleBook} className="bg-green-600 text-white px-6 py-2 rounded">Reserve Hourly Slot</button>
      
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Reviews</h3>
        <div className="border-t pt-2">
          <p className="font-semibold">John Doe</p>
          <p className="text-sm text-gray-600">★★★★★ Great space for focus!</p>
        </div>
      </div>
    </div>
  );
};

export default VenueDetail;
