import React from 'react'
import './Footer.css'

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="28" fill="#1a237e" stroke="#ffd600" strokeWidth="3"/>
                <path d="M15 38 L30 18 L45 38" stroke="#ffd600" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M20 38 L40 38" stroke="#ffd600" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="30" cy="14" r="4" fill="#ffd600"/>
                <path d="M22 28 L38 28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div>
                <span className="footer-brand-name">Parmatma Ek</span>
                <span className="footer-brand-sub">School Dress</span>
              </div>
            </div>
            <p>Your trusted partner for quality school uniforms. Serving schools and students with pride since 2009.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-btn">f</a>
              <a href="#" aria-label="Instagram" className="social-btn">in</a>
              <a href="#" aria-label="WhatsApp" className="social-btn">W</a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => scrollTo('home')}>Home</button></li>
              <li><button onClick={() => scrollTo('products')}>Products</button></li>
              <li><button onClick={() => scrollTo('about')}>About Us</button></li>
              <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Products</h4>
            <ul>
              <li><span>Boys Uniforms</span></li>
              <li><span>Girls Uniforms</span></li>
              <li><span>Sports Wear</span></li>
              <li><span>Winter Collection</span></li>
              <li><span>Bulk Orders</span></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Info</h4>
            <p>📍 Main Market, School Dress Bazaar, Your City</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ info@parmatmaschoolwear.com</p>
            <p>⏰ Mon-Sat: 9AM - 7PM</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Parmatma Ek School Dress. All rights reserved.</p>
          <p>Made with ❤️ for students</p>
        </div>
      </div>
    </footer>
  )
}
