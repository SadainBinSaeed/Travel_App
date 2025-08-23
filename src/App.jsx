// import React from "react";
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import LoginPage from "./components/pages/LoginPage";
// import SignupPage from "./components/pages/SignupPage";
// import TravelingHeroClone from "./components/TravelingHeroClone";
// import Adventure from "./components/Adventure";
// import StackedSections from "./components/StackedSections";
// import TravelStyle from "./components/TravelStyle";
// import Footer from "./components/Footer";
// import SocialDashboard from "./components/SocialDashboard";

// const App = () => {
//   return (
//     <Router>
//       {/* ✅ Header har page pe show hoga */}

//       <Routes>
//         {/* ✅ Home page */}
//         <Route
//           path="/"
//           element={
//             <>
//             <Header />  
//               <TravelingHeroClone />
//               <Adventure />
//               <StackedSections />
//               <TravelStyle />
//               <Footer />
//               <SocialDashboard />
//             </>
//           }
//         />
        
//         {/* ✅ Login Page */}
//         <Route path="/login" element={<LoginPage />} />

//         {/* ✅ Signup Page */}
//         <Route path="/signup" element={<SignupPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;





// import React from "react";
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import LoginPage from "./components/pages/LoginPage";
// import SignupPage from "./components/pages/SignupPage";
// import TravelingHeroClone from "./components/TravelingHeroClone";
// import Adventure from "./components/Adventure";
// import StackedSections from "./components/StackedSections";
// import TravelStyle from "./components/TravelStyle";
// import Footer from "./components/Footer";
// import SocialDashboard from "./components/SocialDashboard";

// const App = () => {
//   return (
//     <Router>
//       {/* ✅ Header hamesha upar ek hi dafa show hoga */}
//       <Header />

//       <Routes>
//         {/* ✅ Home page */}
//         <Route
//           path="/"
//           element={
//             <>
//               <TravelingHeroClone />
//               <Adventure />
//               <StackedSections />
//               <TravelStyle />
//               <Footer />
//               <SocialDashboard />
//             </>
//           }
//         />

//         {/* ✅ Login Page */}
//         <Route path="/login" element={<LoginPage />} />

//         {/* ✅ Signup Page */}
//         <Route path="/signup" element={<SignupPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;







import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import Header from "./components/Header";
import TravelingHeroClone from "./components/TravelingHeroClone";
import Adventure from "./components/Adventure";
import StackedSections from "./components/StackedSections";
import TravelStyle from "./components/TravelStyle";
import Footer from "./components/Footer";
import SocialDashboard from "./components/SocialDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* ✅ Home page -> Header sirf yahan hoga */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <TravelingHeroClone />
              <Adventure />
              <StackedSections />
              <TravelStyle />
              <Footer />
              <SocialDashboard />
            </>
          }
        />

        {/* ❌ Login & Signup -> Header yahan nahi hoga */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};

export default App;
