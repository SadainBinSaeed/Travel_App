// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import { FaArrowRight } from "react-icons/fa6";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const sections = [
//   {
//     title: "A Hike Through The Alps",
//     description:
//       "Discover The Best Creator-Generated Stories From Around The World. Explore Unique Perspectives And Inspiring Content That Sparks Your Curiosity.",
//     creator: "James Smith",
//     image:"../src/assets/images/Stackedimg1.svg",
//   },
//   {
//     title: "Exploring The Sahara",
//     description:
//       "Travel through the endless dunes, discover hidden oases, and experience the magic of the desert like never before.",
//     creator: "Emily Johnson",
//     image:"../src/assets/images/Stackedimg2.svg",
//   },
//   {
//     title: "City Lights Adventure",
//     description:
//       "Step into the bustling streets filled with culture, food, and unforgettable urban adventures.",
//     creator: "Michael Lee",
//     image:"../src/assets/images/Stackedimg3.svg",
//   },
//   {
//     title: "Tropical Paradise",
//     description:
//       "Relax on pristine beaches, enjoy the sunshine, and soak in the ultimate tropical vibes.",
//     creator: "Sophia Brown",
//     image:"../src/assets/images/Stackedimg4.svg",
//   },
// ];

// export default function StackedSections() {

//            useEffect(() => {
//             AOS.init({
//               offset: 200,
//               duration: 800,
//               easing: 'ease-in-sine',
//               delay: 100,
//             });
//           }, [])

//   return (
//     <div className="relative h-[400vh] max-w-6xl mx-auto">
//       <div  className="mt-25 flex justify-between">
//         <h2 data-aos="zoom-in-right" className="text-[50px] font-extrabold leading-16 pl-20 ">Stories Worth <br /> Traveling For</h2>
//   <div data-aos="zoom-in-left" className="flex justify-around mt-10 items-center border-1 border-gray-200 h-13 w-50 rounded-[10px] shadow-xl/30">
//      <button>VIEW MORE</button>
//       <FaArrowRight/>
//        </div>
//       </div>
//       {sections.map((sec, index) => (
//         <motion.section
//           key={index}
//           className="sticky top-0 h-screen flex flex-col md:flex-row  justify-between items-center bg-white px-6 md:px-20 border-b border-dashed border-gray-300 mb-10"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false, amount: 0.5 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
       

// <div className="md:w-1/2 space-y-4 text-center md:text-left">
//   <h1 className="text-3xl md:text-4xl font-bold">{sec.title}</h1>
//   <p className="text-gray-600">{sec.description}</p>
//   <p>
//     <span className="text-gray-500">Creator: </span>
//     <span className="font-semibold">{sec.creator}</span>
//   </p>
//   <div className="flex gap-3 text-gray-500 text-sm justify-center md:justify-start">
//     <button className="border-1 border-gray-400 px-5 py-1 rounded-2xl"> Travel</button>
//     <button className="border-1 border-gray-400 px-5 py-1 rounded-2xl">Food</button>
//     <button className="border-1 border-gray-400 px-5 py-1 rounded-2xl">Culture</button>
//     <button className="border-1 border-gray-400 px-5 py-1 rounded-2xl">Adventure</button>
//   </div>
//   <div className="bg-[#0057B8] text-white flex justify-between items-center hover:bg-blue-700 transition w-60 h-13 rounded-[10px] px-4 mt-10">
//     <button className="text-[14px]">MEET OUR CREATOR</button>
//     <FaArrowRight className="flex items-center" />
//   </div>

//   <div className="border-b border-dashed border-gray-300 mt-8"></div>
// </div>

//           <motion.div
//             className="md:w-1/2 mt-6 md:mt-0 flex justify-end"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: false, amount: 0.3 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <img src={sec.image} alt={sec.title} className="rounded-lg shadow-lg h-[300px] w-[280px]"/>
//           </motion.div>
//         </motion.section>
//       ))}
//       </div>
//   );
// }






import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const sections = [
  {
    title: "A Hike Through The Alps",
    description:
      "Discover The Best Creator-Generated Stories From Around The World. Explore Unique Perspectives And Inspiring Content That Sparks Your Curiosity.",
    creator: "James Smith",
    image: "../src/assets/images/Stackedimg1.svg",
  },
  {
    title: "Exploring The Sahara",
    description:
      "Travel through the endless dunes, discover hidden oases, and experience the magic of the desert like never before.",
    creator: "Emily Johnson",
    image: "../src/assets/images/Stackedimg2.svg",
  },
  {
    title: "City Lights Adventure",
    description:
      "Step into the bustling streets filled with culture, food, and unforgettable urban adventures.",
    creator: "Michael Lee",
    image: "../src/assets/images/Stackedimg3.svg",
  },
  {
    title: "Tropical Paradise",
    description:
      "Relax on pristine beaches, enjoy the sunshine, and soak in the ultimate tropical vibes.",
    creator: "Sophia Brown",
    image: "../src/assets/images/Stackedimg4.svg",
  },
];

export default function StackedSections() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top heading + button */}
      <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-6">
        <h2
          data-aos="zoom-in-right"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center sm:text-left"
        >
          Stories Worth <br className="hidden sm:block" /> Traveling For
        </h2>

        <div
          data-aos="zoom-in-left"
          className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition"
        >
          <button className="text-sm sm:text-base font-medium">
            VIEW MORE
          </button>
          <FaArrowRight />
        </div>
      </div>

      {/* Sections loop */}
      {sections.map((sec, index) => (
        <motion.section
          key={index}
          className="sticky top-0 min-h-screen flex flex-col md:flex-row justify-between items-center bg-white py-12 md:py-20 border-b border-dashed border-gray-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Left text */}
          <div className="md:w-1/2 space-y-4 text-center md:text-left px-2 sm:px-6 md:px-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {sec.title}
            </h1>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              {sec.description}
            </p>
            <p className="text-sm sm:text-base">
              <span className="text-gray-500">Creator: </span>
              <span className="font-semibold">{sec.creator}</span>
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start text-gray-500 text-xs sm:text-sm mt-4">
              <button className="border border-gray-400 px-4 py-1 rounded-2xl">
                Travel
              </button>
              <button className="border border-gray-400 px-4 py-1 rounded-2xl">
                Food
              </button>
              <button className="border border-gray-400 px-4 py-1 rounded-2xl">
                Culture
              </button>
              <button className="border border-gray-400 px-4 py-1 rounded-2xl">
                Adventure
              </button>
            </div>

            {/* CTA button */}
            <div className="bg-[#0057B8] text-white flex justify-between items-center hover:bg-blue-700 transition w-full sm:w-60 h-12 rounded-lg px-4 mt-8 mx-auto md:mx-0">
              <button className="text-xs sm:text-sm md:text-base font-medium">
                MEET OUR CREATOR
              </button>
              <FaArrowRight />
            </div>

            <div className="border-b border-dashed border-gray-300 mt-8"></div>
          </div>

          {/* Right image */}
          <motion.div
            className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={sec.image}
              alt={sec.title}
              className="rounded-lg shadow-lg max-h-[350px] w-full max-w-[280px] sm:max-w-[350px] object-cover"
            />
          </motion.div>
        </motion.section>
      ))}
    </div>
  );
}
