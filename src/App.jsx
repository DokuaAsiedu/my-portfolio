import { Route, Routes } from "react-router-dom"
import "@/App.css"
import Home from "@/pages/home"

function App() {
  return (
    <Routes>
      <Route path="/my-portfolio" element={<Home />}></Route>
    </Routes>
  )
}

export default App
