import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Project';
import ContactMe from './components/ContactMe';
import './App.css';

function App() {
  // Contact Us Animation
document.addEventListener("DOMContentLoaded", () => {
  const fadeIns = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show");
          }
      });
  }, { threshold: 0.1 });

  fadeIns.forEach(element => observer.observe(element));
});

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
