import React from 'react'
import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-shape shape1"></div>
        <div className="hero-shape shape2"></div>
        <div className="hero-shape shape3"></div>
      </div>

      <div className="hero-content container">
        <div className="hero-text">
          <div className="hero-badge">🎓 Trusted School Uniform Brand</div>
          <h1 className="hero-title">
            Quality Uniforms <br />
            <span className="highlight">For Every School</span>
          </h1>
          <p className="hero-desc">
            Premium quality school uniforms crafted with care. Durable, comfortable,
            and perfectly designed for students to look their best every day.
          </p>
          <div className="hero-btns">
            <button className="btn-accent" onClick={() => scrollTo('products')}>
              View Collection
            </button>
            <button className="btn-outline" onClick={() => scrollTo('contact')}>
              Contact Us
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">500+</span>
              <span className="stat-label">Schools Served</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-num">10K+</span>
              <span className="stat-label">Happy Students</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-num">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card main-card">
            <div className="uniform-display">
              <svg viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="uniform-svg">
                {/* Shirt */}
                <path d="M60 80 L30 110 L50 120 L50 220 L150 220 L150 120 L170 110 L140 80 L120 70 L100 85 L80 70 Z" fill="#1a237e" stroke="#3949ab" strokeWidth="2"/>
                {/* Collar */}
                <path d="M80 70 L100 95 L120 70 L110 65 L100 75 L90 65 Z" fill="white"/>
                {/* Tie */}
                <path d="M97 90 L103 90 L106 140 L100 148 L94 140 Z" fill="#ffd600"/>
                <path d="M97 90 L103 90 L101 100 L99 100 Z" fill="#f9a825"/>
                {/* Pocket */}
                <rect x="55" y="130" width="30" height="25" rx="3" fill="#3949ab" stroke="#5c6bc0" strokeWidth="1"/>
                {/* Pants */}
                <path d="M50 220 L50 270 L95 270 L100 240 L105 270 L150 270 L150 220 Z" fill="#37474f"/>
                {/* Buttons */}
                <circle cx="100" cy="110" r="3" fill="white"/>
                <circle cx="100" cy="125" r="3" fill="white"/>
                <circle cx="100" cy="140" r="3" fill="white"/>
                {/* Sleeves detail */}
                <path d="M30 110 L50 120" stroke="#3949ab" strokeWidth="3"/>
                <path d="M150 120 L170 110" stroke="#3949ab" strokeWidth="3"/>
              </svg>
            </div>
            <div className="card-label">School Uniform</div>
          </div>
          <div className="floating-badge badge1">✨ Premium Quality</div>
          <div className="floating-badge badge2">🏫 All Schools</div>
          <div className="floating-badge badge3">📦 Bulk Orders</div>
        </div>
      </div>

      <div className="hero-wave">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
