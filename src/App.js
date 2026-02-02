import React from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav"
import Home from "./components/Home"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Legals from "./components/Legals"

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
    </div>
  )
}