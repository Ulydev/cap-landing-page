import React from "react"

import logo from "../assets/images/logo.svg"

const Header = () => (
  <div className="flex flex-row space-x-20 font-monospace">
    <div className="w-12">
      <img src={logo} />
    </div>
    <div className="flex flex-row space-x-8 text-xs tracking-widest">
      <a className="opacity-50">DOCS</a>
      <a
        href="https://app.cap.uly.dev"
        target="_blank"
        className="hover:text-primary-100 transition duration-300"
      >
        APP
      </a>
      <a
        href="https://forum.capdefi.net"
        target="_blank"
        className="hover:text-primary-100 transition duration-300"
      >
        FORUM
      </a>
    </div>
  </div>
)

export default Header
