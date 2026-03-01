import { useEffect, useRef } from 'react'
import Projects from "./components/Projects";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const onMove = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }

    const isInteractive = (el) => el && el.closest('a, button, nav')

    const onOver = (e) => {
      if (isInteractive(e.target)) cursor.classList.add('cursor--filled')
    }

    const onOut = (e) => {
      if (!isInteractive(e.relatedTarget)) cursor.classList.remove('cursor--filled')
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef}>
        <span className="cursor__arrow" aria-hidden="true" />
      </div>
      <div className="App">
        <Header/>
        <Hero />
        <About/>
        <Skills/>
        <Projects />
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;