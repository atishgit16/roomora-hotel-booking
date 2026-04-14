import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowForwardIos, MdExpandMore, MdExpandLess } from "react-icons/md";
import Footer from './footer';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqItems = [
    {
      question: "How do I book a room?",
      answer: "You can browse our rooms and click 'Book Now' to complete your reservation online. Alternatively, you can call our reservation team at 3276483246 for personalized assistance."
    },
    {
      question: "Can I cancel or reschedule my booking?",
      answer: "Yes, our platform allows easy cancellation or rescheduling based on hotel policies. Please refer to your confirmation email for specific terms or contact our support team."
    },
    {
      question: "Is my payment secure?",
      answer: "Absolutely. We use industry-standard encryption and secure payment gateways to ensure your data and transactions are completely safe."
    },
    {
      question: "Do you offer special deals?",
      answer: "Yes! Check our 'Special Offers' section for seasonal discounts, loyalty benefits, and exclusive packages for extended stays."
    },
    {
      question: "What time are check-in and check-out?",
      answer: "Standard check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request, subject to availability."
    },
    {
      question: "Do you have parking facilities?",
      answer: "Yes, we offer complimentary valet parking for all our guests. Additional secured parking is also available at a nominal fee."
    },
    {
      question: "Are pets allowed?",
      answer: "We welcome pets up to 25 lbs with an additional cleaning fee. Please inform us in advance so we can prepare a pet-friendly room for you."
    },
    {
      question: "How do I contact support?",
      answer: "Reach out via our contact form, call our 24/7 support team at 3276483246, or email us directly at roomora@business.com."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg"
            alt="Luxury Hotel Lobby"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <div className="w-20 h-0.5 bg-amber-300 mb-6"></div>
            <p className="text-xl mb-6 max-w-2xl">Find answers to common questions about your stay with us</p>
            <div className="inline-flex items-center font-semibold text-lg">
              <Link to="/">
                <span className="hover:text-amber-400 transition-colors duration-200">Home</span>
              </Link>
              <MdArrowForwardIos className="mx-2 mt-0.5" />
              <Link to='/faq'>
                <span className="text-blue-400">FAQ</span>
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Common Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We've compiled a list of frequently asked questions to help you plan your perfect stay with us.
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
                >
                  <button 
                    className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-lg font-medium text-gray-800">{item.question}</span>
                    {openIndex === index ? (
                      <MdExpandLess className="text-amber-500 text-xl flex-shrink-0" />
                    ) : (
                      <MdExpandMore className="text-amber-500 text-xl flex-shrink-0" />
                    )}
                  </button>
                  <div 
                    className={`px-6 pb-6 pt-0 text-gray-600 transition-all duration-300 ${openIndex === index ? 'block' : 'hidden'}`}
                  >
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-800 text-white">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-8">
                Can't find what you're looking for? Our team is available 24/7 to assist you with any questions.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amber-500 p-3 rounded-full mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-300">Andheri, Mumbai, Maharashtra</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-500 p-3 rounded-full mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-300">3276483246</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-500 p-3 rounded-full mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-300">roomora@business.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Your name" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Your email" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  ></textarea>
                </div>
                <button 
                  type="button" 
                  className="px-8 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}