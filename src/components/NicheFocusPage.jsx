import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import boyImg from "../assets/images/Boy_img.svg";
import "../index.css";
import { Link } from "react-router-dom";

const NicheFocusPage = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Adventure & Exploration");

  const options = [
    "Adventure & Exploration",
    "Food & Culture",
    "Technology & Innovation",
    "Lifestyle & Wellness",
    "Photography & Art",
  ];

  return (
    <div className="flex flex-col md:flex-row h-auto">
      {/* Left side image */}
      <div className="hidden md:block md:w-1/2">
        <img
          src={boyImg}
          alt="Travel"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side with bg gradient */}
      <div className="relative w-full md:w-1/2 bg-gradient-to-b from-gray-900 to-black flex flex-col justify-between items-center p-6">
        
        {/* Travel - top chipka */}
        <h1
          className="absolute top-0 left-1/2 -translate-x-1/2 text-[60px] md:text-[110px] font-extrabold text-white opacity-10 select-none satoshi-text blur-half satoshi-text"
        >
          Travel
        </h1>

        {/* Center content */}
        <div className="w-full max-w-[320px] pt-30 relative z-10">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-2">
            Niche Focus
          </h2>

          <p className="text-gray-400 text-xs md:text-sm text-center mb-6">
            Enter Your Interest
          </p>

          {/* Dropdown */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h5 className="text-white text-sm md:text-[15px]">Select</h5>
            </div>
            <div
              className="relative bg-white rounded-md flex items-center justify-between px-4 py-3 cursor-pointer shadow"
              onClick={() => setOpen(!open)}
            >
              <span className="text-gray-700">{selected}</span>
              <ChevronDown
                className={`text-gray-500 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
              {open && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-md mt-1 z-20">
                  {options.map((option, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setSelected(option);
                        setOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 text-gray-700 cursor-pointer"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Short Bio */}
          <div className="mb-4">
            <h5 className="text-white text-sm md:text-[15px] mb-2">Short Bio</h5>
            <div className="relative">
              <textarea
                className="w-full bg-white text-gray-800 rounded-md p-4 pr-20 h-[150px] resize-none placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow"
              ></textarea>
              <span className="absolute top-3 left-3 text-xs text-gray-500">
                Enter Here
              </span>
            </div>
          </div>

          {/* Button */}
<Link to="/applycard">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition cursor-pointer shadow-md">
            Apply to Become a Creator
          </button>
</Link>
        </div>

        {/* Landseairge - bottom chipka */}
        <h1
          className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[40px] md:text-[90px] font-extrabold text-white opacity-5 select-none satoshi-text blur-half"
        >
          Landseairge
        </h1>
      </div>
    </div>
  );
};

export default NicheFocusPage;
