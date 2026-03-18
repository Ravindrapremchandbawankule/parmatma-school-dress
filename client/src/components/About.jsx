import React from 'react'
import './About.css'

const features = [
  { icon: '🏆', title: 'Premium Quality', desc: 'Only the finest fabrics used in every uniform we produce.' },
  { icon: '📐', title: 'Custom Sizing', desc: 'Available in all sizes from small kids to senior students.' },
  { icon: '🎨', title: 'Custom Colors', desc: 'Match your school colors exactly with our custom dyeing.' },
  { icon: '🚚', title: 'Bulk Delivery', desc: 'Fast and reliable bulk order delivery across the region.' },
  { icon: '💰', title: 'Best Prices', desc: 'Competitive pricing with no compromise on quality.' },
  { icon: '🔄', title: 'Easy Returns', desc: 'Hassle-free return and exchange policy for all orders.' },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-card-main">
              <div className="about-logo-big">
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="60" cy="60" r="56" fill="#1a237e" stroke="#ffd600" strokeWidth="4"/>
                  <path d="M30 76 L60 36 L90 76" stroke="#ffd600" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M38 76 L82 76" stroke="#ffd600" strokeWidth="5" strokeLinecap="round"/>
                  <circle cx="60" cy="28" r="8" fill="#ffd600"/>
                  <path d="M44 56 L76 56" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M48 66 L72 66" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                </svg>
              </div>
              <h3>Parmatma Ek School Dress</h3>
              <p>Your trusted uniform partner since 2009</p>
            </div>
            <div className="about-stat-cards">
              <div className="mini-stat">
                <span>500+</span>
                <p>Schools</p>
              </div>
              <div className="mini-stat">
                <span>15+</span>
                <p>Years</p>
              </div>
              <div className="mini-stat">
                <span>10K+</span>
                <p>Students</p>
              </div>
            </div>
          </div>

          <div className="about-content">
            <p className="section-label">Who We Are</p>
            <h2 className="about-title">Dressing Students <span>With Pride</span></h2>
            <p className="about-desc">
              Parmatma Ek School Dress has been a trusted name in school uniforms for over 15 years.
              We believe every student deserves to wear a uniform that makes them feel confident,
              comfortable, and proud of their school.
            </p>
            <p className="about-desc">
              From government schools to private institutions, we cater to all types of schools
              with customized uniform solutions that meet exact requirements and budgets.
            </p>

            <div className="features-grid">
              {features.map((f, i) => (
                <div className="feature-item" key={i}>
                  <span className="feature-icon">{f.icon}</span>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
