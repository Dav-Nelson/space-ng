import React from 'react';

const Navbar = () => (
  <nav className="bg-white shadow-md p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">SpaceNG</h1>
      <div className="space-x-4">
        <a href="/" className="text-gray-600">Home</a>
        <a href="/login" className="text-blue-600 font-semibold">Login</a>
      </div>
    </div>
  </nav>
);

const VenueCard = ({ venue }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
    <img src={venue.photo || 'https://via.placeholder.com/400x200'} alt={venue.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{venue.name}</h3>
      <p className="text-gray-600 text-sm mb-2">{venue.location}</p>
      <p className="text-blue-600 font-bold">₦{venue.hourly_rate}/hr</p>
      <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Book Now</button>
    </div>
  </div>
);

const Home = () => {
  const venues = [
    { id: 1, name: 'Co-Lab Abuja', location: 'Wuse 2', hourly_rate: 2000 },
    { id: 2, name: 'The Meeting Room', location: 'Gwarinpa', hourly_rate: 1500 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold my-6">Available Spaces in Abuja</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {venues.map(v => <VenueCard key={v.id} venue={v} />)}
        </div>
      </main>
    </div>
  );
};

export default Home;
