import { BackToHome } from "@/components"
import { FaArrowDown } from "react-icons/fa"
import { FaArrowUp } from "react-icons/fa6"
import { HiMiniPlayPause } from "react-icons/hi2"
import { RiLoopLeftLine } from "react-icons/ri"
import PropTypes from "prop-types"
import { useEffect, useRef, useState } from "react"

export function Clock() {
  const [period, setPeriod] = useState("Session")
  const [sessionLength, setSessionLength] = useState(25 * 60)
  const [breakLength, setBreakLength] = useState(5 * 60)
  const [timerValue, setTimerValue] = useState(sessionLength)
  const [timerState, setTimerState] = useState(false)
  const timerRef = useRef(null)

  const switchPeriod = () => {
    // setTimerState(false)
    if (period === "Session") {
      setPeriod("Break")
      setTimerValue(breakLength)
    } else {
      setPeriod("Session")
      setTimerValue(sessionLength)
    }
  }

  const increment = (func, currVal) => {
    if (!timerState) {
      func(currVal + 60)
    }
  }

  const decrement = (func, currVal) => {
    if (!timerState) {
      if (currVal - 60 > 0) {
        func(currVal - 60)
      }
    }
  }

  const handleTimer = () => {
    const newTimerState = !timerState
    setTimerState(newTimerState)
    if (newTimerState) {
      timerRef.current = setInterval(() => {
        setTimerValue((prev) => prev - 1)
      }, 1000)
    } else {
      clearInterval(timerRef.current)
    }
  }

  const resetTimer = () => {
    setTimerState(false)
    clearInterval(timerRef.current)
    timerRef.current = null

    if (period === "Session") setTimerValue(sessionLength)
    else setTimerValue(breakLength)
  }

  useEffect(() => {
    if (period === "Session") {
      // setPeriod("Break")
      setTimerValue(sessionLength)
    }
  }, [sessionLength])

  useEffect(() => {
    if (period === "Break") {
      // setPeriod("Break")
      setTimerValue(breakLength)
    }
  }, [breakLength])

  useEffect(() => {
    const newTimer = timerValue
    if (newTimer < 0) {
      clearInterval(timerRef.current)
      switchPeriod()
      timerRef.current = setInterval(() => {
        setTimerValue((prev) => prev - 1)
      }, 1000)
    }
  }, [timerValue])

  // useEffect(() => {
  //   if (timerValue <= 0) {
  //     // setTimerState(false)
  //     const newPeriod = period === "Session" ? "Break" : "Session"
  //     const newTimerValue =
  //       newPeriod === "Session" ? sessionLength : breakLength
  //     if (newPeriod === "Session") {
  //       setPeriod(newPeriod)
  //       setTimerValue(newTimerValue)
  //     } else {
  //       setPeriod(newPeriod)
  //       setTimerValue(newTimerValue)
  //     }
  //     timerRef.current = setInterval(() => {
  //       setTimerValue(newTimerValue - 1)
  //     }, 1000)
  //   }
  // }, [timerValue])

  return (
    <div className="h-full min-h-screen flex flex-col items-center justify-start pt-40 bg-dark-green-blue text-white">
      <BackToHome />
      <div className="w-11/12 sm:w-2/5 max-w-lg flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-5xl">25 + 5 Clock</h1>
        <div className="w-full flex flex-row items-center justify-between">
          <TimerSet
            name="Break Length"
            timeLength={breakLength}
            dec={() => decrement(setBreakLength, breakLength)}
            inc={() => increment(setBreakLength, breakLength)}
          />
          <TimerSet
            name="Session Length"
            timeLength={sessionLength}
            dec={() => decrement(setSessionLength, sessionLength)}
            inc={() => increment(setSessionLength, sessionLength)}
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-2 py-6 px-12 border-4 border-gable-green rounded-[3rem]">
          <p className="text-2xl">{period}</p>
          <p
            className={`text-6xl ${timerValue < 5 * 60 ? "text-red-700" : ""}`}>
            {(~~(timerValue / 60)).toString().padStart(2, "0")}:
            {(timerValue % 60).toString().padStart(2, "0")}
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 text-2xl">
          <button className="p-1" onClick={handleTimer}>
            <HiMiniPlayPause />
          </button>
          <button className="p-1" onClick={resetTimer}>
            <RiLoopLeftLine />
          </button>
        </div>
      </div>
    </div>
  )
}

function TimerSet({ name, timeLength, inc, dec }) {
  return (
    <div className="text-2xl">
      <p>{name}</p>
      <div className="flex flex-row items-center justify-center gap-4">
        <button onClick={dec} className="p-4">
          <FaArrowDown />
        </button>
        <span>{~~(timeLength / 60)}</span>
        <button onClick={inc} className="p-4">
          <FaArrowUp />
        </button>
      </div>
    </div>
  )
}

TimerSet.propTypes = {
  name: PropTypes.string,
  timeLength: PropTypes.number,
  inc: PropTypes.func,
  dec: PropTypes.func,
}
