import { useState } from 'react'
import Navbar from "./components/Navbar"
import HeroSection from './components/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  )
}

export default App
