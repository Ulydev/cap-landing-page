import React from "react"

const Features = () => (
  <div className="flex flex-col md:px-20 space-y-20">
    <div className="flex-1 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
      <div className="flex flex-col w-full md:w-64 border border-primary-100 border-opacity-50 p-4 space-y-4 font-monospace text-xs">
        <div className="flex flex-row text-primary-100">
          <u className="underline">BUY</u>&nbsp;{">"} $
          <u className="underline">AAPL</u>&nbsp;with $
          <u className="underline">DAI</u>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row border border-primary-100 border-opacity-50 p-2 justify-between">
            <span className="opacity-25">0.00 DAI</span>
            <span className="">MAX</span>
          </div>
          <div className="flex flex-row items-center justify-center bg-primary-100 text-gray-900 p-2 font-bold">
            BUY $AAPL
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="flex flex-col p-2">
            <span>Account (AAPL)</span>
            <div className="flex flex-row justify-between opacity-50">
              <span>Balance</span>
              <span>0.00</span>
            </div>
          </div>
          <div className="h-0 w-full border-t border-white border-opacity-50" />
          <div className="flex flex-col p-2">
            <span>Account (DAI)</span>
            <div className="flex flex-row justify-between opacity-50">
              <span>Balance</span>
              <span>584.00</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col pt-8 space-y-20">
        <div className="flex flex-col space-y-4">
          <div className="h-0 w-12 border-t border-primary-100 border-opacity-50" />
          <span className="font-monospace text-xl">Decentralized Trading</span>
          <span className="text-xs opacity-50 w-64">
            Go long or short on thousands of stocks, ETFs, cryptos, foreign
            exchanges, and more.
          </span>
        </div>
        <div className="flex flex-col space-y-4 items-end">
          <div className="h-0 w-12 border-t border-primary-100 border-opacity-50" />
          <span className="font-monospace text-right text-xl">
            Community Governed
          </span>
          <span className="text-xs opacity-50 text-right w-64">
            An open protocol with community governance. We believe the team is a
            weak link in a system whose goal is to live forever.
          </span>
        </div>
      </div>
    </div>

    <div className="flex-1 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-4">
          <div className="h-0 w-12 border-t border-primary-100 border-opacity-50" />
          <span className="font-monospace text-xl">Built on Web3</span>
          <span className="text-xs opacity-50 w-64">
            Use your Ethereum wallet to fund your account - no sign up or KYC
            required.
            <br />
            All transactions are verifiable.
          </span>
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-gray-900 bg-opacity-50 p-6 space-y-16 font-monospace text-xs font-monospace">
        <div className="flex flex-col space-y-1">
          <div className="flex flex-row justify-between text-primary-100">
            <span className="">Increase maxSupply for !BTC</span>
            <span className="">#255</span>
          </div>
          <span style={{ fontSize: "0.55rem" }}>
            0x18E620F8D2eA31D460f38038d612fB01D18AA7f
          </span>
        </div>

        <div className="flex flex-col space-y-1">
          <span>EXPIRES: 11/11/2020, 7:42:17 PM</span>
          <div className="relative w-full bg-gray-500">
            <div
              className="border-t-2 border-primary-100"
              style={{ width: "66%" }}
            />
          </div>
          <div className="flex flex-row justify-between">
            <span>YES [66%]</span>
            <span>NO [33%]</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Features
