import React, { useState } from "react";

export default function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginBookingId, setLoginBookingId] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [bookingHistory, setBookingHistory] = useState([]);

  const handleLogin = () => {
    const allBookings = JSON.parse(localStorage.getItem("bookings")) || {};
    const users = JSON.parse(localStorage.getItem("users")) || {};

    const user = users[loginEmail];
    if (!user) {
      alert("No user found with this email.");
      return;
    }

    // Collect bookings for this email
    const userBookings = allBookings[loginEmail] || [];

    if (userBookings.length === 0) {
      alert("No bookings found for this email.");
      return;
    }

    if (loginBookingId.trim() === "") {
      setBookingHistory(userBookings);
      setLoggedInUser(user);
      alert("Login successful! Showing all bookings.");
      return;
    }

    const booking = userBookings.find(
      (b) => b.bookingId.toString() === loginBookingId.trim()
    );
    if (!booking) {
      alert("Invalid booking ID.");
      return;
    }

    setBookingHistory([booking]);
    setLoggedInUser(user);
    alert("Login successful! Showing your booking.");
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setBookingHistory([]);
    setLoginEmail("");
    setLoginBookingId("");
    alert("You have been logged out.");
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="max-w-6xl w-full">
          {!loggedInUser ? (
            // ===== Login Modal =====
            <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Decorative Side */}
              <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 flex flex-col justify-center">
                <div className="text-center">
                  <div className="mx-auto w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Welcome Back!</h2>
                  <p className="text-blue-100">Access your booking history and manage your reservations</p>
                </div>
                
                <div className="mt-10 space-y-4">
                  <div className="flex items-center">
                    <div className="bg-white/20 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <span className="text-sm">Secure access to your data</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-white/20 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <span className="text-sm">View all your bookings in one place</span>
                  </div>
                </div>
              </div>
              
              {/* Form Side */}
              <div className="md:w-3/5 p-8">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">My Bookings</h1>
                  <p className="text-gray-600">Enter your details to access your booking history</p>
                </div>
                
                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Booking ID (optional)"
                      value={loginBookingId}
                      onChange={(e) => setLoginBookingId(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <button
                    onClick={handleLogin}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg font-bold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Check Booking History
                  </button>
                  
                  <p className="text-center text-sm text-gray-600 mt-6">
                    Can't remember your booking ID? Just enter your email to see all bookings.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // Logged-in Booking History 
            <div className="bg-white rounded-2xl mt-20  shadow-xl p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    Welcome back, {loggedInUser.name}!
                  </h2>
                  <p className="text-gray-600 ml-100">Here are your booking details</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-lg font-semibold hover:bg-red-200 transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </div>

              {/* Booking History Cards */}
              {bookingHistory.length === 0 ? (
                <div className="text-center py-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-700">No bookings found</h3>
                  <p className="text-gray-600">You don't have any bookings yet.</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bookingHistory.map((b, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-800">{b.room}</h3>
                              <span className="text-sm text-gray-500">#{b.bookingId}</span>
                            </div>
                            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                              Confirmed
                            </span>
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center text-gray-700">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              <span>{b.email}</span>
                            </div>
                            
                            <div className="flex items-center text-gray-700">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              <span>{b.guests} {b.guests > 1 ? 'Guests' : 'Guest'}</span>
                            </div>
                            
                            <div className="flex items-center text-gray-700">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                              </svg>
                              <span>{b.nights} {b.nights > 1 ? 'Nights' : 'Night'}</span>
                            </div>
                            
                            {Object.keys(b.extras).filter(k => b.extras[k]).length > 0 && (
                              <div className="flex items-start text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>
                                  <span className="font-medium">Extras: </span>
                                  {Object.keys(b.extras).filter(k => b.extras[k]).join(", ")}
                                </span>
                              </div>
                            )}
                          </div>
                          
                          <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Total Amount:</span>
                            <span className="text-xl font-bold text-green-600">₹{b.totalPrice}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 text-center text-gray-600">
                    <p>Showing {bookingHistory.length} {bookingHistory.length === 1 ? 'booking' : 'bookings'}</p>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}