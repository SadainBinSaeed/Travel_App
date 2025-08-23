import React, { useState } from "react";
import { FaUser, FaEnvelope , FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import boyImg from "../../assets/images/Boy_img.svg";


const SignupPage = () => {
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Left: Full image */}
      <div className="hidden md:block md:w-1/2">
        <img src={boyImg}alt="Travel"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Dark side with card */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center bg-gradient-to-br from-[#0e0f12] via-[#121418] to-[#0a0c0f]">
        {/* Faint top text */}
        <span className="pointer-events-none select-none absolute top-0 left-1/2 -translate-x-1/2 text-white/10 font-extrabold leading-none tracking-tight text-[84px] md:text-[120px]">
          Travel
        </span>

        {/* Card */}
        <div className="w-[380px] max-w-[92%]">
          <h2 className="text-3xl font-bold text-white text-center">Create an account</h2>
          <p className="text-sm text-gray-400 text-center mt-2 mb-6">
            Enter your account details below or{" "}
             <Link to="/login">
      
            <a href="#" className="text-blue-400 hover:underline">Login</a>
      </Link>
          </p>

          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-gray-300 text-sm mb-2">Enter Full Name:</label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Zachry"
                  className="w-full pl-10 pr-3 py-3 rounded-md bg-[#f2f3f5] text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Email or Phone */}
            <div>
              <label className="block text-gray-300 text-sm mb-2">
                Email or Phone Number
              </label>
              <div className="relative">
                {/* choose either mail or phone icon look; both included for “same look” */}
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="hello@zachry.com"
                  className="w-full pl-10 pr-12 py-3 rounded-md bg-[#f2f3f5] text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
               
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-300 text-sm mb-2">Password</label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type={showPass1 ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-24 py-3 rounded-md bg-[#f2f3f5] text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPass1(!showPass1)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-sm px-4 py-2 rounded-md bg-[#2b2f35] text-gray-200 hover:bg-[#3a3f46]"
                >
                  View
                </button>
              </div>
            </div>

            {/* Re-Enter Password */}
            <div>
              <label className="block text-gray-300 text-sm mb-2">Re-Enter Password</label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type={showPass2 ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-24 py-3 rounded-md bg-[#f2f3f5] text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPass2(!showPass2)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-sm px-4 py-2 rounded-md bg-[#2b2f35] text-gray-200 hover:bg-[#3a3f46]"
                >
                  View
                </button>
              </div>
            </div>

            {/* Signup button */}
            <button
              type="submit"
              className="w-full py-3 rounded-md font-semibold bg-[#1e90ff] hover:bg-[#1676d6] text-white transition"
            >
              Signup
            </button>
          </form>
        </div>

        {/* Faint bottom text */}
        <span className="pointer-events-none select-none absolute bottom-0 left-1/2 -translate-x-1/2 text-white/10 font-extrabold leading-none tracking-tight text-[84px] md:text-[120px]">
          Landseairge
        </span>
      </div>
    </div>
  );
};

export default SignupPage;

