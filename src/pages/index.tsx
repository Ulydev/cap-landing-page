import React from "react"
import { Helmet } from "react-helmet"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import SEO from "../components/SEO"
import Whitepaper from "../components/Whitepaper"

const Index = () => (
  <>
    <Helmet>
      <script
        async
        defer
        data-domain="cap.exchange"
        src="https://plausible.io/js/plausible.js"
      ></script>
    </Helmet>
    <SEO />
    <div className="relative">
      <div className="absolute w-full h-full pattern-dots text-primary-100 opacity-10" />
      <div className="relative z-10 mx-8 py-8 md:max-w-3xl md:mx-auto text-white">
        <Header />

        <Hero />
        <Features />
        <Whitepaper />

        <Footer />
      </div>
    </div>
  </>
)

export default Index
