import React from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"

import Home from "./views/Home/Home"
import Services from "./views/Services/Services"
import Portfolio from "./views/Portfolio/Portfolio"
import Contact from "./views/Contact/Contact"
import Legals from "./views/Legals/Legals"

import "./App.css"

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legals" element={<Legals />} />
      </Routes>
      <Footer />
    </div>
  )
}