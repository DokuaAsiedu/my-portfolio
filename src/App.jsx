import { Route, Routes } from "react-router-dom"
import "@/App.css"
import Home from "@/pages/home"
import { RandQuoteGen } from "@/pages/rand-quote-gen"
import { MarkdownPreviewer } from "./pages/markdown-previewer"
import { DrumMachine } from "./pages/drum-machine"
import { Calculator } from "./pages/calculator"
import { Clock } from "./pages/break-session-clock"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/random-quote-generator" element={<RandQuoteGen />}></Route>
      <Route path="/markdown-previewer" element={<MarkdownPreviewer />}></Route>
      <Route path="/drum-machine" element={<DrumMachine />}></Route>
      <Route path="/calculator" element={<Calculator />}></Route>
      <Route path="/break-session-clock" element={<Clock />}></Route>
    </Routes>
  )
}

export default App
