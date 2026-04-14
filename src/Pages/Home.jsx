import React, { useState, useEffect } from "react";
import Footer from "../Pages/footer";
import Bgv1 from "../Assets/bgv1.mp4";
import Bgv2 from "../Assets/bgv2.mp4";
import Bgv3 from "../Assets/bgv3.mp4";
import { RiUserStarFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  
  FaConciergeBell,
  FaSpa,
  FaUmbrellaBeach,
} from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { FaPersonSwimming } from "react-icons/fa6";
import Countdown from "react-countdown";
import { MdFitnessCenter, MdRestaurant } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  const [videoIndex, setVideoIndex] = useState(0);
  const videos = [Bgv1, Bgv2, Bgv3];
  const navigate = useNavigate();

  // Auto change video every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVideoIndex((prev) => (prev + 1) % videos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [videos.length]);


    const Rooms = () => {
    navigate("/rooms"); 
  };

  const testimonials = [
    {
      id: 1,
      name: "Sara naik",
      role: "Business Traveler",
      content:
        "The perfect blend of luxury and comfort. The staff went above and beyond to make my stay memorable.",
      rating: 5,
    },
    {
      id: 2,
      name: "Paresh malhotra",
      role: "Honeymooner",
      content:
        "Absolutely stunning views and impeccable service. Our room was spacious and the bed was incredibly comfortable.",
      rating: 5,
    },
    {
      id: 3,
      name: "disha sen",
      role: "Family Vacation",
      content:
        "Kids loved the pool area, and we appreciated the convenient location. Will definitely return!",
      rating: 4,
    },
  ];

  // Rooms
  const roomTypes = [
    {
      id: 1,
      name: "Deluxe Room",
      price: "₹ 9,700",
      discountedPrice: "₹ 8,730",
      description: "Spacious room with premium amenities and city view",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=600&q=80",
      
    },
    {
      id: 2,
      name: "Executive Suite",
      price: "₹ 13,999",
      discountedPrice: "₹ 12,599",  
      description:
        "Luxurious suite with separate living area and premium services",
      image:
        "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      name: "Presidential Suite",
      price: "₹ 44,999",
      discountedPrice: "₹ 40,499",
      description:
        "Ultimate luxury with panoramic views and exclusive amenities",
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=600&q=80",
    },
  ];

  // Render stars
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ));
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-screen h-screen overflow-hidden">
        <video
          key={videoIndex}
          autoPlay
          muted
          playsInline
          loop
          className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
        >
          <source src={videos[videoIndex]} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40"></div>

        <section className="relative z-10 flex flex-col justify-center h-full text-center px-4">
          <motion.h1
           initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
           className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Experience Luxury at{" "}
            <span className="text-[#E61C5D] hover:text-gray-300 transition text-7xl duration-400">Roomora</span>
          </motion.h1>
          <motion.p
           initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
           className="text-lg md:text-2xl text-gray-200 mb-8">
            Where comfort meets elegance for unforgettable stays
          </motion.p>
          <button
            onClick={Rooms}
            className="px-8 py-4 bg-gradient-to-r from-[#E61C5D] to-amber-600 text-white font-semibold rounded-xl shadow-lg hover:from-[#E61C5D] hover:to-amber-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center mx-auto"
          >
            View All Rooms
            <IoIosArrowForward className="ml-2" />
          </button>
        </section>
      </div>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
            alt="Luxury Room"
            className="rounded-lg shadow-xl md:w-1/2"
          />
          <div className="md:w-1/2 text-gray-700">
            <motion.p 
                 initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
          className="mb-6 text-lg">
              Discover unparalleled luxury and comfort at Roomora Hotels, where
              every detail is designed to provide an unforgettable experience.
            </motion.p>
            <motion.p 
                 initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
          className="mb-6 text-lg">
              Indulge in gourmet dining, rejuvenate at our spa, or explore local
              culture with curated experiences.
            </motion.p>
            <div className="flex items-center">
              <div className="flex mr-3">{renderStars(4.5)}</div>
              <span>4.5/5 from 1289 reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
                  initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-3xl md:text-4xl font-bold mb-12">
           Premium Amenities

          </motion.h2>
             <div className="w-20 h-0.5 ml-145 leading-loose bg-amber-300 mb-6"></div>
          <div className="grid relative grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <MdRestaurant />, description: "Enjoy a fine dining experience with diverse, delicious cuisines.",title: "Gourmet Restaurant" },
              { icon: <MdFitnessCenter />, description: "Stay active with our modern gym facilities.", title: "Fitness Center" },
              { icon: <FaPersonSwimming />, title: "Swimming Pool",description:"Relax and unwind in the luxurious swimming pool." },
              { icon: <FaSpa />, title: "Luxury Spa",description:"Indulge in rejuvenating spa treatments." },
              { icon: <FaConciergeBell />, title: "Concierge Service", description:"Personalized assistance to cater to all your needs."},
              { icon: <FaUmbrellaBeach />, title: "Beach Access", description:"Exclusive access to the pristine beach for leisure and fun" },
            ].map((a, i) => (
              <div
                key={i}
                className="bg-white hover:bg-[#ffafc9] rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition"
              >
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 text-2xl mb-4">
                  {a.icon}
                </div>
                <h2 className="font-semibold text-lg ">{a.title}</h2>
                <h4>{a.description}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center ">
          <motion.h2
                  initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
           className="text-3xl md:text-4xl font-bold mb-12">
            Luxurious Rooms & Suites
          </motion.h2>
             <div className="w-20 h-0.5 ml-145 leading-loose bg-amber-300 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roomTypes.map((room) => (
              <div
                key={room.id}
                className="rounded-xl hover:bg-amber-200 overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition"
              >
                <img 
                  src={room.image}
                  alt={room.name}
                  className="h-60 w-full object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="font-semibold text-xl mb-2">{room.name} <RiUserStarFill className="relative inline text-amber-700"/></h3> 
                  <p className="text-gray-600 mb-4">{room.description}</p>
                
                   <span className="line-through  text-gray-500 mr-2">{room.price}</span>
                        <span className="text-[#E61C5D] font-bold"> {room.discountedPrice} /night</span>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={Rooms}
            className="mt-10 px-8 py-3 bg-[#E61C5D] text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 transition"
          >
            View All Rooms
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
                  initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-3xl md:text-4xl font-bold mb-12">
            What Our Guests Say
          </motion.h2>
             <div className="w-20 h-0.5 ml-145 leading-loose bg-amber-300 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex mb-4 justify-center">
                  {renderStars(t.rating)}
                </div>
                <p className="italic text-gray-600 mb-6">"{t.content}"</p>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer */}
      <section className="py-12 bg-gradient-to-r from-blue-900 to-purple-800 text-white text-center">
        <Countdown className="bg-[#6d6467]  rounded-md p-1 leading-loose tracking-wider text-2xl" date={Date.now() +  ( 7 * 24 * 60 * 60 * 1000)}/>
        <motion.h2
                initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
           className="text-3xl md:text-4xl text-amber-400 font-bold mb-2">
          Special Offer < BiSolidOffer className=" text-6xl text-[#ffb6cd] inline" />
        </motion.h2>
             
        <motion.p 
               initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
          className="mb-6 text-amber-200">Get 10% off on stays of 3+ nights. Limited time!</motion.p>
        <button
          onClick={Rooms}
          className="px-6 py-3 bg-[#E61C5D] hover:bg-amber-600 text-white font-semibold rounded-lg shadow-md transition flex items-center mx-auto"
        >
          Book Now
          <IoIosArrowForward className="ml-2" />
        </button>
      </section>

      <Footer />
    </>
  );
}
