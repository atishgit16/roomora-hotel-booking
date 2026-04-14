import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdSecurity, MdPrivacyTip, MdPayment, MdCancel } from "react-icons/md";
import Footer from "./footer";

export default function TermsAndConditions() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const sections = [
    {
      id: "reservations",
      title: "Reservations & Bookings",
      content: (
        <div className="space-y-4">
          <p>All reservations are subject to availability and confirmation. To make a reservation, you must be at least 18 years of age and have the legal capacity to enter into a binding contract.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Reservations require a valid credit/debit card or other accepted payment method</li>
            <li>You will receive a confirmation email upon successful booking</li>
            <li>We reserve the right to refuse any reservation at our discretion</li>
            <li>Rates are subject to change without notice until reservation is confirmed</li>
          </ul>
        </div>
      )
    },
    {
      id: "payments",
      title: "Payments & Cancellations",
      content: (
        <div className="space-y-4">
          <p>Payment terms vary based on rate type and time of booking. Please review the specific terms during the booking process.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Full payment may be required at time of booking for certain rate types</li>
            <li>For flexible rates, a deposit may be required to secure your reservation</li>
            <li>Cancellation policies vary by rate type - please refer to your confirmation email</li>
            <li>No-shows will be charged according to the terms of the booked rate</li>
          </ul>
        </div>
      )
    },
    {
      id: "checkin",
      title: "Check-in & Check-out",
      content: (
        <div className="space-y-4">
          <p>Standard check-in time is 3:00 PM and check-out time is 12:00 PM. Early check-in and late check-out are subject to availability and may incur additional charges.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Valid government-issued photo identification is required at check-in</li>
            <li>A security deposit may be required upon check-in</li>
            <li>Additional guests beyond the room capacity may be subject to extra charges</li>
            <li>Early departure fees may apply if you check out before your reserved departure date</li>
          </ul>
        </div>
      )
    },
    {
      id: "hotel",
      title: "Hotel Policies",
      content: (
        <div className="space-y-4">
          <p>To ensure a comfortable and safe environment for all guests, we ask that you adhere to our hotel policies during your stay.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Smoking is prohibited in all indoor areas (designated smoking areas available)</li>
            <li>Pets are only allowed in designated pet-friendly rooms with prior arrangement</li>
            <li>Quiet hours are observed from 10:00 PM to 7:00 AM</li>
            <li>The hotel is not responsible for lost, stolen, or damaged personal items</li>
            <li>Damage to hotel property will result in appropriate charges</li>
          </ul>
        </div>
      )
    },
    {
      id: "privacy",
      title: "Privacy & Data Protection",
      content: (
        <div className="space-y-4">
          <p>Roomora Hotel is committed to protecting your privacy and personal information. We collect and use your data in accordance with our Privacy Policy.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>We collect personal information necessary to process your reservation and enhance your stay</li>
            <li>Your data may be shared with third-party service providers for reservation processing</li>
            <li>We implement appropriate security measures to protect your personal information</li>
            <li>You may opt out of marketing communications at any time</li>
          </ul>
        </div>
      )
    },
    {
      id: "liability",
      title: "Liability Limitations",
      content: (
        <div className="space-y-4">
          <p>Roomora Hotel's liability is limited as described in these terms. We are not liable for circumstances beyond our reasonable control.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>The hotel is not liable for any indirect, incidental, or consequential damages</li>
            <li>Our total liability for any claim related to your stay is limited to the cost of your reservation</li>
            <li>We are not responsible for failures or delays in performance resulting from acts beyond our control</li>
            <li>Guests are responsible for any damage they cause to hotel property</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/70 z-10"></div>
        <img
          src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
          alt="Hotel Lobby"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <div className="w-24 h-1 bg-amber-400 mb-6 mx-auto"></div>
          <p className="text-xl max-w-2xl">Please read our terms and conditions carefully before making a reservation</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Roomora Hotel</h2>
            <p className="text-gray-600 mb-4">
              These terms and conditions govern your use of our website and services, including reservations and stays at Roomora Hotel. By making a reservation or using our services, you agree to be bound by these terms.
            </p>
            <p className="text-gray-600">
              We reserve the right to modify these terms at any time. The terms applicable to your reservation are those in effect at the time of booking. For questions about these terms, please contact our guest services team.
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8 rounded-r-lg">
            <p className="text-amber-800 font-semibold">Last updated: September 10, 2025</p>
          </div>

          <div className="space-y-4">
            {sections.map((section) => (
              <div key={section.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex justify-between items-center p-6 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg">{section.title}</span>
                  {openSections[section.id] ? (
                    <MdKeyboardArrowUp className="text-xl" />
                  ) : (
                    <MdKeyboardArrowDown className="text-xl" />
                  )}
                </button>
                {openSections[section.id] && (
                  <div className="px-6 pb-6">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>

 
          <div className="bg-blue-50 rounded-2xl p-6 mt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <MdSecurity className="text-blue-500 mr-2" />
              Important Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Special Requests</h4>
                <p className="text-gray-600 text-sm">
                  While we strive to accommodate all special requests (specific room location, bedding preferences, etc.), we cannot guarantee fulfillment and additional charges may apply.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Force Majeure</h4>
                <p className="text-gray-600 text-sm">
                  Roomora Hotel is not liable for failure to perform obligations due to circumstances beyond our reasonable control, including natural disasters, acts of government, or utility outages.
                </p>
              </div>
            </div>
          </div>

 
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-[#E61C5D] to-[#D70040] rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Questions About Our Terms?</h2>
              <p className="mb-6 max-w-2xl mx-auto">Our guest services team is available to help clarify any aspect of our terms and conditions.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:+18001234567"
                  className="px-6 py-3 bg-white text-[#E61C5D] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Call: (800) 123-4567
                </a>
                <a
                  href="mailto:legal@roomorahotel.com"
                  className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Email Legal Department
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