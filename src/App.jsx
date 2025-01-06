import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Body from "./components/Body.jsx";

function App() {
  return (
    <div className="p-16">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
