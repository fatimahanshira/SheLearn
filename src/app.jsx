import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Modules from "./components/Modules";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <Navbar
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <Hero />
      <Stats />
      <Features />
      <Modules />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
