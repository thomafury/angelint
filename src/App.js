// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home"; // Adjust the path to your Home component
import Connect from "./components/connect"; // Adjust the path to your Connect component
import Contact from "./components/contact";
import About from "./components/about";
import { injectSpeedInsights } from "@vercel/speed-insights";
// import AboutUs from './AboutUs'; // Adjust the path to your AboutUs component

const App = () => {
  injectSpeedInsights();
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
