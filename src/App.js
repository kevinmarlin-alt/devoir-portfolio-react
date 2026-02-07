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

  const [user, setUser] = useState([])
  
   useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://api.github.com/users/github-john-doe")

        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`)
        }

        const data = await response.json()
        setUser(data)

      } catch (err) {
        console.error(err.message)
      }
    }

    fetchUsers()
  }, [])


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
      <Modale userData={user} />
    </div>
  )
}