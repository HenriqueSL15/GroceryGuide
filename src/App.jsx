import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Body from "./components/Body.jsx";
import Hero from "./components/Hero.jsx";
import Supermarkets from "./components/Supermarkets.jsx";

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="lg:px-16 md:px-10 md:pt-16 sm:px-2 sm:pt-3">
        <Header scrollToSection={scrollToSection} />
        <Hero scrollToSection={scrollToSection} />
        <Supermarkets scrollToSection={scrollToSection} />
        <Body scrollToSection={scrollToSection} />
        <Footer scrollToSection={scrollToSection} />
      </div>
    </>
  );
}

export default App;
