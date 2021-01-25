import React from "react"

import { GiUnicorn } from "react-icons/gi"

import logo from "../assets/images/logo.svg"

const Header = () => (
  <div className="flex flex-row justify-between font-monospace">
    <div className="w-12">
      <img src={logo} />
    </div>
    <div className="flex flex-row items-center space-x-4 sm:space-x-8 text-xs tracking-widest">
      <a
        href="https://docs.capdefi.org/"
        target="_blank"
        className="hover:text-primary-100 transition duration-300"
      >
        DOCS
      </a>
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
      <a
        href="https://app.uniswap.org/#/swap?outputCurrency=0x43044f861ec040db59a7e324c40507addb673142"
        target="_blank"
        className="hover:text-primary-100 transition duration-300 flex flex-row items-center"
      >
        $CAP&nbsp;
        <GiUnicorn className="text-base" />
      </a>
    </div>
  </div>
)

export default Header
