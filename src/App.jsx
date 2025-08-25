
// import React from "react";
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import LoginPage from "./components/pages/LoginPage";
// import SignupPage from "./components/pages/SignupPage";
// import SocialDashboard from "./components/pages/SocialDashboard";
// import Header from "./components/Header";
// import TravelingHeroClone from "./components/TravelingHeroClone";
// import Adventure from "./components/Adventure";
// import StackedSections from "./components/StackedSections";
// import TravelStyle from "./components/TravelStyle";
// import Footer from "./components/Footer";

// const Layout = () => {
//   const location = useLocation();

//   // In pages pe Header nahi chahiye
//   const hideHeaderRoutes = ["/login", "/signup", "/dashboard"];
//   const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

//   return (
//     <>
//       {!shouldHideHeader && <Header />}
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <TravelingHeroClone />
//               <Adventure />
//               <StackedSections />
//               <TravelStyle />
//               <Footer />
//             </>
//           }
//         />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/dashboard" element={<SocialDashboard />} />
//       </Routes>
//     </>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <Layout />
//     </Router>
//   );
// };

// export default App;







// import React, { useState, useEffect } from "react";
// import "./App.css";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
//   useNavigate,
// } from "react-router-dom";

// import LoginPage from "./components/pages/LoginPage";
// import SignupPage from "./components/pages/SignupPage";
// import SocialDashboard from "./components/pages/SocialDashboard";
// import Header from "./components/Header";
// import TravelingHeroClone from "./components/TravelingHeroClone";
// import Adventure from "./components/Adventure";
// import StackedSections from "./components/StackedSections";
// import TravelStyle from "./components/TravelStyle";
// import Footer from "./components/Footer";

// // ✅ Loader Component
// const Loader = () => (
//   <div className="flex items-center justify-center h-screen">
//     <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
//   </div>
// );

// const Layout = () => {
//   const location = useLocation();
//   const [loading, setLoading] = useState(false);

//   // In pages pe Header nahi chahiye
//   const hideHeaderRoutes = ["/login", "/signup", "/dashboard"];
//   const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

//   useEffect(() => {
//     // Har route change par loader dikhayega
//     setLoading(true);
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000); // 2 sec loader

//     return () => clearTimeout(timer);
//   }, [location.pathname]);

//   if (loading) {
//     return <Loader />;
//   }

//   return (
//     <>
//       {!shouldHideHeader && <Header />}
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <TravelingHeroClone />
//               <Adventure />
//               <StackedSections />
//               <TravelStyle />
//               <Footer />
//             </>
//           }
//         />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/dashboard" element={<SocialDashboard />} />
//       </Routes>
//     </>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <Layout />
//     </Router>
//   );
// };

// export default App;









import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import SocialDashboard from "./components/pages/SocialDashboard";
import Header from "./components/Header";
import TravelingHeroClone from "./components/TravelingHeroClone";
import Adventure from "./components/Adventure";
import StackedSections from "./components/StackedSections";
import TravelStyle from "./components/TravelStyle";
import Footer from "./components/Footer";

// ✨ Fancy Loader
const Loader = () => (
  <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
    <div className="relative">
      {/* Outer glow ring */}
      <div className="w-24 h-24 rounded-full border-t-4 border-blue-500 animate-spin shadow-[0_0_40px_#3b82f6]"></div>

      {/* Inner gradient pulse */}
      <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur-md animate-pulse"></div>

      {/* Center dot */}
      <div className="absolute inset-7 bg-white rounded-full shadow-lg"></div>
    </div>
  </div>
);

const Layout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // In pages pe Header nahi chahiye
  const hideHeaderRoutes = ["/login", "/signup", "/dashboard"];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  useEffect(() => {
    // Har route change par loader dikhayega
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {!shouldHideHeader && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <TravelingHeroClone />
              <Adventure />
              <StackedSections />
              <TravelStyle />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<SocialDashboard />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
