import React from "react";
import TravelIcon from "../assets/images/TravelIcon.svg"


function Footer() {
  return (
    <div  className="min-h-screen mt-20 text-white flex flex-col justify-between ">
    
<div className="relative z-10 -mb-48 w-[70%] mx-auto  bg-linear-to-bl from-blue-200 via-[#0254B2] to-blue-200  from  text-center flex flex-col items-center justify-center pt-20 pb-20 rounded-2xl shadow-lg">
    <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
  <h1 className="text-4xl md:text-5xl font-bold mb-4">
    Your Journey Starts Here
  </h1>
  <p className="text-gray-300 mb-6">
    Be part of a global community sharing authentic travel stories
  </p>
  <button className="bg-white text-blue-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
    JOIN NOW →
  </button>
  </div>
</div>

      <footer className="bg-blue-100 text-gray-800 pt-48 pb-10 relative z-0">

        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img src={TravelIcon} alt="" />
            <span className="text-xl font-semibold">
              Travel <span className="text-blue-600">Landseairgr</span>
            </span>
          </div>

          <div className="flex space-x-6 text-sm mb-4 md:mb-0">
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">FAQ</a>
            <a href="#">Privacy Policy</a>
          </div>


          <div className="flex space-x-3">
            <button className="bg-gray-200 px-2 py-1 rounded">Fb</button>
            <button className="bg-gray-200 px-2 py-1 rounded">In</button>
            <button className="bg-gray-200 px-2 py-1 rounded">Yt</button>
          </div>
        </div>

        <div className="flex justify-between  pt-10 mx-auto mt-13 border-t-1 border-gray-400 max-w-6xl text-sm text-gray-500">
          <p>© 2025 Travel Landseairgr. All Rights Reserved.</p>
            <a href="#" className="text-sm text-gray-700 hover:underline">
            Scroll to top ⬆
          </a>
        </div>

<div className="pointer-events-none select-none absolute inset-0 flex items-start justify-center pt-10">
        <span className="leading-none tracking-tighter font-extrabold text-[22vw] md:text-[16vw] text-slate-300/25">
          Traveling</span>
      </div>

       

      </footer>
    </div>
  );
}

export default Footer;