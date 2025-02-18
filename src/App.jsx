import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Body from "./components/Body.jsx";
import Hero from "./components/Hero.jsx";
import Supermarkets from "./components/Supermarkets.jsx";

function App() {
  return (
    <>
      <div className="px-16 pt-16">
        <Header />
        <Hero />
        <Supermarkets />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
