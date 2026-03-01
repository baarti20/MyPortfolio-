import { useState } from 'react'

export default function Header({ toggleTheme, theme }) {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <span className="logo">AARTI BHANUSHALI</span>
      <button
        className={`nav-toggle ${open ? 'active' : ''}`}
        aria-label="Toggle navigation"
        onClick={() => setOpen(o => !o)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={open ? 'open' : ''}>
        <a href="#hero" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        <button className="theme-btn" onClick={toggleTheme}>
          {theme ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  )
}
