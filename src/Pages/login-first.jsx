import React, { useState } from "react";

export default function SimpleLogin({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      alert("Please fill all fields");
      return;
    }

    // Store in localStorage
    const userData = { name, email, contact };
    localStorage.setItem("roomoraUser", JSON.stringify(userData));

    alert("Login Successful ");
    onClose(); // close popup
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-blur bg-opacity-60">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative animate-fadeIn">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✖
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
          Login to ROOMORA
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            placeholder="Enter your Contact Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg py-3 font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
