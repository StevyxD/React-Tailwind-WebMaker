import React from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Home from "./components/Nav/Home";
import { Routes, Route } from "react-router-dom";
import About from "./components/Nav/About";
import Company from "./components/Nav/Company";
import Web from "./components/Nav/Web";
import Resources from "./components/Nav/Resources";
const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/about" element={<About />} />

        <Route exact path="/company" element={<Company />} />

        <Route exact path="/webLog" element={<Web />} />
        <Route exact path="/resources" element={<Resources />} />
      </Routes>
    </>
  );
};

export default App;
