// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { MdArrowForwardIos, MdLocationOn, MdAccessTime, MdStar, MdDirections } from "react-icons/md";
// import Footer from "./footer";

// export default function Attractions() {
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   // Attractions data 
//   const attractions = [
//     {
//       id: 1,
//       name: "Juhu Beach",
//       category: "leisure",
//       image: "https://images.pexels.com/photos/2414442/pexels-photo-2414442.jpeg",
//       description: "One of Mumbai's most famous beaches, perfect for evening strolls, street food, and beautiful sunsets.",
//       distance: "3.2 km",
//       timing: "Open 24 hours",
//       rating: 4.3,
//       highlight: "Sunset views & street food"
//     },
//     {
//       id: 2,
//       name: "ISKCON Temple",
//       category: "cultural",
//       image: "https://images.pexels.com/photos/3581360/pexels-photo-3581360.jpeg",
//       description: "A beautiful temple dedicated to Lord Krishna, known for its serene atmosphere and spiritual activities.",
//       distance: "2.5 km",
//       timing: "4:30 AM - 8:30 PM",
//       rating: 4.7,
//       highlight: "Spiritual experience"
//     },
//     {
//       id: 3,
//       name: "Versova Beach",
//       category: "leisure",
//       image: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg",
//       description: "A less crowded alternative to Juhu Beach, known for its cleanliness and peaceful environment.",
//       distance: "5.8 km",
//       timing: "Open 24 hours",
//       rating: 4.1,
//       highlight: "Peaceful atmosphere"
//     },
//     {
//       id: 4,
//       name: "Powai Lake",
//       category: "nature",
//       image: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg",
//       description: "A serene artificial lake surrounded by gardens, perfect for morning walks and bird watching.",
//       distance: "6.3 km",
//       timing: "6:00 AM - 8:00 PM",
//       rating: 4.2,
//       highlight: "Scenic views"
//     },
//     {
//       id: 5,
//       name: "Fun Republic Mall",
//       category: "shopping",
//       image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg",
//       description: "Popular shopping and entertainment complex with multiplex, restaurants, and brand outlets.",
//       distance: "1.2 km",
//       timing: "11:00 AM - 11:00 PM",
//       rating: 4.0,
//       highlight: "Shopping & entertainment"
//     },
//     {
//       id: 6,
//       name: "Mahakali Caves",
//       category: "historical",
//       image: "https://images.pexels.com/photos/2437286/pexels-photo-2437286.jpeg",
//       description: "Ancient Buddhist rock-cut caves dating back to 1st century BCE, featuring intricate carvings.",
//       distance: "4.7 km",
//       timing: "9:00 AM - 5:30 PM",
//       rating: 4.4,
//       highlight: "Historical significance"
//     },
//     {
//       id: 7,
//       name: "Gilbert Hill",
//       category: "nature",
//       image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
//       description: "A 200-foot monolithic black basalt rock hill, declared a National Park in 1952.",
//       distance: "3.8 km",
//       timing: "8:00 AM - 6:00 PM",
//       rating: 4.0,
//       highlight: "Geological wonder"
//     },
//     {
//       id: 8,
//       name: "Andheri Sports Complex",
//       category: "recreation",
//       image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg",
//       description: "Modern sports facility with swimming pool, gymnasium, and various indoor sports amenities.",
//       distance: "2.1 km",
//       timing: "6:00 AM - 10:00 PM",
//       rating: 4.1,
//       highlight: "Sports activities"
//     }
//   ];

//   const categories = [
//     { id: "all", name: "All Attractions" },
//     { id: "leisure", name: "Leisure" },
//     { id: "cultural", name: "Cultural" },
//     { id: "shopping", name: "Shopping" },
//     { id: "nature", name: "Nature" },
//     { id: "historical", name: "Historical" },
//     { id: "recreation", name: "Recreation" }
//   ];

//   const filteredAttractions = selectedCategory === "all" 
//     ? attractions 
//     : attractions.filter(attr => attr.category === selectedCategory);

