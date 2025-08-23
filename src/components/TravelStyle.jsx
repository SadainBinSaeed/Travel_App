// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const TravelStyle = () => {

//      useEffect(() => {
//           AOS.init({
//             offset: 200,
//             duration: 800,
//             easing: 'ease-in-sine',
//             delay: 100,
//           });
//         }, [])

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen mt-40 relative bg-gradient-to-br from-blue-100  via-white to-blue-100 pb-10">

//   <div className="pointer-events-none select-none absolute inset-0 flex items-start justify-start pt-10">
//         <span className="leading-none tracking-tighter font-extrabold text-[22vw] md:text-[16vw] text-slate-300/20">
//           Traveling
//         </span>
//       </div>

//       <h2 data-aos="zoom-in" className="text-[40px] font-extrabold pt-10">
//         Choose your travel style
//       </h2>


//       <div className="flex gap-15 mb-6 mt-20">
//         <div data-aos="zoom-in-right" className="flex flex-col items-start">
//           <img
//             src="../src/assets/images/styleimg1.svg"
//             alt="img1"
//             className="w-96 h-96 object-cover rounded-[10px] shadow-lg translate-y-4"
//           />
//           <h4 className="mt-8 text-xl font-bold">Food</h4>
//           <p className="text-gray-600  w-72 text-[10px]">
//            Taste the world’s flavors
//           </p>
//         </div>

//         <div data-aos="zoom-in-left"  className="flex flex-col items-start ">
//           <img
//             src="../src/assets/images/styleimg2.svg"
//             alt="img2"
//             className="w-96 h-96 object-cover rounded-[10px] shadow-lg -translate-y-4"
//           />
//           <h4 className=" text-xl font-bold">Solo Travel </h4>
//           <p className="text-gray-600  w-72 text-[10px]">
//            Go your own way
//           </p>
//         </div>
//       </div>

//       <div className="flex gap-6">
//         <div data-aos="zoom-in-right"  className="flex flex-col items-start">
//           <img
//             src="../src/assets/images/styleimg3.svg"
//             alt="img3"
//             className="w-96 h-96 object-cover rounded-[10px] shadow-lg translate-y-4"
//           />
//           <h4 className="mt-8 text-xl font-bold">Culture</h4>
//           <p className="text-gray-600  w-72 text-[10px]">
//            Immerse in local traditions.
//           </p>
//         </div>

//         <div data-aos="zoom-in-left"  className="flex flex-col items-start">
//           <img
//             src="../src/assets/images/styleimg4.svg"
//             alt="img4"
//             className="w-96 h-96 object-cover rounded-[10px] shadow-lg -translate-y-4"
//           />
//           <h4 className=" text-xl font-bold">Adventure</h4>
//           <p className="text-gray-600  w-72 text-[10px]">
//              Chase the thrill
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TravelStyle;






import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TravelStyle = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-20 relative bg-gradient-to-br from-blue-100 via-white to-blue-100 pb-16 px-4">
      {/* Background big text */}
      <div className="pointer-events-none select-none absolute inset-0 flex items-start justify-start pt-10">
        <span className="leading-none tracking-tighter font-extrabold text-[22vw] md:text-[16vw] text-slate-300/20">
          Traveling
        </span>
      </div>

      {/* Heading */}
      <h2
        data-aos="zoom-in"
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold pt-10 text-center"
      >
        Choose your travel style
      </h2>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-16">
        {/* Food */}
        <div
          data-aos="zoom-in-right"
          className="flex flex-col items-center sm:items-start"
        >
          <img
            src="../src/assets/images/styleimg1.svg"
            alt="img1"
            className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] object-cover rounded-[10px] shadow-lg translate-y-3"
          />
          <h4 className="mt-6 text-lg sm:text-xl font-bold">Food</h4>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-[250px] text-center sm:text-left">
            Taste the world’s flavors
          </p>
        </div>

        {/* Solo Travel */}
        <div
          data-aos="zoom-in-left"
          className="flex flex-col items-center sm:items-start"
        >
          <img
            src="../src/assets/images/styleimg2.svg"
            alt="img2"
            className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] object-cover rounded-[10px] shadow-lg -translate-y-3"
          />
          <h4 className="mt-6 text-lg sm:text-xl font-bold">Solo Travel</h4>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-[250px] text-center sm:text-left">
            Go your own way
          </p>
        </div>

        {/* Culture */}
        <div
          data-aos="zoom-in-right"
          className="flex flex-col items-center sm:items-start"
        >
          <img
            src="../src/assets/images/styleimg3.svg"
            alt="img3"
            className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] object-cover rounded-[10px] shadow-lg translate-y-3"
          />
          <h4 className="mt-6 text-lg sm:text-xl font-bold">Culture</h4>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-[250px] text-center sm:text-left">
            Immerse in local traditions.
          </p>
        </div>

        {/* Adventure */}
        <div
          data-aos="zoom-in-left"
          className="flex flex-col items-center sm:items-start"
        >
          <img
            src="../src/assets/images/styleimg4.svg"
            alt="img4"
            className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] object-cover rounded-[10px] shadow-lg -translate-y-3"
          />
          <h4 className="mt-6 text-lg sm:text-xl font-bold">Adventure</h4>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-[250px] text-center sm:text-left">
            Chase the thrill
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelStyle;
