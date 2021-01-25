import React, { useEffect, useState } from "react"

import { BsArrowRightShort } from "react-icons/bs"
import { FaTelegramPlane } from "react-icons/fa"
import { CSSTransition, SwitchTransition } from "react-transition-group"

const AssetShowcase = () => {
  const assets = ["AAPL", "BTC", "NFLX", "GOOG", "ETH", "SP500"]
  const [assetIndex, setAssetIndex] = useState(0)
  const asset = assets[assetIndex]
  useEffect(() => {
    const interval = setInterval(
      () => setAssetIndex((assetIndex + 1) % assets.length),
      2000
    )
    return () => {
      clearInterval(interval)
    }
  })

  return (
    <span className="inline-flex relative text-primary-100 align-bottom">
      <SwitchTransition mode="in-out">
        <CSSTransition
          key={asset.toLocaleUpperCase()}
          classNames={{
            enter: "opacity-0",
            enterActive: "mb-8 opacity-0",
            exitActive: "-mb-8 opacity-0",
            exitDone: "opacity-0",
          }}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
        >
          <span className="absolute left-0 bottom-0 text-6xl transform transition-all duration-500">
            {asset}
          </span>
        </CSSTransition>
      </SwitchTransition>
      <div
        className="left-0 bottom-0 text-6xl w-full h-1 bg-primary-100 -mb-1 ml-0.5 opacity-10 transition-all duration-300 delay-500"
        style={{ width: `calc(${asset.length} * 2.25rem)` }}
      />
    </span>
  )
}

const Hero = () => (
  <div className="flex flex-col mt-32 mb-32 px-4 md:px-32 space-y-8">
    <span className="text-4xl font-monospace leading-relaxed">
      Trade <br className="sm:hidden" />
      <AssetShowcase />
      <br />
      with DAI stablecoin.
    </span>
    <span className="text-sm opacity-75 max-w-sm">
      CAP uses an automated market maker to quote asset prices. A liquidity pool
      receives losses and pays out gains.
    </span>
    <div className="flex flex-row font-monospace text-xs tracking-widest justify-between items-center">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
        <a
          className="flex flex-row w-48 p-4 py-2 border-b border-primary-100 justify-between items-center hover:bg-primary-100 hover:text-black transition duration-500"
          href="https://app.cap.uly.dev"
          target="_blank"
        >
          <span>ENTER PLATFORM</span>
          <BsArrowRightShort size="1.4rem" />
        </a>
        <a
          className="flex flex-row w-48 p-4 py-2 border-b border-primary-100 justify-between items-center hover:bg-primary-100 hover:text-black transition duration-500"
          href="https://forum.capdefi.net"
          target="_blank"
        >
          <span>EXPLORE MORE</span>
          <BsArrowRightShort size="1.4rem" />
        </a>
      </div>
      <a
        className="flex flex-row w-auto w-16 p-2 py-2 border-b border-primary-100 justify-between items-center hover:bg-primary-100 hover:text-black transition duration-500"
        href="https://t.me/capfin"
        target="_blank"
      >
        <FaTelegramPlane size="1.4rem" />
      </a>
    </div>
  </div>
)

export default Hero
