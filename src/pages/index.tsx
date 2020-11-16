import React from "react"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Whitepaper from "../components/Whitepaper"

const Index = () => (
  <div className="mx-8 my-8 md:max-w-3xl md:mx-auto md:my-16 text-white">
    <Header />

    <Hero />
    <Features />
    <Whitepaper />

    <Footer />
  </div>
)

export default Index
