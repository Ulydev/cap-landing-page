import React from "react"

const Whitepaper = () => (
  <div className="flex flex-col my-20 mb-32 space-y-20 font-monospace text-xs">
    <span className="tracking-widest mx-auto">WHITEPAPER</span>
    <div className="flex flex-row md:px-24 space-x-8">
      <div className="flex-1 flex flex-col space-y-8 border-b-2 border-primary border-opacity-50 p-4">
        <span className="">GENERAL</span>
        <div className="flex flex-col space-y-0">
          <span className="">Crypto-Synthetic Trading</span>
          <span className="opacity-75">Abe Osten, 2020 (16p,v1)</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col space-y-8 border-b-2 border-primary border-opacity-50 p-4">
        <span className="">TECHNICAL</span>
        <div className="flex flex-col space-y-0">
          <span className="">Crypto-Synthetic Market Making</span>
          <span className="opacity-75">Abe Osten, 2020 (10p,v1)</span>
        </div>
      </div>
    </div>
  </div>
)

export default Whitepaper
