// import React from "react";
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginPage from "./components/pages/LoginPage";
// import SignupPage from "./components/pages/SignupPage";
// import SocialDashboard from "./components/pages/SocialDashboard";
// import Header from "./components/Header";
// import TravelingHeroClone from "./components/TravelingHeroClone";
// import Adventure from "./components/Adventure";
// import StackedSections from "./components/StackedSections";
// import TravelStyle from "./components/TravelStyle";
// import Footer from "./components/Footer";

// const App = () => {
//   return (
//     <Router>
  
//       <Header />

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
//     </Router>
//   );
// };

// export default App;




import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import SocialDashboard from "./components/pages/SocialDashboard";
import Header from "./components/Header";
import TravelingHeroClone from "./components/TravelingHeroClone";
import Adventure from "./components/Adventure";
import StackedSections from "./components/StackedSections";
import TravelStyle from "./components/TravelStyle";
import Footer from "./components/Footer";

const Layout = () => {
  const location = useLocation();

  // In pages pe Header nahi chahiye
  const hideHeaderRoutes = ["/login", "/signup", "/dashboard"];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

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
