import React from "react"

const Footer = () => (
  <div className="flex flex-row justify-between text-xs font-monospace opacity-75">
    <span>© Cap Finance</span>
    <div className="flex flex-row space-x-12">
      <a
        href="https://t.me/capfin"
        target="_blank"
        className="hover:text-primary-100 transition duration-300"
      >
        TELEGRAM
      </a>
      <a
        href="https://twitter.com/CapDotFinance"
        target="_blank"
        className="hover:text-primary-100 transition duration-300"
      >
        TWITTER
      </a>
      <a
        href="https://gov.cap.uly.dev"
        target="_blank"
        className="hover:text-primary-100 transition duration-300"
      >
        GOVERNANCE
      </a>
      <a
        href="https://blog.cap.finance"
        target="_blank"
        className="hover:text-primary-100 transition duration-300"
      >
        BLOG
      </a>
    </div>
  </div>
)

export default Footer
