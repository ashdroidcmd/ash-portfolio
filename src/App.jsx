import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Project';
import ContactMe from './components/ContactMe';
import { Analytics } from "@vercel/analytics/react"
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}

export default App
