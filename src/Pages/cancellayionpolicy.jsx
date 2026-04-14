import React from "react";
import { MdCheckCircle, MdCancel, MdAccessTime, MdPayment, MdHelp } from "react-icons/md";
import Footer from "./footer";

export default function CancellationPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/70 z-10"></div>
        <img
          src="https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg"
          alt="Hotel Reception"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cancellation Policy</h1>
          <div className="w-24 h-1 bg-amber-400 mb-6 mx-auto"></div>
          <p className="text-xl max-w-2xl">Understanding our booking and cancellation terms</p>
          
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Policy</h2>
            <p className="text-gray-600 mb-4">
              We understand that plans can change unexpectedly. Our cancellation policy is designed to be fair to both our guests and our hotel. Please review the following terms carefully.
            </p>
            <p className="text-gray-600">
              For any clarification or assistance with cancellations, please contact our reservations team at{" "}
              <a href="mailto:support@hotelexample.com" className="text-[#E61C5D] hover:underline">
                support@roomorahotel.com
              </a>{" "}
              or call us at <span className="text-[#E61C5D] font-semibold">+1 (800) 123-4567</span>.
            </p>
          </div>

          {/* Policy Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
 
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <MdCheckCircle className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Standard Rate</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MdAccessTime className="text-amber-500 mt-1 mr-2" />
                  <span className="text-gray-600">Free cancellation up to <strong>48 hours</strong> before check-in</span>
                </li>
                <li className="flex items-start">
                  <MdCancel className="text-red-500 mt-1 mr-2" />
                  <span className="text-gray-600"><strong>50% charge</strong> for cancellations within 24-48 hours of check-in</span>
                </li>
                <li className="flex items-start">
                  <MdPayment className="text-purple-500 mt-1 mr-2" />
                  <span className="text-gray-600"><strong>Full charge</strong> for cancellations within 24 hours of check-in or no-shows</span>
                </li>
              </ul>
            </div>


            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-red-100 rounded-full mr-4">
                  <MdCancel className="text-red-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Non-Refundable Rate</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MdPayment className="text-red-500 mt-1 mr-2" />
                  <span className="text-gray-600">No refund for cancellations or modifications</span>
                </li>
                <li className="flex items-start">
                  <MdCheckCircle className="text-green-500 mt-1 mr-2" />
                  <span className="text-gray-600">Discount of <strong>15%</strong> applied to room rate</span>
                </li>
                <li className="flex items-start">
                  <MdAccessTime className="text-amber-500 mt-1 mr-2" />
                  <span className="text-gray-600">Full payment required at time of booking</span>
                </li>
              </ul>
            </div>
          </div>

    
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Refund Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Cancellation Request</h3>
                <p className="text-sm text-gray-600">Submit your cancellation via email, phone, or through our website</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Confirmation</h3>
                <p className="text-sm text-gray-600">We'll send a cancellation confirmation email within 2 hours</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Refund Processing</h3>
                <p className="text-sm text-gray-600">Refunds are processed within 7-10 business days to the original payment method</p>
              </div>
            </div>
          </div>

          {/* Exceptions & FAQs */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Exceptions & Frequently Asked Questions</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Exceptional Circumstances</h3>
              <p className="text-gray-600 mb-3">
                In cases of documented medical emergencies or natural disasters, we may offer more flexible cancellation options. Please contact our management team with supporting documentation.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-semibold text-gray-800 mb-1">Can I modify my booking instead of canceling?</h4>
                <p className="text-gray-600">Yes, subject to availability and rate differences. Modifications to non-refundable rates may incur change fees.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-semibold text-gray-800 mb-1">What if I need to leave early?</h4>
                <p className="text-gray-600">Early departures are treated as cancellations for the unused nights and are subject to our cancellation policy.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-semibold text-gray-800 mb-1">Is travel insurance recommended?</h4>
                <p className="text-gray-600">We highly recommend purchasing travel insurance to protect against unexpected circumstances that may affect your travel plans.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">How are refunds processed for group bookings?</h4>
                <p className="text-gray-600">Group bookings (5+ rooms) have different cancellation policies. Please refer to your group contract or contact our events team.</p>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-[#E61C5D] to-[#D70040] rounded-2xl p-8 text-white">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/20 rounded-full">
                  <MdHelp className="text-3xl" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">Need Further Assistance?</h2>
              <p className="mb-6 max-w-2xl mx-auto">Our guest services team is available 24/7 to help with any questions about our cancellation policy or to assist with modifying your reservation.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:+18001234567"
                  className="px-6 py-3 bg-white text-[#E61C5D] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Call Now: (800) 123-4567
                </a>
                <a
                  href="mailto:support@hotelexample.com"
                  className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}