import React, { useState, useEffect } from "react";
import Footer from "./footer";

export default function PresidentialSuite() {
  const room = {
    id: 4,
    type: "Presidential Suite",
    description: "Ultimate luxury with panoramic views and exclusive amenities.",
    price: 44999,
    discountedPrice: 40499,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=600&q=80",
    available: 4,
    features: [
      "Free WiFi",
      "Air Conditioning",
      "Premium Entertainment",
      "Mini Bar",
      "Separate Living Area",
      "Premium Toiletries",
    ],
  };

  const [nights, setNights] = useState(2);
  const [guests, setGuests] = useState(2);
  const [extras, setExtras] = useState({
    breakfast: false,
    airportPickup: false,
    spaAccess: false,
  });
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    paymentMethod: "creditCard",
  });
  const [bookingHistory, setBookingHistory] = useState([]);

  const extraPrices = {
    breakfast: 1500,
    airportPickup: 2000,
    spaAccess: 3000,
  };

  const basePrice = room.discountedPrice * nights * guests;
  const extrasTotal = Object.keys(extras).reduce(
    (total, extra) => (extras[extra] ? total + extraPrices[extra] : total),
    0
  );
  const totalPrice = basePrice + extrasTotal;

  const today = new Date().toISOString().split("T")[0];

  const handleExtraChange = (extra) =>
    setExtras((prev) => ({ ...prev, [extra]: !prev[extra] }));

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Load booking history from logged-in user
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("roomoraUser"));
    if (storedUser && storedUser.email) {
      const allBookings = JSON.parse(localStorage.getItem("bookings")) || {};
      setBookingHistory(allBookings[storedUser.email] || []);
      setFormData((prev) => ({ ...prev, email: storedUser.email }));
    }
  }, []);

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
      bookingId,
    };

    // Save booking in localStorage
    const allBookings = JSON.parse(localStorage.getItem("bookings")) || {};
    if (!allBookings[formData.email]) allBookings[formData.email] = [];
    allBookings[formData.email].push(bookingData);
    localStorage.setItem("bookings", JSON.stringify(allBookings));

    // Save user info
    const users = JSON.parse(localStorage.getItem("users")) || {};
    if (!users[formData.email])
      users[formData.email] = { name: formData.name, email: formData.email };
    localStorage.setItem("users", JSON.stringify(users));

  
    
    localStorage.setItem(
      "roomoraUser",
      JSON.stringify({ email: formData.email })
    );
    window.dispatchEvent(new Event("storage"));

    // Update booking history immediately
    setBookingHistory(allBookings[formData.email]);
    setShowModal(false);

    let extrasText = Object.keys(extras)
      .filter((key) => extras[key])
      .map((key) => `${key}: ₹${extraPrices[key]}`)
      .join("\n");
    if (!extrasText) extrasText = "None";

    alert(
      `Booking Confirmed!\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Booking ID: ${bookingId}\n` +
        `Base Price: ₹${basePrice}\n` +
        `Extras:\n${extrasText}\n` +
        `Total Price: ₹${totalPrice}\n` +
        `Payment Method: ${formData.paymentMethod}`
    );
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 py-8 px-4 mt-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Luxury Hotel & Resort
            </h1>
            <p className="text-gray-600">
              Experience ultimate luxury and comfort in our Presidential Suite
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Room Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={room.image}
                alt={room.type}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Room Details */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="mb-6">
                <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
                  Ultimate Luxury
                </span>
                <h2 className="text-3xl font-bold text-gray-800 mt-4">{room.type}</h2>
                <p className="text-gray-600 mt-2">{room.description}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Room Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {room.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
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
                      <button
                        onClick={() => setNights(Math.max(1, nights - 1))}
                        className="bg-gray-200 text-gray-700 rounded-l-md px-3 py-2"
                      >
                        -
                      </button>
                      <span className="bg-gray-100 px-4 py-2 text-center">{nights}</span>
                      <button
                        onClick={() => setNights(nights + 1)}
                        className="bg-gray-200 text-gray-700 rounded-r-md px-3 py-2"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Guests</label>
                    <div className="flex items-center">
                      <button
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        className="bg-gray-200 text-gray-700 rounded-l-md px-3 py-2"
                      >
                        -
                      </button>
                      <span className="bg-gray-100 px-4 py-2 text-center">{guests}</span>
                      <button
                        onClick={() => setGuests(guests + 1)}
                        className="bg-gray-200 text-gray-700 rounded-r-md px-3 py-2"
                      >
                        +
                      </button>
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
                          extras[extra]
                            ? "bg-yellow-50 border border-yellow-300"
                            : "bg-gray-50 border border-gray-200 hover:border-yellow-300"
                        }`}
                        onClick={() => handleExtraChange(extra)}
                      >
                        <div className="flex items-center">
                          <div
                            className={`h-5 w-5 rounded-full border mr-3 flex items-center justify-center ${
                              extras[extra] ? "border-yellow-500 bg-yellow-500" : "border-gray-400"
                            }`}
                          >
                            {extras[extra] && (
                              <svg
                                className="h-3 w-3 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <span className="capitalize">{extra.replace(/([A-Z])/g, " $1")}</span>
                        </div>
                        <span className="font-medium">+₹{extraPrices[extra]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Summary */}
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">
                      Base Price ({nights} nights × {guests} guests)
                    </span>
                    <span className="font-semibold">₹{basePrice}</span>
                  </div>

                  {Object.keys(extras).map(
                    (extra) =>
                      extras[extra] && (
                        <div key={extra} className="flex justify-between items-center mb-2">
                          <span className="text-gray-600 capitalize">{extra.replace(/([A-Z])/g, " $1")}</span>
                          <span className="font-semibold">+₹{extraPrices[extra]}</span>
                        </div>
                      )
                  )}

                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                    <span className="text-xl font-bold text-gray-800">Total</span>
                    <span className="text-2xl font-bold text-yellow-600">₹{totalPrice}</span>
                  </div>
                </div>

                {/* Confirm Button */}
                <button
                  onClick={() => setShowModal(true)}
                  className="w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 font-bold text-xl"
                >
                  &times;
                </button>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Booking Form</h2>
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full p-3 border rounded"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full p-3 border rounded"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full p-3 border rounded"
                    required
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="date"
                      name="checkIn"
                      min={today}
                      value={formData.checkIn}
                      onChange={handleFormChange}
                      className="w-full p-3 border rounded"
                      required
                    />
                    <input
                      type="date"
                      name="checkOut"
                      min={formData.checkIn || today}
                      value={formData.checkOut}
                      onChange={handleFormChange}
                      className="w-full p-3 border rounded"
                      required
                    />
                  </div>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleFormChange}
                    className="w-full p-3 border rounded"
                  >
                    <option value="creditCard">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="upi">UPI</option>
                    <option value="netBanking">Net Banking</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full py-3 bg-yellow-600 text-white font-bold rounded-lg hover:bg-yellow-700 transition-all"
                  >
                    Complete Booking - ₹{totalPrice}
                  </button>
                </form>
              </div>
            </div>
          )}

       
                
            
          
        </div>
      </div>
      <Footer />
    </>
  );
}
