// import React, { useEffect } from 'react'
// import AdventureShade from "../assets/images/adventureShade.svg"
// import AdventureBox from "../assets/images/AdventureBox.svg"
// import SearchIcon from "../assets/images/Search_icon.svg" 
// import ConnectIcon from "../assets/images/Connect_icon.svg" 
// import ExperienceIcon from "../assets/images/Experience_icon.svg" 
// import AOS from "aos";
// import "aos/dist/aos.css";


// const Adventure = () => {

//          useEffect(() => {
//           AOS.init({
//             offset: 200,
//             duration: 800,
//             easing: 'ease-in-sine',
//             delay: 100,
//           });
//         }, [])

//     return (
//         <div className='max-w-6xl mx-auto mt-20 pb-10 bg-gradient-to-bl from-blue-400 via-blue-100 to-blue-400 rounded-2xl'>
//             <div   className='bg-no-repeat bg-left-bottom'>
//                     <div className='bg-no-repeat bg-right-top'>
//             <div data-aos="fade-right" className='pt-20 pl-20'>
//                 <p className='text-[25px] font-semibold'> How It Works</p>
//                 <h2 className='text-[50px] font-extrabold leading-12 py-5'>Your next adventure is <br />just three steps away</h2>
//             </div>

//             <div  className='grid grid-cols-3 justify-center gap-6 max-w-5xl mx-auto mt-10'>
//               <div data-aos="flip-right" className='bg-white py-10 pl-10 rounded-[5px]'>
//                   <div className='bg-[#0057B8] w-[40px] h-[40px] rounded-full flex justify-center'><img className='w-[60%]' src={SearchIcon} alt="search-icon" /></div>
//                   <h2 className='font-bold text-[30px] py-3'>Explore</h2>
//                   <p className='text-[14px]'>Find stories and destinations from <br></br>creators worldwide</p>
//               </div>

//                <div data-aos="flip-left" className='bg-white py-10 pl-10 rounded-[5px]'>
//                   <div className='bg-[#0057B8] w-[40px] h-[40px] rounded-full flex justify-center'><img className='w-[60%]' src={ConnectIcon} alt="connect-icon" /></div>
//                   <h2 className='font-bold text-[30px] py-3'>Connect</h2>
//                   <p className='text-[14px]'>Follow creators and save your <br /> favorite journeys.</p>
//               </div>

//                <div data-aos="flip-right" className='bg-white py-10 pl-10 rounded-[5px]'>
//                   <div className='bg-[#0057B8] w-[40px] h-[40px] rounded-full flex justify-center'><img className='w-[60%]' src={ExperienceIcon} alt="experience-icon" /></div>
//                   <h2 className='font-bold text-[30px] py-3'>Experience</h2>
//                   <p className='text-[14px]'>Book, plan, or be inspired to go <br /> there yourself</p>
//               </div>

              
//             </div>
// </div>
// </div>
//         </div>
//     )
// }

// export default Adventure






import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderImg from '../assets/images/header.svg';
import Vector8 from '../assets/images/Vector8.svg';
import { FaBars, FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import HeaderImgs from "../assets/images/HeaderImgs.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <>
      <div
        style={{ backgroundImage: `url("${HeaderImg}")` }}
        className="bg-no-repeat bg-cover bg-center w-full min-h-screen object-cover"
      >
        {/* Navbar */}
        <div className="max-w-6xl mx-auto flex justify-between pt-10">
          <div className="flex justify-start items-center">
            <FaBars className="text-white text-[22px]" />
            <p className="text-white text-[24px] pl-2">Menu</p>
          </div>
          <div className="flex gap-1">
            <div className="bg-white h-10 w-10 flex justify-center items-center rounded-[7px] font-semibold">Fb</div>
            <div className="bg-white h-10 w-10 flex justify-center items-center rounded-[7px] font-semibold">In</div>
            <div className="bg-white h-10 w-10 flex justify-center items-center rounded-[7px] font-semibold">Yt</div>
          </div>
        </div>

        {/* Heading */}
        <h1 data-aos="zoom-in" className="text-white text-[116px] text-center pt-10">
          Where the vibe finds you
        </h1>

        {/* Info Section */}
        <div className="px-20 pt-30 flex justify-between">
          <div className="w-100">
            <p data-aos="zoom-in-right" className="text-white">
              Come for the inspiration, Stay for the journey you didn’t see coming , leave with a story you can’t stop telling
            </p>
          </div>
          <div>
            <img data-aos="zoom-in-left" src={Vector8} alt="" />
          </div>
        </div>

        {/* ✅ Signup Button */}
        <div
          data-aos="fade-up"
          className="flex justify-evenly items-center mx-auto bg-white w-45 rounded-[10px] py-3 mt-3"
        >
          <Link to="/signup">
            <button className="uppercase">Sign Up Free</button>
          </Link>
          <FaArrowRight />
        </div>

        {/* Testimonial */}
        <div className="flex justify-between py-20">
          <div data-aos="zoom-in-right" className="pl-22">
            <img src={HeaderImgs} alt="" />
          </div>
          <div className="flex items-center justify-center pr-20">
            <div
              data-aos="zoom-in-left"
              className="relative bg-blue-500 text-white w-[200px] p-6 rounded-lg shadow-lg 
              [clip-path:polygon(10px_0,100%_0,100%_calc(100%-6),calc(100%-0px)_100%,0_100%,0_0px)]"
            >
              <p className="text-sm leading-relaxed">
                I’ve Connected With Travelers Who Share My Passions — And Even Booked My First Cruise Trip!
              </p>
              <p className="mt-4 text-xs font-semibold">Maya, Travel Blogger</p>
              <div className="absolute -bottom-5 -left-5 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                  <FaArrowLeft className="text-black text-sm -rotate-45" />
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