//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
//         {/* Hero Section */}
//         <div className="relative h-96 overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/70 z-10"></div>
//           <img
//             src="https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg"
//             alt="Mumbai Skyline"
//             className="absolute top-0 left-0 w-full h-full object-cover"
//           />
//           <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">Attraction of Roomora</h1>
//             <div className="w-24 h-1 bg-amber-400 mb-6 mx-auto"></div>
//             <p className="text-xl max-w-2xl">Discover the best attractions near Roomora Hotel in vibrant Andheri, Mumbai</p>
//             <div className="inline-flex items-center font-semibold text-lg mt-8 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
//               <Link to="/">
//                 <span className="hover:text-amber-300 transition-colors">Home</span>
//               </Link>
//               <MdArrowForwardIos className="mx-2 text-sm" />
//               <Link to='/attractions'>
//                 <span className="text-blue-300">Attractions</span>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="container mx-auto px-4 py-12">
//           <div className="max-w-6xl mx-auto">
//             {/* Introduction */}
//             <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 text-center">
//               <h2 className="text-2xl font-bold text-gray-800 mb-4">Discover Andheri's Treasures</h2>
//               <p className="text-gray-600 mb-4">
//                 Roomora Hotel is perfectly situated in the heart of Andheri, giving you easy access to some of Mumbai's most popular attractions. Whether you're interested in cultural experiences, shopping, nature, or entertainment, you'll find plenty to explore just minutes from our doorstep.
//               </p>
//               <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg text-left">
//                 <p className="text-amber-800 font-medium">
//                   <span className="font-bold">Pro Tip:</span> Our concierge can help arrange transportation and provide detailed directions to any of these attractions.
//                 </p>
//               </div>
//             </div>

//             {/* Category Filters */}
//             <div className="flex flex-wrap justify-center gap-3 mb-8">
//               {categories.map(category => (
//                 <button
//                   key={category.id}
//                   onClick={() => setSelectedCategory(category.id)}
//                   className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                     selectedCategory === category.id
//                       ? "bg-[#E61C5D] text-white shadow-md"
//                       : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
//                   }`}
//                 >
//                   {category.name}
//                 </button>
//               ))}
//             </div>

//             {/* Attractions Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredAttractions.map(attraction => (
//                 <div key={attraction.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
//                   <div className="relative">
//                     <img
//                       src={attraction.image}
//                       alt={attraction.name}
//                       className="w-full h-48 object-cover"
//                     />
//                     <div className="absolute top-4 right-4 bg-[#E61C5D] text-white text-xs font-bold px-2 py-1 rounded-full">
//                       {attraction.distance} away
//                     </div>
//                   </div>
                  
//                   <div className="p-5">
//                     <h3 className="text-xl font-bold text-gray-800 mb-2">{attraction.name}</h3>
                    
//                     <div className="flex items-center mb-3">
//                       <div className="flex items-center">
//                         {[1, 2, 3, 4, 5].map(star => (
//                           <MdStar
//                             key={star}
//                             className={`${
//                               star <= Math.round(attraction.rating) ? "text-amber-400" : "text-gray-300"
//                             }`}
//                           />
//                         ))}
//                         <span className="ml-2 text-sm text-gray-600">{attraction.rating}</span>
//                       </div>
//                     </div>
                    
//                     <p className="text-gray-600 text-sm mb-4">{attraction.description}</p>
                    
//                     <div className="space-y-2 text-sm text-gray-600">
//                       <div className="flex items-center">
//                         <MdLocationOn className="text-[#E61C5D] mr-2" />
//                         <span>{attraction.distance} from Roomora Hotel</span>
//                       </div>
//                       <div className="flex items-center">
//                         <MdAccessTime className="text-[#E61C5D] mr-2" />
//                         <span>{attraction.timing}</span>
//                       </div>
//                     </div>
                    
//                     <div className="mt-4 pt-3 border-t border-gray-100">
//                       <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
//                         {attraction.highlight}
//                       </span>
//                     </div>
                    
//                     <button className="mt-4 w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg transition-colors">
//                       <MdDirections className="text-[#E61C5D]" />
//                       <span className="text-sm font-medium">Get Directions</span>
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Map Section */}
//             <div className="bg-white rounded-2xl shadow-lg p-6 mt-12">
//               <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Location Map</h2>
//               <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15080.66730337836!2d72.83921926977536!3d19.119999999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a420f8f66c1!2sAndheri%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1679999146318!5m2!1sen!2sin"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   title="Andheri, Mumbai Map"
//                 ></iframe>
//               </div>
//               <div className="mt-4 text-center">
//                 <p className="text-gray-600">Roomora Hotel is centrally located in Andheri, with easy access to all major attractions</p>
//               </div>
//             </div>

         
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
//               <div className="bg-white rounded-2xl shadow-lg p-5 text-center">
//                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                   <MdDirections className="text-blue-600 text-xl" />
//                 </div>
//                 <h3 className="font-semibold text-gray-800 mb-2">By Taxi</h3>
//                 <p className="text-gray-600 text-sm">Most attractions are 10-20 minutes away by taxi from the hotel</p>
//               </div>
              
