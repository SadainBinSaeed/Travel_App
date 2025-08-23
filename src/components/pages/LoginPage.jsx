// import React from "react";
// import { FaEnvelope, FaLock, FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import boyImg from "../../assets/images/Boy_img.svg";

// const LoginPage = () => {
//   return (
//     <div className="flex h-screen">
//       {/* Left side image */}
//       <div className="w-1/2">
//         <img
//           src={boyImg}
//           alt="Travel"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Right side form */}
//       <div className="w-1/2 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black relative">
//         <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[110px] font-extrabold text-white opacity-10 select-none">
//           Travel
//         </h1>

//         <div className="bg-transparent w-[380px] p-8">
//           <h2 className="text-3xl font-semibold text-white text-center mb-2">
//             Welcome back
//           </h2>

//           <p className="text-gray-400 text-sm text-center mb-6">
//             Login below or{" "}
//             <Link to="./signup" 
//              className="text-blue-400 hover:underline cursor-pointer">
//               create an account
//             </Link>
//           </p>

       
//           <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
//             <h5 className="text-white text-[15px]">Email or Phone Number</h5>
//             <div className="relative">
//               <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
//               <input
//                 type="email"
//                 placeholder="Email or Phone Number"
//                 className="w-full pl-10 pr-3 py-3 bg-gray-800 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <h5 className="text-white text-[15px]">Password</h5>
//             <div className="relative">
//               <FaLock className="absolute left-3 top-3.5 text-gray-400" />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full pl-10 pr-14 py-3 bg-gray-800 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <button
//                 type="button"
//                 className="absolute right-3 top-2.5 text-gray-400 hover:text-white"
//               >
//                 View
//               </button>
//             </div>

//             <div className="flex justify-between items-center text-gray-400 text-sm">
//               <label className="flex items-center gap-2">
//                 <input type="checkbox" className="accent-blue-500" />
//                 Remember me
//               </label>
//               <a href="#" className="hover:text-white">
//                 Forgot Password?
//               </a>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition cursor-pointer"
//             >
//               Login
//             </button>

//             <p className="text-sm text-gray-400 text-center mt-2 mb-6">
//               Don’t have an account?{" "}
//               <Link to="/signup" className="text-blue-400 hover:underline cursor-pointer">
//                 Sign up
//               </Link>
//             </p>
//           </form>

//           {/* Divider */}
//           <div className="flex items-center my-6">
//             <div className="flex-grow border-t border-gray-700"></div>
//             <span className="mx-3 text-gray-400 text-sm">or continue with</span>
//             <div className="flex-grow border-t border-gray-700"></div>
//           </div>

//           {/* Social login */}
//           <div className="flex justify-center gap-5 text-white text-lg">
//             <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
//               <FaFacebookF />
//             </a>
//             <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
//               <FaGoogle />
//             </a>
//             <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
//               <FaApple />
//             </a>
//           </div>
//         </div>

//         <h1 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[110px] font-extrabold text-white opacity-10 select-none">
//           Landseairge
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;




import React from "react";
import { FaEnvelope, FaLock, FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import boyImg from "../../assets/images/Boy_img.svg";

const LoginPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left side image */}
      <div className="hidden md:block md:w-1/2">
        <img
          src={boyImg}
          alt="Travel"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black relative p-6">
        <h1 className="absolute top-2 left-1/2 transform -translate-x-1/2 text-[60px] md:text-[110px] font-extrabold text-white opacity-10 select-none">
          Travel
        </h1>

        <div className="bg-transparent w-full max-w-[380px] p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-2">
            Welcome back
          </h2>

          <p className="text-gray-400 text-xs md:text-sm text-center mb-6">
            Login below or{" "}
            <Link to="/signup" className="text-blue-400 hover:underline cursor-pointer">
              create an account
            </Link>
          </p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <h5 className="text-white text-sm md:text-[15px]">Email or Phone Number</h5>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="w-full pl-10 pr-3 py-3 bg-gray-800 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <h5 className="text-white text-sm md:text-[15px]">Password</h5>
            <div className="relative">
              <FaLock className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-14 py-3 bg-gray-800 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-gray-400 hover:text-white text-xs md:text-sm"
              >
                View
              </button>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs md:text-sm gap-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-500" />
                Remember me
              </label>
              <a href="#" className="hover:text-white">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition cursor-pointer"
            >
              Login
            </button>

            <p className="text-xs md:text-sm text-gray-400 text-center mt-2 mb-6">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-blue-400 hover:underline cursor-pointer">
                Sign up
              </Link>
            </p>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-700"></div>
            <span className="mx-3 text-gray-400 text-xs md:text-sm">or continue with</span>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>

          {/* Social login */}
          <div className="flex justify-center gap-5 text-white text-lg">
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
              <FaFacebookF />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
              <FaGoogle />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
              <FaApple />
            </a>
          </div>
        </div>

        <h1 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-[50px] md:text-[110px] font-extrabold text-white opacity-10 select-none">
          Landseairge
        </h1>
      </div>
    </div>
  );
};

export default LoginPage;
