import React, { useState } from "react";
import Footer from "./footer";

export default function DeluxeRoom() {
  const room = {
    id: 7,
    type: "Deluxe Room",
    path: "deluxe-room",
    description: "Spacious deluxe room with luxury amenities for a relaxing stay.",
    price: 8730, 
    image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
    features: ["WiFi", "TV", "Air Conditioning", "Breakfast Included", "Room Service", "Private Balcony"],
  };

  const [nights, setNights] = useState(1);
  const [guests, setGuests] = useState(1); 
  const [children, setChildren] = useState(0);
  const [extras, setExtras] = useState({ breakfast: false, airportPickup: false, spaAccess: false });
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    paymentMethod: "creditCard",
  });

  const extraPrices = { breakfast: 500, airportPickup: 1200, spaAccess: 1500 };
  const basePrice = room.price * nights * guests;
  const extrasTotal = Object.keys(extras).reduce(
    (total, extra) => (extras[extra] ? total + extraPrices[extra] : total),
    0
  );
  const totalPrice = basePrice + extrasTotal;
  const today = new Date().toISOString().split("T")[0];

  const handleExtraChange = (extra) => setExtras(prev => ({ ...prev, [extra]: !prev[extra] }));
  const handleFormChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const bookingId = Date.now();
    const bookingData = {
      ...formData,
      room: room.type,
      nights,
      guests,
      children,
      extras,
      totalPrice,
      bookingId,
    };

    const allBookings = JSON.parse(localStorage.getItem("bookings")) || {};
    if (!allBookings[formData.email]) allBookings[formData.email] = [];
    allBookings[formData.email].push(bookingData);
    localStorage.setItem("bookings", JSON.stringify(allBookings));

    const users = JSON.parse(localStorage.getItem("users")) || {};
    if (!users[formData.email]) users[formData.email] = { name: formData.name, email: formData.email };
    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("roomoraUser", JSON.stringify({ email: formData.email }));
    window.dispatchEvent(new Event("storage"));

    alert(
      `Booking Confirmed!\nEmail: ${formData.email}\nBooking ID: ${bookingId}\nTotal Price: ₹${totalPrice}`
    );
    setShowModal(false);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 py-8 px-4 mt-0">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">{room.type} Booking</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={room.image} alt={room.type} className="w-full h-full object-cover" />
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{room.type}</h2>
              <p className="text-gray-600 mb-2">{room.description}</p>
              <p className="text-gray-500 mb-4">
                <span className="text-green-600 font-bold">₹{room.price} / night</span>
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Room Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {room.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

      
              <div className="grid grid-cols-3 gap-4 my-6">
                <div>
                  <label className="block text-gray-700 mb-2">Nights</label>
                  <div className="flex items-center">
                    <button onClick={() => setNights(Math.max(1, nights - 1))} className="px-3 py-2 bg-gray-200">-</button>
                    <span className="px-4 py-2 bg-gray-100">{nights}</span>
                    <button onClick={() => setNights(nights + 1)} className="px-3 py-2 bg-gray-200">+</button>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Guests</label>
                  <div className="flex items-center">
                    <button onClick={() => setGuests(Math.max(1, guests - 1))} className="px-3 py-2 bg-gray-200">-</button>
                    <span className="px-4 py-2 bg-gray-100">{guests}</span>
                    <button onClick={() => setGuests(guests + 1)} className="px-3 py-2 bg-gray-200">+</button>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Children (&lt;12)</label>
                  <div className="flex items-center">
                    <button onClick={() => setChildren(Math.max(0, children - 1))} className="px-3 py-2 bg-gray-200">-</button>
                    <span className="px-4 py-2 bg-gray-100">{children}</span>
                    <button onClick={() => setChildren(children + 1)} className="px-3 py-2 bg-gray-200">+</button>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Add Extras</h3>
              <div className="space-y-2 mb-4">
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

              <p className="text-gray-700 mb-4">Total Price: <span className="text-2xl font-bold text-orange-600">₹{totalPrice}</span></p>
              <button
                onClick={() => setShowModal(true)}
                className="py-3 px-6 ml-90 bg-orange-600  text-white rounded-lg font-bold hover:bg-orange-700"
              >
               Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Booking Modal */}
        {showModal && (
          <div className="fixed inset-0 backdrop-blur-sm bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-xl max-w-lg w-full relative">
              <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-xl">&times;</button>
              <h2 className="text-2xl font-bold mb-4">Booking Form</h2>
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
                  <option value="paypal">PayPal</option>
                  <option value="upi">UPI</option>
                  <option value="netBanking">Net Banking</option>
                </select>
                <button type="submit" className="w-full py-3 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700">
              Confirm Booking
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