//               <div className="bg-white rounded-2xl shadow-lg p-5 text-center">
//                 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
//                   </svg>
//                 </div>
//                 <h3 className="font-semibold text-gray-800 mb-2">By Metro</h3>
//                 <p className="text-gray-600 text-sm">Andheri Metro Station is just 5 minutes away, connecting to all of Mumbai</p>
//               </div>
              
//               <div className="bg-white rounded-2xl shadow-lg p-5 text-center">
//                 <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
//                   </svg>
//                 </div>
//                 <h3 className="font-semibold text-gray-800 mb-2">Concierge Service</h3>
//                 <p className="text-gray-600 text-sm">Our concierge can arrange guided tours and transportation to any attraction</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }














import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MdArrowForwardIos,
  MdLocationOn,
  MdAccessTime,
  MdStar,
  MdDirections,
} from "react-icons/md";
import Footer from "./footer";

export default function Attractions() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [attractions, setAttractions] = useState([]);

  // ✅ JSON madhun data fetch
  useEffect(() => {
    fetch("/attraction.json")
      .then((res) => res.json())
      .then((data) => setAttractions(data))
      .catch((err) => console.error("Error loading attractions:", err));
  }, []);

  const categories = [
    { id: "all", name: "All Attractions" },
    { id: "leisure", name: "Leisure" },
    { id: "cultural", name: "Cultural" },
    { id: "shopping", name: "Shopping" },
    { id: "nature", name: "Nature" },
    { id: "historical", name: "Historical" },
    { id: "recreation", name: "Recreation" },
  ];

  const filteredAttractions =
    selectedCategory === "all"
      ? attractions
      : attractions.filter((attr) => attr.category === selectedCategory);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/70 z-10"></div>
          <img
            src="https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg"
            alt="Mumbai Skyline"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Attraction of Roomora</h1>
            <div className="w-24 h-1 bg-amber-400 mb-6 mx-auto"></div>
            <p className="text-xl max-w-2xl">Discover the best attractions near Roomora Hotel in vibrant Andheri, Mumbai</p>
            <div className="inline-flex items-center font-semibold text-lg mt-8 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
              <Link to="/">
                <span className="hover:text-amber-300 transition-colors">Home</span>
              </Link>
              <MdArrowForwardIos className="mx-2 text-sm" />
              <Link to='/attractions'>
                <span className="text-blue-300">Attractions</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Discover Andheri's Treasures</h2>
              <p className="text-gray-600 mb-4">
                Roomora Hotel is perfectly situated in the heart of Andheri, giving you easy access to some of Mumbai's most popular attractions. Whether you're interested in cultural experiences, shopping, nature, or entertainment, you'll find plenty to explore just minutes from our doorstep.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg text-left">
                <p className="text-amber-800 font-medium">
                  <span className="font-bold">Pro Tip:</span> Our concierge can help arrange transportation and provide detailed directions to any of these attractions.
                </p>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-[#E61C5D] text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Attractions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAttractions.map((attraction) => (
            <div
              key={attraction.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#E61C5D] text-white text-xs font-bold px-2 py-1 rounded-full">
                  {attraction.distance} away
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {attraction.name}
                </h3>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <MdStar
                        key={star}
                        className={`${
                          star <= Math.round(attraction.rating)
                            ? "text-amber-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {attraction.rating}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  {attraction.description}
                </p>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MdLocationOn className="text-[#E61C5D] mr-2" />
                    <span>{attraction.distance} from Roomora Hotel</span>
                  </div>
                  <div className="flex items-center">
                    <MdAccessTime className="text-[#E61C5D] mr-2" />
                    <span>{attraction.timing}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                    {attraction.highlight}
                  </span>
                </div>

                <button className="mt-4 w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg transition-colors">
                  <MdDirections className="text-[#E61C5D]" />
                  <span className="text-sm font-medium">Get Directions</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
            {/* Map Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Location Map</h2>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15080.66730337836!2d72.83921926977536!3d19.119999999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a420f8f66c1!2sAndheri%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1679999146318!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Andheri, Mumbai Map"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-600">Roomora Hotel is centrally located in Andheri, with easy access to all major attractions</p>
              </div>
            </div>

         
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-2xl shadow-lg p-5 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MdDirections className="text-blue-600 text-xl" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">By Taxi</h3>
                <p className="text-gray-600 text-sm">Most attractions are 10-20 minutes away by taxi from the hotel</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-5 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">By Metro</h3>
                <p className="text-gray-600 text-sm">Andheri Metro Station is just 5 minutes away, connecting to all of Mumbai</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-5 text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Concierge Service</h3>
                <p className="text-gray-600 text-sm">Our concierge can arrange guided tours and transportation to any attraction</p>
              </div>
            </div>
          </div>
        </div>
      
      <Footer />
    </>
  );
}