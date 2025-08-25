import React, { useEffect } from 'react'
import SearchIcon from "../assets/images/Search_icon.svg" 
import ConnectIcon from "../assets/images/Connect_icon.svg" 
import ExperienceIcon from "../assets/images/Experience_icon.svg" 
import AOS from "aos";
import "aos/dist/aos.css";

const Adventure = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  return (
    <div className='max-w-6xl mx-auto mt-20 pb-10 px-5 sm:px-8 md:px-12 bg-gradient-to-bl from-blue-400 via-blue-100 to-blue-400 rounded-2xl'>
      <div className='bg-no-repeat bg-left-bottom'>
        <div className='bg-no-repeat bg-right-top'>
          
          {/* Title */}
          <div data-aos="fade-right" className='pt-10 sm:pt-16 text-center md:text-left'>
            <p className='text-lg sm:text-xl font-semibold'>How It Works</p>
            <h2 className='text-2xl sm:text-4xl md:text-5xl font-extrabold leading-snug py-3'>
              Your next adventure is <br className='hidden md:block' /> just three steps away
            </h2>
          </div>

          {/* 3 Cards */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10'>
            
            {/* Card 1 */}
            <div data-aos="flip-right" className='bg-white p-6 sm:p-8 rounded-lg shadow-md text-center md:text-left'>
              <div className='bg-[#0057B8] w-12 h-12 rounded-full flex justify-center items-center mx-auto md:mx-0'>
                <img className='w-2/3' src={SearchIcon} alt="search-icon" />
              </div>
              <h2 className='font-bold text-xl sm:text-2xl py-3'>Explore</h2>
              <p className='text-sm sm:text-base text-gray-600'>
                Find stories and destinations from creators worldwide
              </p>
            </div>

            {/* Card 2 */}
            <div data-aos="flip-left" className='bg-white p-6 sm:p-8 rounded-lg shadow-md text-center md:text-left'>
              <div className='bg-[#0057B8] w-12 h-12 rounded-full flex justify-center items-center mx-auto md:mx-0'>
                <img className='w-2/3' src={ConnectIcon} alt="connect-icon" />
              </div>
              <h2 className='font-bold text-xl sm:text-2xl py-3'>Connect</h2>
              <p className='text-sm sm:text-base text-gray-600'>
                Follow creators and save your favorite journeys.
              </p>
            </div>

            {/* Card 3 */}
            <div data-aos="flip-right" className='bg-white p-6 sm:p-8 rounded-lg shadow-md text-center md:text-left'>
              <div className='bg-[#0057B8] w-12 h-12 rounded-full flex justify-center items-center mx-auto md:mx-0'>
                <img className='w-2/3' src={ExperienceIcon} alt="experience-icon" />
              </div>
              <h2 className='font-bold text-xl sm:text-2xl py-3'>Experience</h2>
              <p className='text-sm sm:text-base text-gray-600'>
                Book, plan, or be inspired to go there yourself
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Adventure;
