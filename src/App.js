import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./routes/Home"
import About from "./routes/About"
import Careers from "./routes/Careers"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </>
  )
}

export default App
