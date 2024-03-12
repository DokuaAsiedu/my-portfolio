import { CiTwitter } from "react-icons/ci"
import { SlSocialTumblr } from "react-icons/sl"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6"
import { quoteData } from "@/utils/rand-quote-gen/quotes"
import { useState } from "react"
import { IconContext } from "react-icons"
import { BackToHome } from "@/components"

function randomHex() {
  let hex = ""
  for (let i = 0; i < 3; i++) {
    const rand = Math.floor(Math.random() * 128)
    const hexComp = rand.toString(16).padStart(2, "0")
    hex += hexComp
  }

  return hex
}

export function RandQuoteGen() {
  const [quote, setQuote] = useState(
    quoteData[Math.floor(Math.random() * quoteData.length)]
  )
  const [col, setCol] = useState(randomHex())

  const changeQuote = () => {
    setQuote(quoteData[Math.floor(Math.random() * quoteData.length)])
    setCol(randomHex())
  }

  return (
    <div
      className="h-full min-h-screen flex flex-col items-center justify-center relative"
      style={{ backgroundColor: `#${col}` }}>
      <BackToHome className="" />
      <div className="w-4/5 sm:w-3/5 flex flex-col justify-between align-center gap-4 bg-white rounded-md p-8">
        <p className="text-xl" style={{ color: `#${col}` }}>
          <FaQuoteLeft className="inline-block align-top" />
          <span className="mx-2">{quote.quote}</span>
          <FaQuoteRight className="inline-block align-top" />
        </p>
        <p className="self-end" style={{ color: `#${col}` }}>
          - {quote.author}
        </p>
        <div className="w-full flex flex-row items-stretch justify-between">
          <div className="flex flex-start items-center justify-start gap-4">
            <IconContext.Provider value={{ style: { fill: "white" } }}>
              <button
                className="flex flex-col items-center justify-center rounded-lg h-full aspect-square p-2"
                style={{ backgroundColor: `#${col}` }}>
                <CiTwitter className="h-full" />
              </button>
              <button
                className="flex flex-col items-center justify-center rounded-lg h-full aspect-square p-2"
                style={{ backgroundColor: `#${col}` }}>
                <SlSocialTumblr className="h-full" />
              </button>
            </IconContext.Provider>
          </div>
          <button
            onClick={changeQuote}
            className="py-2 px-4 rounded-lg p-2 text-white"
            style={{ backgroundColor: `#${col}` }}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  )
}
