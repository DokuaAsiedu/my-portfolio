import { BackToHome } from "@/components"
import { keys } from "@/utils/calculator/key-data"
import PropTypes from "prop-types"
import { useState } from "react"
import { create, all } from "mathjs"

const config = {}
const math = create(all, config)

export function Calculator() {
  const [display, setDisplay] = useState("0")

  const handleClick = (input) => {
    const operators = ["+", "-", "/", "*"]
    const lastInput = display[display.length - 1]
    const possDisplay = display + input
    if (input.toLowerCase() === "ac") {
      setDisplay(0)
    } else if (/[\+\-\/*]/.test(input)) {
      if (/\d/.test(lastInput)) {
        setDisplay((prev) => (prev += input))
      } else if (operators.includes(lastInput)) {
        if (lastInput === "+" && input === "-") {
          setDisplay((prev) => (prev += input))
        } else {
          const newString = display.slice(0, display.length - 1)
          setDisplay(newString + input)
        }
      } else {
        setDisplay((prev) => (prev += input))
      }
    } else if (input === ".") {
      if (operators.includes(lastInput)) {
        setDisplay((prev) => prev + "0" + input)
      } else {
        const numberMatches = possDisplay.split(/[\+\-\/*]/g)
        const lastNumber = numberMatches[numberMatches.length - 1]
        if (!(lastNumber.match(/\./g).length > 1)) {
          setDisplay((prev) => prev + input)
        }
      }
    } else if (input === "=") {
      const result = math.evaluate(display)
      setDisplay(result)
    } else {
      const numberMatches = possDisplay.split(/[\+\-\/*]/g)
      const operatorMatches = possDisplay.match(/[\+\-\/*]/g)
      if (
        numberMatches.length > 0 &&
        numberMatches.some((item) => item[0] === "0")
      ) {
        let formattedDisplay = ""
        for (let i = 0; i < numberMatches.length; i++) {
          let numIter = numberMatches[i]
          const operatorIter = operatorMatches ? operatorMatches[i] || "" : ""
          if (numIter.length > 1 && numIter[1] !== "." && numIter[0] === "0") {
            numIter = numIter.slice(1)
          }
          formattedDisplay += numIter + operatorIter
        }
        setDisplay(formattedDisplay)
      } else {
        setDisplay(possDisplay)
      }
    }
  }

  return (
    <div className="h-full min-h-screen flex flex-col items-center justify-center bg-[#C2C2D6]">
      <BackToHome />
      <div className="h-96 w-11/12 sm:w-2/5 max-w-lg grid grid-rows-[15%_85%] bg-black">
        <div className="flex flex-col items-end justify-end text-white p-1">
          <span className="text-3xl">{display}</span>
        </div>
        <div className="grid grid-cols-[repeat(4,1fr)] grid-rows-[repeat(5,1fr)] gap-px px-px pb-px">
          {keys.map((item, index) => {
            return (
              <Button
                key={`item-${index}`}
                text={item.name}
                addClass={item.className}
                handleClick={() => handleClick(item.name)}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

function Button({ text, addClass, handleClick }) {
  return (
    <button
      className={`flex flex-col items-center justify-center text-white hover:text-black hover:border-[1px] hover:border-granite ${addClass}`}
      onClick={handleClick}>
      <span className="">{text}</span>
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  addClass: PropTypes.string,
  handleClick: PropTypes.func,
}
