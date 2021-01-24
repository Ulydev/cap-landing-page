import React from "react"

const Whitepaper = () => (
  <div className="flex flex-col my-20 mb-32 space-y-20 font-monospace text-xs">
    <span className="tracking-widest mx-auto">WHITEPAPER</span>
    <div className="flex flex-row md:px-24 space-x-8">
      <a
        className="flex-1 flex flex-col space-y-8 border-b-2 border-primary-100 border-opacity-50 p-4 hover:bg-primary-100 hover:text-black transition duration-500"
        href="https://cap.finance/assets/cap_cst_wp-v1.pdf"
        target="_blank"
      >
        <span className="">GENERAL</span>
        <div className="flex flex-col space-y-0">
          <span className="">Crypto-Synthetic Trading</span>
          <span className="opacity-75">Abe Osten, 2020 (16p,v1)</span>
        </div>
      </a>
      <a
        className="flex-1 flex flex-col space-y-8 border-b-2 border-primary-100 border-opacity-50 p-4 hover:bg-primary-100 hover:text-black transition duration-500"
        href="https://cap.finance/assets/cap_csmm_wp-v1.pdf"
        target="_blank"
      >
        <span className="">TECHNICAL</span>
        <div className="flex flex-col space-y-0">
          <span className="">Crypto-Synthetic Market Making</span>
          <span className="opacity-75">Abe Osten, 2020 (10p,v1)</span>
        </div>
      </a>
    </div>
  </div>
)

export default Whitepaper
