import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderImg from "../assets/images/header.svg";
import Vector8 from "../assets/images/Vector8.svg";
import { FaBars, FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import HeaderImgs from "../assets/images/HeaderImgs.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <div
        style={{ backgroundImage: `url("${HeaderImg}")` }}
        className="bg-no-repeat bg-cover bg-center w-full min-h-screen"
      >
        {/* Navbar */}
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-8 pt-6 sm:pt-10">
          <div className="flex items-center gap-2">
            <FaBars className="text-white text-xl sm:text-2xl" />
            <p className="text-white text-lg sm:text-2xl">Menu</p>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <div className="bg-white h-8 w-8 sm:h-10 sm:w-10 flex justify-center items-center rounded-md font-semibold">
              Fb
            </div>
            <div className="bg-white h-8 w-8 sm:h-10 sm:w-10 flex justify-center items-center rounded-md font-semibold">
              In
            </div>
            <div className="bg-white h-8 w-8 sm:h-10 sm:w-10 flex justify-center items-center rounded-md font-semibold">
              Yt
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1
          data-aos="zoom-in"
          className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-[80px] xl:text-[100px] font-bold text-center pt-6 sm:pt-10 px-4 leading-tight"
        >
          Where the vibe finds you
        </h1>

        {/* Sub text + Vector */}
        <div className="px-6 sm:px-12 md:px-20 mt-20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="md:w-2/5 ">
            <p
              data-aos="zoom-in-right"
              className="text-white text-sm sm:text-base md:text-lg leading-relaxed"
            >
              Come for the inspiration, Stay for the journey you didn’t see 
              coming, leave with a story you can’t stop telling
            </p>
          </div>
          <div className="md:w-1/3 flex justify-end">
            <img
              data-aos="zoom-in-left"
              src={Vector8}
              alt="vector"
              className="max-w-[180px] sm:max-w-[220px] md:max-w-[260px]"
            />
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="flex justify-center items-center mx-auto bg-white w-[80%] sm:w-[250px] rounded-lg py-2 sm:py-3 mt-6 gap-3 shadow-md"
        >
          <Link to="/signup">
            <button className="uppercase cursor-pointer text-sm sm:text-base font-semibold ">
              Sign Up Free
            </button>
          </Link>
          <FaArrowRight className="text-black text-sm sm:text-base" />
        </div>

        {/* Testimonials Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-12 sm:py-20 gap-10 md:gap-0">
          <div data-aos="zoom-in-right" className="px-6 md:pl-22">
            <img
              src={HeaderImgs}
              alt="testimonial"
              className="max-w-[250px] sm:max-w-[300px] md:max-w-[350px]"
            />
          </div>

          <div className="flex items-center justify-center px-6 md:pr-20">
            <div
              data-aos="zoom-in-left"
              className="relative bg-blue-500 text-white w-[90%] sm:w-[250px] p-4 sm:p-6 rounded-lg shadow-lg 
              [clip-path:polygon(10px_0,100%_0,100%_calc(100%-6),calc(100%-0px)_100%,0_100%,0_0px)]"
            >
              <p className="text-xs sm:text-sm leading-relaxed">
                I’ve Connected With Travelers Who Share My Passions — And Even
                Booked My First Cruise Trip!
              </p>

              <p className="mt-3 sm:mt-4 text-[10px] sm:text-xs font-semibold">
                Maya, Travel Blogger
              </p>

              <div className="absolute -bottom-5 -left-5 w-10 sm:w-12 h-10 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                <div className="bg-white rounded-full w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center">
                  <FaArrowLeft className="text-black text-xs sm:text-sm -rotate-45" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
