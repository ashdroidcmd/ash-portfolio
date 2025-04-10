import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Project';
import ContactMe from './components/ContactMe';
import './App.css';

function App() {
  return (
    <>
    <main className=''>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <ContactMe />
    </main>
    </>
  )
}

export default App
