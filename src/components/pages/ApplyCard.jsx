import React from "react";
import { Link } from "react-router";

const ApplyCard = () => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-gray-900 to-black relative">
      {/* Top text */}
      <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[60px] md:text-[110px] font-extrabold text-white opacity-10 select-none">
        Travel
      </h1>

      {/* Center Card */}
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-white w-[500px] max-w-[90%] text-center rounded-2xl shadow-xl p-10">
          <h2 className="text-[22px] md:text-[24px] font-semibold mb-4 text-gray-900">
            Thanks for Applying!
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Applications are reviewed within 24–48 hours. You’ll receive an email once approved.
          </p>
          {/* <Link to="/creatordashboard"> */}
          <button className="mt-10 bg-[#0154B2] hover:bg-[#014399] text-white w-[300px] max-w-full h-11 rounded-2xl transition cursor-pointer">
            Okay
          </button>
          {/* </Link> */}
        </div>
      </div>

      {/* Bottom text */}
      <h1 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[50px] md:text-[110px] font-extrabold text-white opacity-10 select-none">
        Landseairge
      </h1>
    </div>
  );
};

export default ApplyCard;

    