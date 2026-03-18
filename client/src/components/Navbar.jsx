import React, { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo" onClick={() => scrollTo('home')}>
          <div className="logo-icon">
            <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="28" fill="#1a237e" stroke="#ffd600" strokeWidth="3"/>
              <path d="M15 38 L30 18 L45 38" stroke="#ffd600" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M20 38 L40 38" stroke="#ffd600" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="30" cy="14" r="4" fill="#ffd600"/>
              <path d="M22 28 L38 28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-main">Parmatma Ek</span>
            <span className="logo-sub">School Dress</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          <li><button onClick={() => scrollTo('home')}>Home</button></li>
          <li><button onClick={() => scrollTo('products')}>Products</button></li>
          <li><button onClick={() => scrollTo('about')}>About Us</button></li>
          <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
        </ul>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button onClick={() => scrollTo('home')}>Home</button>
        <button onClick={() => scrollTo('products')}>Products</button>
        <button onClick={() => scrollTo('about')}>About Us</button>
        <button onClick={() => scrollTo('contact')}>Contact</button>
      </div>
    </nav>
  )
}
