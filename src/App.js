import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"

import Home from "./views/Home/Home"
import Services from "./views/Services/Services"
import Portfolio from "./views/Portfolio/Portfolio"
import Contact from "./views/Contact/Contact"
import Legals from "./views/Legals/Legals"
import Modale from "./views/Modale/Modale"

import "./App.css"

export default function App() {

  const [userData, setData] = useState(null)

  useEffect(() => {
      fetch("https://api.github.com/users/github-john-doe")
        .then(response => response.json())
        .then(setData)
        .catch(console.error)

      console.log(userData)
  }, []);

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
      <Modale userData={userData} />
    </div>
  )
}