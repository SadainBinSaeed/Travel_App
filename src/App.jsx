import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import SocialDashboard from "./components/pages/SocialDashboard";
import Header from "./components/Header";
import TravelingHeroClone from "./components/TravelingHeroClone";
import Adventure from "./components/Adventure";
import StackedSections from "./components/StackedSections";
import TravelStyle from "./components/TravelStyle";
import Footer from "./components/Footer";

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
              {/* <SocialDashboard /> */}
            </>
                  }        />


        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
         <Route path="/dashboard" element={<SocialDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
