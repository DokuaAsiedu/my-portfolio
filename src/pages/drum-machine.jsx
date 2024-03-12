import { BackToHome } from "@/components"
import { drumData, kitName } from "@/utils/drum-machine/drum-data"
import PropTypes from "prop-types"
import { forwardRef, useMemo, useRef, useState } from "react"

export function DrumMachine() {
  const [power, setPower] = useState(true)
  const [bank, setBank] = useState(false)
  const [displayText, setDisplayText] = useState("")
  const [volume, setVolume] = useState(50)
  const audioRef = useRef([])
  const volumeRef = useRef(null)

  const handleDisplay = (text) => {
    setDisplayText(text)
  }

  const handlePower = () => {
    const newPower = !power
    setPower(newPower)
    handleDisplay("")
    if (newPower) {
      volumeRef.current.disabled = false
    } else {
      volumeRef.current.disabled = true
    }
  }

  const kit = useMemo(() => {
    return !bank ? 0 : 1
  }, [bank])

  const handleBank = () => {
    if (power) {
      const newBank = !bank
      const newKit = !newBank ? 0 : 1
      setBank(newBank)
      setDisplayText(kitName[newKit])
    }
  }

  const handleVolume = (event) => {
    const vol = event.target.value
    setVolume(vol)
    handleDisplay(`Volume: ${vol}`)
  }

  const assignRef = (el, index) => {
    audioRef.current[index] = el
  }

  const playAudio = (index) => {
    // console.log("playing")
    // console.log(index, audioRef.current[index])
    const audio = audioRef.current[index]
    if (power) {
      handleDisplay(drumData[index].audioName[kit])
      // console.log(drumData[index].audioName)
      audio.volume = volume / 100
      audio.play()
    }
  }

  return (
    <div className="h-full min-h-screen flex flex-col items-center justify-center relative bg-[#8D8D8D]">
      <BackToHome />
      <div className="w-11/12 sm:w-3/5 max-w-[1000px] h-40 sm:h-80 grid grid-cols-[60%_40%] bg-[#B3B3B3] border-[4px] border-[#FFA501] p-4">
        <div className="h-full grid grid-rows-[1fr_1fr_1fr] grid-cols-[1fr_1fr_1fr] gap-4">
          {drumData.map((item, index) => {
            return (
              <DrumPad
                ref={(el) => {
                  assignRef(el, index)
                }}
                key={`item-${index}`}
                audioSrc={item.audioSrc[kit]}
                letter={item.letter}
                handlePlay={() => playAudio(index)}
              />
            )
          })}
        </div>
        <div className="h-full flex flex-col items-center justify-between py-4">
          <Toggle name="Power" handleClick={handlePower} toggle={power} />
          <Display displayText={displayText} />
          <Volume volume={volume} handleChange={handleVolume} ref={volumeRef} />
          <Toggle name="Bank" handleClick={handleBank} toggle={bank} />
        </div>
      </div>
    </div>
  )
}

const DrumPad = forwardRef(({ audioSrc, letter, handlePlay }, ref) => {
  return (
    <button
      className="w-full h-full flex flex-col items-center justify-center bg-[#8D8D8D] rounded-md cursor-default shadow-[1px_2px_5px_0px_#000000] active:shadow-[1px_1px_3px_1px_#000000]"
      onClick={handlePlay}>
      <audio src={audioSrc} ref={ref}></audio>
      <span>{letter}</span>
    </button>
  )
})

function Toggle({ name, handleClick, toggle }) {
  return (
    <div
      className="flex flex-col items-center justify-start gap-1"
      onClick={handleClick}>
      <p>{name}</p>
      <div className="w-12 h-6 bg-black p-1">
        <div
          className={`w-1/2 h-full bg-[#2200FF] ${toggle ? "translate-x-full" : ""}`}></div>
      </div>
    </div>
  )
}

function Display({ displayText }) {
  return (
    <div className="w-4/5 flex flex-col items-center justify-center py-2 px-4 bg-[#8D8D8D]">
      <p>{displayText ? displayText : <span>&nbsp;</span>}</p>
    </div>
  )
}

const Volume = forwardRef(({ volume, handleChange }, ref) => {
  return (
    <div>
      <input
        type="range"
        min="0"
        max="max"
        value={volume}
        onChange={handleChange}
        ref={ref}
      />
    </div>
  )
})

DrumPad.propTypes = {
  audioSrc: PropTypes.string,
  letter: PropTypes.string,
  handlePlay: PropTypes.func,
}

Toggle.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
  toggle: PropTypes.bool,
}

Display.propTypes = {
  displayText: PropTypes.string,
}
