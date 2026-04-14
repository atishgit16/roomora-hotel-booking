import React, { useState } from 'react';
import Footer from './footer';

export default function FamilyRoom() {
  const room = {
    id: 7,
    type: "Family Room",
    path: "family-room",
    description: "Spacious accommodation designed for families with kids.",
    price: 7200, // Use price
    image: "https://images.unsplash.com/photo-1611048268249-7e0d5eb808a2?w=500&auto=format&fit=crop&q=60",
    available: 5,
    features: ["Free WiFi", "Air Conditioning", "TV", "Kid-Friendly Amenities", "Extra Beds Available"]
  };

  const [nights, setNights] = useState(1);
  const [guests, setGuests] = useState(4); // Guests instead of adults
  const [extras, setExtras] = useState({
    breakfast: false,
    airportPickup: false,
    extraBed: false,
  });
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    paymentMethod: "creditCard",
  });

  const extraPrices = {
    breakfast: 600,
    airportPickup: 800,
    extraBed: 1200,
  };

  const basePrice = room.price * nights * guests;
  const extrasTotal = Object.keys(extras).reduce((total, extra) =>
    extras[extra] ? total + extraPrices[extra] : total, 0
  );
  const totalPrice = basePrice + extrasTotal;

  const handleExtraChange = (extra) => setExtras(prev => ({ ...prev, [extra]: !prev[extra] }));
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (!loggedUser) {
      alert("You must be logged in to book a room!");
      return;
    }

    const bookingData = {
      room: room.type,
      nights,
      guests,
      extras,
      totalPrice,
      bookedBy: loggedUser.email,
      ...formData
    };

    console.log("Booking Confirmed!", bookingData);
    alert(`Booking Confirmed for ${loggedUser.email}!`);
    setShowModal(false);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 py-8 px-4 mt-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Luxury Hotel & Resort</h1>
            <p className="text-gray-600">Ideal for families, spacious and comfortable stay</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Room Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={room.image} alt={room.type} className="w-full h-full object-cover" />
            </div>

            {/* Room Details */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="mb-6">
                <span className="inline-block bg-pink-100 text-pink-800 text-sm font-semibold px-3 py-1 rounded-full">
                  Family Friendly
                </span>
                <h2 className="text-3xl font-bold text-gray-800 mt-4">{room.type}</h2>
                <p className="text-gray-600 mt-2">{room.description}</p>
                <p className=" mt-2 font-bold text-green-600">₹{room.price} / night</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Room Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {room.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking Section */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Booking Details</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Nights</label>
                    <div className="flex items-center">
                      <button onClick={() => setNights(Math.max(1, nights - 1))} className="bg-gray-200 text-gray-700 rounded-l-md px-3 py-2">-</button>
                      <span className="bg-gray-100 px-4 py-2 text-center">{nights}</span>
                      <button onClick={() => setNights(nights + 1)} className="bg-gray-200 text-gray-700 rounded-r-md px-3 py-2">+</button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Guests</label>
                    <div className="flex items-center">
                      <button onClick={() => setGuests(Math.max(1, guests - 1))} className="bg-gray-200 text-gray-700 rounded-l-md px-3 py-2">-</button>
                      <span className="bg-gray-100 px-4 py-2 text-center">{guests}</span>
                      <button onClick={() => setGuests(Math.min(room.available, guests + 1))} className="bg-gray-200 text-gray-700 rounded-r-md px-3 py-2">+</button>
                    </div>
                  </div>
                </div>

                {/* Extras */}
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-800 mb-3">Add Extras</h4>
                  <div className="space-y-2">
                    {Object.keys(extras).map((extra) => (
                      <div
                        key={extra}
                        className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${
                          extras[extra] ? 'bg-pink-50 border border-pink-300' : 'bg-gray-50 border border-gray-200 hover:border-pink-300'
                        }`}
                        onClick={() => handleExtraChange(extra)}
                      >
                        <div className="flex items-center">
                          <div className={`h-5 w-5 rounded-full border mr-3 flex items-center justify-center ${
                            extras[extra] ? 'border-pink-500 bg-pink-500' : 'border-gray-400'
                          }`}>
                            {extras[extra] && (
                              <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <span className="capitalize">{extra.replace(/([A-Z])/g, ' $1')}</span>
                        </div>
                        <span className="font-medium">+₹{extraPrices[extra]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Summary */}
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Base Price ({nights} nights × {guests} guests)</span>
                    <span className="font-semibold">₹{basePrice}</span>
                  </div>

                  {Object.keys(extras).map((extra) => (
                    extras[extra] && (
                      <div key={extra} className="flex justify-between items-center mb-2">
                        <span className="text-gray-600 capitalize">{extra.replace(/([A-Z])/g, ' $1')}</span>
                        <span className="font-semibold">+₹{extraPrices[extra]}</span>
                      </div>
                    )
                  ))}

                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                    <span className="text-xl font-bold text-gray-800">Total</span>
                    <span className="text-2xl font-bold text-pink-600">₹{totalPrice}</span>
                  </div>
                </div>

                {/* Confirm Button */}
                <button
                  onClick={() => setShowModal(true)}
                  className="px-6 py-3 ml-90 bg-gradient-to-r from-pink-500 to-pink-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Modal */}
        {showModal && (
          <div className="fixed inset-0 backdrop-blur-sm bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 font-bold text-xl"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Booking Form</h2>
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleFormChange} className="w-full p-3 border rounded" required />
                <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleFormChange} className="w-full p-3 border rounded" required />
                <div className="grid grid-cols-2 gap-4">
                  <input type="date" name="checkIn" min={today} value={formData.checkIn} onChange={handleFormChange} className="w-full p-3 border rounded" required />
                  <input type="date" name="checkOut" min={formData.checkIn || today} value={formData.checkOut} onChange={handleFormChange} className="w-full p-3 border rounded" required />
                </div>
                <select name="paymentMethod" value={formData.paymentMethod} onChange={handleFormChange} className="w-full p-3 border rounded">
                  <option value="creditCard">Credit Card</option>
                  <option value="debitCard">Debit Card</option>
                  <option value="upi">UPI</option>
                  <option value="netBanking">Net Banking</option>
                </select>
                <button type="submit" className="w-full py-3 bg-pink-600 text-white font-bold rounded-lg hover:bg-pink-700 transition-all">Confirm Booking</button>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
}
