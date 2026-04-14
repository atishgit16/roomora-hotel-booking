import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowForwardIos, MdStar, MdLocationOn, MdHotel, MdRestaurant, MdSpa } from "react-icons/md";
import Footer from './footer';

export default function About() {
  return (
    <>
      <div className="min-h-screen ">
        <div className="relative h-120 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
            alt="Luxury Hotel Exterior"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About</h1>
             <div className="w-20 h-0.5 bg-amber-300 mb-6"></div>
            <p className="text-xl mb-6 max-w-2xl">Discover the story behind Mumbai's premier luxury destination</p>
            <div className="inline-flex items-center font-semibold text-lg">
              <Link to="/">
                <span className="hover:text-amber-400 transition-colors duration-200">Home</span>
              </Link>
              <MdArrowForwardIos className="mx-2 mt-0.5" />
              <Link to='/about'>
                <span className="text-blue-400">About Us</span>
              </Link>
            </div>
          </div>
        </div>

        
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-amber-500 mb-6"></div>
              <p className="text-gray-600 leading-7 mb-6">
                Roomora was founded with a simple mission: to make hotel booking easy, fast, and reliable. We understand that every trip—whether for business, leisure, or a family vacation—deserves a comfortable and memorable stay.
              </p>
              <p className="text-gray-600 leading-7 mb-6">
                Over the years, we have partnered with top hotels to provide curated choices for our guests. Our team meticulously selects each property to ensure it meets our high standards of comfort, service, and amenities.
              </p>
              <p className="text-gray-600 leading-7">
                Today, Roomora stands as Mumbai's premier luxury hotel, offering an unparalleled experience that combines traditional hospitality with modern comforts.
              </p>
            </div>
            <div className="relative ">
              <img
                src="https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg"
                alt="Hotel Interior"
                className="rounded-lg shadow-xl"
              />
              <div className=" transform transition-all hover:-translate-x-1 flex absolute -bottom-6 -left-6 bg-blue-500 text-white p-6 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">10+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">Why Choose Roomora?</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              We are committed to providing an exceptional experience for every guest
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MdHotel className="text-amber-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Luxurious Rooms</h3>
                <p className="text-gray-600">Elegantly appointed rooms with premium amenities and stunning views of the city.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MdRestaurant className="text-amber-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fine Dining</h3>
                <p className="text-gray-600">Multiple restaurants offering gourmet cuisine from around the world prepared by acclaimed chefs.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MdSpa className="text-amber-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Spa & Wellness</h3>
                <p className="text-gray-600">Rejuvenate your mind and body with our world-class spa treatments and fitness facilities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">Guest Experiences</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Hear what our guests have to say about their stay at Roomora
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gray-50  hover:bg-amber-100 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg" 
                      alt="Leroy Jenkins" 
                      className="w-12 h-12 rounded-full object-cover mr-4" 
                    />
                    <div>
                      <h4 className="font-semibold">john</h4>
                      <div className="flex items-center text-amber-500">
                        <MdStar /><MdStar /><MdStar /><MdStar /><MdStar />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "The rooms were super clean, and the staff was very friendly. Definitely recommend! The attention to detail was exceptional."
                  </p>
                </div>
                <div className="px-6 pb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MdLocationOn className="mr-1" />
                    <span>Business Traveler</span>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-gray-50 hover:bg-amber-100 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg" 
                      alt="Brohan Smith" 
                      className="w-12 h-12 rounded-full object-cover mr-4" 
                    />
                    <div>
                      <h4 className="font-semibold"> Smith</h4>
                      <div className="flex items-center text-amber-500">
                        <MdStar /><MdStar /><MdStar /><MdStar /><MdStar />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "Great location, tasty food, and excellent service. The concierge helped us plan the perfect weekend in Mumbai."
                  </p>
                </div>
                <div className="px-6 pb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MdLocationOn className="mr-1" />
                    <span>Traveler</span>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-gray-50 hover:bg-amber-100 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src="https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg" 
                      alt="Johnson family" 
                      className="w-12 h-12 rounded-full object-cover mr-4" 
                    />
                    <div>
                      <h4 className="font-semibold">Johnson Family</h4>
                      <div className="flex items-center text-amber-500">
                        <MdStar /><MdStar /><MdStar /><MdStar /><MdStar />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "Amazing stay! The pool and spa made our vacation extra special. The kids loved the activities organized by the hotel."
                  </p>
                </div>
                <div className="px-6 pb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MdLocationOn className="mr-1" />
                    <span>Family Vacation</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="https://instagram.com/roomora" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 transform hover:-translate-y-1 bg-[#E61C5D] text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors duration-200"
              >
                View More Reviews
                <MdArrowForwardIos className="ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 bg-gray-800 text-white">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Location</h2>
              <div className="w-20 h-1 bg-amber-500 mb-6"></div>
              <p className="mb-6">
                Situated in the heart of Andheri, Roomora offers convenient access to Mumbai's business districts, entertainment venues, and cultural attractions.
              </p>
              <div className="flex items-start mb-4">
                <MdLocationOn className="text-amber-500 text-xl mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p>Andheri, Mumbai, Maharashtra</p>
                </div>
              </div>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-amber-400 hover:text-amber-300"
              >
                Get Directions
                <MdArrowForwardIos className="ml-2" />
              </a>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.7814007678666!2d72.839214314903!3d19.161554854819675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b745d5b7c4bd%3A0xde2f38d642ffaf23!2sAndheri%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649845782950!5m2!1sen!2sin" 
                width="100%" 
                height="300" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Roomora Hotel Location"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}