import React, { useState } from 'react'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setIsMenuOpen(false)

    const target = document.querySelector(targetId)
    if (target) {
      const header = document.querySelector('.header')
      const headerHeight = header ? header.offsetHeight : 80
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>ROSE'S VÍỆT SUBS</h1>
          </div>
          
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
            <a href="#menu" onClick={(e) => handleNavClick(e, '#menu')}>Menu</a>
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
