import React from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./assets/components/Nav"
import Footer from "./assets/components/Footer"

import Home from "./pages/Home"
import Services from "./pages/Services"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import Legals from "./pages/Legals"

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