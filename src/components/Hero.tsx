import React from "react"

import { BsArrowRightShort } from "react-icons/bs"

const Hero = () => (
  <div className="flex flex-col my-20 px-4 md:px-32 space-y-8">
    <span className="text-2xl font-monospace">
      Trade <span className="text-primary">synthetics</span> and{" "}
      <span className="text-primary">perpetuals</span> with DAI stablecoin.
    </span>
    <span className="text-sm opacity-75 max-w-sm">
      CAP uses an automated market maker to quote liquidity around an assets'
      last price. A liquidity pool in which anyone can participate in receives
      losses and pays out profits.
    </span>
    <div className="flex flex-col md:flex-row font-monospace text-xs tracking-widest space-y-4 md:space-y-0 md:space-x-8">
      <a className="flex flex-row w-48 p-4 py-2 border-b border-primary justify-between items-center hover:bg-gray-900 transition duration-500">
        <span>SYNTHETICS</span>
        <BsArrowRightShort size="1.4rem" />
      </a>
      <a className="flex flex-row w-48 p-4 py-2 border-b border-primary justify-between items-center hover:bg-gray-900 transition duration-500">
        <span>PERPETUALS</span>
        <BsArrowRightShort size="1.4rem" />
      </a>
    </div>
  </div>
)

export default Hero
