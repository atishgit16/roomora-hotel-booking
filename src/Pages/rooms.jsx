import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowForwardIos, MdStar, MdCheck, MdKingBed, MdPeople, MdWifi, MdAcUnit, MdTv, MdLocalBar, MdCoffee, MdChildCare, MdPool } from "react-icons/md";
import Footer from "./footer";

export default function RoomSelection() {
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [roomCategories, setRoomCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from rooms.json
  useEffect(() => {
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        setRoomCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleContinue = () => {
    if (selectedRoom) {
      const room = roomCategories.find((r) => r.id === selectedRoom);
      navigate(`/${room.path}`);
    }
  };

  const renderFeatureIcon = (feature) => {
    switch(feature) {
      case "Free WiFi": return <MdWifi className="text-blue-500" />;
      case "Air Conditioning": return <MdAcUnit className="text-blue-500" />;
      case "TV": case "Smart TV": case "Premium Entertainment": return <MdTv className="text-blue-500" />;
      case "Mini Bar": return <MdLocalBar className="text-blue-500" />;
      case "Coffee Maker": return <MdCoffee className="text-blue-500" />;
      case "Kid-Friendly Amenities": return <MdChildCare className="text-blue-500" />;
      case "Private Pool": return <MdPool className="text-blue-500" />;
      default: return <MdCheck className="text-green-500" />;
    }
  };

  if (loading) {
    return <div className="text-center py-20 text-xl">Loading rooms...</div>;
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/70 z-10"></div>
          <img
            src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg"
            alt="Hotel Room"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Luxury Awaits</h1>
            <div className="w-24 h-1 bg-amber-400 mb-6 mx-auto"></div>
            <p className="text-xl max-w-2xl">Discover our exquisite selection of rooms designed for your comfort and pleasure</p>
            <div className="inline-flex items-center font-semibold text-lg mt-8 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="hover:text-amber-300 cursor-pointer transition-colors" onClick={() => navigate("/")}>Home</span>
              <MdArrowForwardIos className="mx-2 text-sm" />
              <span className="text-blue-300">Room Selection</span>
            </div>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Room Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Each of our rooms is thoughtfully designed to provide the perfect blend of comfort, style, and functionality for your stay.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roomCategories.map((room) => (
              <div
                key={room.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
                  selectedRoom === room.id ? "ring-4 ring-amber-500 scale-105" : "hover:-translate-y-2"
                }`}
              >
                <div className="relative">
                  <img
                    src={room.image}
                    alt={room.type}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    {room.available} LEFT
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                    <MdStar className="text-amber-400 mr-1" />
                    <span>{room.rating}</span>
                    <span className="mx-1">•</span>
                    <span>{room.reviews} reviews</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{room.type}</h3>
                    <div className="text-right">
                      <p className="text-gray-500 line-through text-sm">{room.price}</p>
                      <p className="text-2xl font-bold text-[#E61C5D]">
                        {room.discountedPrice}
                        <span className="text-sm font-normal text-gray-600">/night</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <div className="flex items-center mr-4">
                      <MdKingBed className="mr-1" />
                      <span>{room.beds} {room.beds > 1 ? 'Beds' : 'Bed'}</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <MdPeople className="mr-1" />
                      <span>Up to {room.guests}</span>
                    </div>
                    <div>
                      <span>{room.size}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{room.description}</p>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {room.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        {renderFeatureIcon(feature)}
                        <span className="ml-2">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedRoom(room.id)}
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      selectedRoom === room.id
                        ? "bg-[#E61C5D] text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {selectedRoom === room.id ? "Selected" : "Select Room"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Continue Button */}
          <div className="mt-16 text-center">
            <button
              onClick={handleContinue}
              disabled={!selectedRoom}
              className={`px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ${
                selectedRoom
                  ? "bg-gradient-to-r from-[#E61C5D] to-[#D70040] text-white hover:shadow-xl hover:-translate-y-1"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Continue to Booking
              <MdArrowForwardIos className="inline-block ml-2" />
            </button>
            
            {selectedRoom && (
              <p className="text-gray-600 mt-4">
                You've selected the <span className="font-semibold text-[#E61C5D]">
                  {roomCategories.find(r => r.id === selectedRoom).type}
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}