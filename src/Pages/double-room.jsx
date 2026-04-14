import React, { useState } from 'react';
import Footer from './footer';
import { FaCreditCard } from "react-icons/fa6";
import { IoCloudyNight } from "react-icons/io5";
import { BsPersonStanding } from "react-icons/bs";
import { GiConfirmed } from "react-icons/gi";

export default function DoubleRoom() {
  const room = {
    id: 6,
    type: "Double Room",
    description: "Spacious room for two guests with comfort and convenience.",
    price: 3500,
    discountedPrice: 3150,
    available: 5,
    image: "https://images.unsplash.com/photo-1673687782286-674e29c9bf9e?w=500&auto=format&fit=crop&q=60",
    features: ["Free WiFi", "Air Conditioning", "TV", "Mini Fridge", "Work Desk"],
  };

  const [nights, setNights] = useState(1);
  const [guests, setGuests] = useState(2);
  const [extras, setExtras] = useState({ breakfast: false, airportPickup: false, spaAccess: false });
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    paymentMethod: "creditCard"
  });

  const extraPrices = { breakfast: 400, airportPickup: 600, spaAccess: 1200 };
  const basePrice = room.discountedPrice * nights * guests;
  const extrasTotal = Object.keys(extras).reduce(
    (total, extra) => (extras[extra] ? total + extraPrices[extra] : total), 0
  );
  const totalPrice = basePrice + extrasTotal;

  const handleExtraChange = (extra) =>
    setExtras(prev => ({ ...prev, [extra]: !prev[extra] }));

  const handleFormChange = (e) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const today = new Date().toISOString().split("T")[0];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const bookingId = Date.now();
    const bookingData = {
      ...formData,
      room: room.type,
      nights,
      guests,
      extras,
      totalPrice,
      bookingId
    };

    const allBookings = JSON.parse(localStorage.getItem("bookings")) || {};
    if (!allBookings[formData.email]) allBookings[formData.email] = [];
    allBookings[formData.email].push(bookingData);
    localStorage.setItem("bookings", JSON.stringify(allBookings));

    alert(
      `Booking Confirmed!\nName: ${formData.name}\nEmail: ${formData.email}\nBooking ID: ${bookingId}\nTotal Price: ₹${totalPrice}`
    );
    setShowModal(false);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 py-8 px-4 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Luxury Hotel & Resort</h1>
            <p className="text-gray-600">Experience comfort and convenience in our Double Room</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={room.image} alt={room.type} className="w-full h-full object-cover" />
            </div>

            {/* Booking Details */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mt-4">{room.type}</h2>
                <p className="text-gray-600 mt-2">{room.description}</p>
                <p className="text-gray-500 mb-4">
                  <span className="line-through">₹{room.price}</span>{" "}
                  <span className="text-green-600 font-bold">₹{room.discountedPrice} / night</span>
                </p>
              </div>

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

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Add Extras</h3>
                <div className="space-y-2">
                  {Object.keys(extras).map(extra => (
                    <div
                      key={extra}
                      onClick={() => handleExtraChange(extra)}
                      className={`flex justify-between p-3 rounded-lg cursor-pointer ${
                        extras[extra] ? "bg-yellow-50 border border-yellow-300" : "bg-gray-50 border"
                      }`}
                    >
                      <span>{extra}</span>
                      <span>₹{extraPrices[extra]}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Booking Details</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2"><IoCloudyNight className="inline" /> Nights</label>
                    <div className="flex items-center">
                      <button onClick={() => setNights(Math.max(1, nights - 1))} className="bg-gray-200 text-gray-700 px-3 py-2">-</button>
                      <span className="bg-gray-100 px-4 py-2 text-center">{nights}</span>
                      <button onClick={() => setNights(nights + 1)} className="bg-gray-200 text-gray-700 px-3 py-2">+</button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2"><BsPersonStanding className="inline" /> Guests</label>
                    <div className="flex items-center">
                      <button onClick={() => setGuests(Math.max(1, guests - 1))} className="bg-gray-200 text-gray-700 px-3 py-2">-</button>
                      <span className="bg-gray-100 px-4 py-2 text-center">{guests}</span>
                      <button onClick={() => setGuests(guests + 1)} className="bg-gray-200 text-gray-700 px-3 py-2">+</button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <span className="text-2xl font-bold text-yellow-600">₹{totalPrice}</span>
                  <button onClick={() => setShowModal(true)} className="py-3 px-6 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold rounded-lg">
                    <GiConfirmed className="inline text-2xl" /> Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showModal && (
          <div className="fixed inset-0 backdrop-blur-sm bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative">
              <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-500 font-bold text-xl">&times;</button>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Booking Form</h2>
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleFormChange} className="w-full p-3 border rounded" required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleFormChange} className="w-full p-3 border rounded" required />
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

                <button type="submit" className="w-full py-3 bg-yellow-600 text-white font-bold rounded-lg">Confirm Booking - ₹{totalPrice}</button>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
