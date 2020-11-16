import React from "react"

import logo from "../assets/images/logo.svg"

const Header = () => (
  <div className="flex flex-row space-x-20 font-monospace">
    <div className="w-12">
      <img src={logo} />
    </div>
    <div className="flex flex-row space-x-8 text-xs tracking-widest">
      <a>GOVERNANCE</a>
      <a>BLOG</a>
    </div>
  </div>
)

export default Header
