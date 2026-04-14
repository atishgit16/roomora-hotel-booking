import React from "react";
import { Link } from "react-router-dom";
import Logow from "../assets/logow.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0 md:w-1/4">
            <Link to="/" className="flex items-center">
              <img
                src={Logow}
                className="w-32 h-32 p-1"
                alt="Roomora Hotel Logo"
              />
            </Link>
            <p className="mt-4 text-gray-400 hover:text-white duration-300 transition-all">
              Luxury redefined. Experience unparalleled comfort and service at
              Roomora Hotels...!
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://www.facebook.com/"
                className="hover:-translate-y-1 text-gray-400 hover:text-[#2382ff] transition duration-300"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/?lang=en-in"
                className= " hover:-translate-y-1 text-gray-400 hover:text-[#28bbff] transition duration-300"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/"
                className="hover:-translate-y-1 text-gray-400 hover:text-[#E61C5D] transition duration-300"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://in.linkedin.com/"
                className="hover:-translate-y-1 text-gray-400 hover:text-[#126de6] transition duration-300"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-md font-semibold mb-4 text-[#E61C5D]">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/rooms"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Rooms
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/rooms"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Room Booking
                </Link>
              </li>
              <li>
                <Link
                  to="/rooms"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Special Offers
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="text-md font-semibold mb-4 text-[#E61C5D]">
              CUSTOMER SUPPORT
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/faq"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/cancellationpolicy"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-4 text-[#E61C5D]">
              CONTACT US
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 mt-1 mr-3 text-[#E61C5D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-400">
                 Andheri, Mumbai , Maharastra
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-[#E61C5D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-[#E61C5D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-400">support@roomora.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 Roomora Hotels. All Rights Reserved.
          </p>
          <div className="flex mt-4 md:mt-0 space-x-6">
            <Link
              to="/privacy"
              className="text-gray-500 hover:text-[#E61C5D] text-sm transition duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-500 hover:text-[#E61C5D] text-sm transition duration-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
