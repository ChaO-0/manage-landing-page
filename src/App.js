import React from "react";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Prefooter from "./components/Prefooter";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <div className="bg-desktop"></div>
      <div className="main-container pad-top">
        <Nav />
        <Landing />
      </div>
      <div className="bg-bot"></div>
      <div className="main-container">
        <About />
      </div>
      <Testimonials />
      <Prefooter />
      <Footer />
    </>
  );
}

export default App;
