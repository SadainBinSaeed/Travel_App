import React from "react";
import TravelIcon from "../assets/images/TravelIcon.svg";

function Footer() {
  return (
    <div className="min-h-screen mt-20 text-white flex flex-col justify-between">
      {/* CTA Card */}
      <div className="relative z-10 -mb-48 w-[90%] sm:w-[80%] md:w-[70%] mx-auto bg-gradient-to-bl from-blue-200 via-[#0254B2] to-blue-200 text-center flex flex-col items-center justify-center py-14 px-6 rounded-2xl shadow-lg">
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Your Journey Starts Here
          </h1>
          <p className="text-gray-200 text-sm sm:text-base mb-6 max-w-xl mx-auto">
            Be part of a global community sharing authentic travel stories
          </p>
          <button className="bg-white text-blue-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition text-sm sm:text-base">
            JOIN NOW →
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-blue-100 text-gray-800 pt-56 pb-10 relative z-0">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <img src={TravelIcon} alt="logo" className="h-8 w-auto" />
            <span className="text-lg sm:text-xl font-semibold">
              Travel{" "}
              <span className="text-blue-600">Landseairgr</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
            <a href="#" className="hover:text-blue-600 transition">
              About
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              Contact
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              FAQ
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              Privacy Policy
            </a>
          </div>

          {/* Socials */}
          <div className="flex justify-center md:justify-end space-x-3">
            <button className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 transition">
              Fb
            </button>
            <button className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 transition">
              In
            </button>
            <button className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 transition">
              Yt
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-center gap-4 pt-10 mx-auto mt-8 border-t border-gray-400 max-w-6xl text-xs sm:text-sm text-gray-500 px-4">
          <p>© 2025 Travel Landseairgr. All Rights Reserved.</p>
          <a
            href="#"
            className="text-sm text-gray-700 hover:underline"
          >
            Scroll to top ⬆
          </a>
        </div>

        {/* Background text */}
        <div className="pointer-events-none select-none absolute inset-0 flex items-start justify-center pt-10">
          <span className="leading-none tracking-tighter font-extrabold text-[22vw] md:text-[16vw] text-slate-300/25">
            Traveling
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
