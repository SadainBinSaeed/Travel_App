// import React, { useEffect } from 'react'
// import HeaderImg from '../assets/images/header.svg'
// import Vector8 from '../assets/images/Vector8.svg'
// import { FaBars } from 'react-icons/fa6'
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
// import HeaderImgs from "../assets/images/HeaderImgs.svg"
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Header = () => {

//      useEffect(() => {
//     AOS.init({
//       offset: 200,
//       duration: 800,
//       easing: 'ease-in-sine',
//       delay: 100,
//     });
//   }, [])


//     return (
//         <>

//             <div style={{ backgroundImage: `url("${HeaderImg}")` }} className='bg-no-repeat bg-cover bg-center  w-full min-h-screen object-cover'>

//                 <div  className=' max-w-6xl mx-auto flex justify-between pt-10' >
//                     <div className='flex justify-start items-center'><FaBars className='text-white text-[22px] ' />
//                         <p className='text-white text-[24px] pl-2'>Menu</p>
//                     </div>

//                     <div className=' flex gap-1' >
//                         <div className='bg-white h-10 w-10 flex justify-center items-center rounded-[7px] font-semibold'>Fb</div>
//                         <div className='bg-white h-10 w-10 flex justify-center items-center rounded-[7px] font-semibold'>In</div>
//                         <div className='bg-white h-10 w-10 flex justify-center items-center rounded-[7px] font-semibold'>Yt</div>
//                     </div>
//                 </div>

//                 <h1 data-aos="zoom-in" className='text-white text-[116px] text-center pt-10'>Where the vibe finds you</h1>
//                 {/* <div style={{ backgroundImage: `url("${HeaderBoy}")` }} className='bg-no-repeat bg-center'> */}
//                 <div className='px-20 pt-30 flex justify-between'>
//                     <div className='w-100 '>
//                         <p data-aos="zoom-in-right" className='text-white'>Come for the inspiration, Stay for the journey you didn’t see coming , leave with a story you can’t stop telling</p></div>
//                     <div>
//                         <img data-aos="zoom-in-left" src={Vector8} alt="" />
//                     </div>
//                 </div>
//                 <div data-aos="fade-up" className='flex justify-evenly items-center mx-auto bg-white w-45 rounded-[10px] py-3 mt-3'>
//                     <button  className='uppercase'>Sign Up Free</button>
//                     <FaArrowRight />
//                 </div>

//                 <div className='flex justify-between py-20' >
//                     <div data-aos="zoom-in-right" className='pl-22'><img src={HeaderImgs} alt="" /></div>


//                     <div className="flex items-center justify-center pr-20 ">
//                         <div data-aos="zoom-in-left" className="relative bg-blue-500 text-white w-[200px] p-6 rounded-lg shadow-lg 
//                       [clip-path:polygon(10px_0,100%_0,100%_calc(100%-6),calc(100%-0px)_100%,0_100%,0_0px)]">

//                             <p className="text-sm leading-relaxed">
//                                 I’ve Connected With Travelers Who Share My Passions — And Even Booked My First Cruise Trip!
//                             </p>

//                             <p className="mt-4 text-xs font-semibold">Maya, Travel Blogger</p>

//                             <div className="absolute -bottom-5 -left-5 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
//                                 <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
//                                     <FaArrowLeft className="text-black text-sm -rotate-45" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>



//                 </div>
//             </div>

//         </>
//     )
// }

// export default Header






import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';  
import HeaderImg from '../assets/images/header.svg'
import Vector8 from '../assets/images/Vector8.svg'
import { FaBars, FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import HeaderImgs from "../assets/images/HeaderImgs.svg"
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
  }, [])

  return (
    <>
      <div style={{ backgroundImage: `url("${HeaderImg}")` }} className='bg-no-repeat bg-cover bg-center w-full min-h-screen object-cover'>
        {/* Navbar */}
        <div className=' max-w-6xl mx-auto flex justify-between pt-10' >
          <div className='flex justify-start items-center'>
            <FaBars className='text-white text-[22px]' />
            <p className='text-white text-[24px] pl-2'>Menu</p>
          </div>
          <div className=' flex gap-1'>
            <div className='bg-white h-10 w-10 flex justify-center items-center rounded-[7px] font-semibold'>Fb</div>
            <div className='bg-white h-10 w-10 flex justify-center items-center rounded-[7px] font-semibold'>In</div>
            <div className='bg-white h-10 w-10 flex justify-center items-center rounded-[7px] font-semibold'>Yt</div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 data-aos="zoom-in" className='text-white text-[116px] text-center pt-10'>
          Where the vibe finds you
        </h1>

        <div className='px-20 pt-30 flex justify-between'>
          <div className='w-100'>
            <p data-aos="zoom-in-right" className='text-white'>
              Come for the inspiration, Stay for the journey you didn’t see coming , leave with a story you can’t stop telling
            </p>
          </div>
          <div>
            <img data-aos="zoom-in-left" src={Vector8} alt="" />
          </div>
        </div>

        {/* ✅ Sign Up Button with Link */}
        <div data-aos="fade-up" className='flex justify-evenly items-center mx-auto bg-white w-45 rounded-[10px] py-3 mt-3'>
          <Link to="/signup">  {/* Link to Signup page */}
            <button className='uppercase cursor-pointer'>Sign Up Free</button>
          </Link>
          <FaArrowRight />
        </div>

        {/* Testimonials Section */}
        <div className='flex justify-between py-20'>
          <div data-aos="zoom-in-right" className='pl-22'>
            <img src={HeaderImgs} alt="" />
          </div>

          <div className="flex items-center justify-center pr-20">
            <div data-aos="zoom-in-left" className="relative bg-blue-500 text-white w-[200px] p-6 rounded-lg shadow-lg 
              [clip-path:polygon(10px_0,100%_0,100%_calc(100%-6),calc(100%-0px)_100%,0_100%,0_0px)]">

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
  )
}

export default Header
