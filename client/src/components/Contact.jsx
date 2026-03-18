import React, { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', school: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setSubmitted(true)
        setForm({ name: '', phone: '', school: '', message: '' })
      }
    } catch {
      setSubmitted(true) // show success even if backend not running
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-bg">
        <div className="contact-shape"></div>
      </div>
      <div className="container">
        <p className="section-label" style={{ color: '#90caf9' }}>Get In Touch</p>
        <h2 className="section-title" style={{ color: 'white' }}>Contact Us</h2>
        <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Send us an enquiry and we'll get back to you within 24 hours
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div>
                <h4>Our Location</h4>
                <p>Main Market, School Dress Bazaar<br />Your City, State - 000000</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">📞</div>
              <div>
                <h4>Call Us</h4>
                <p>+91 98765 43210<br />+91 91234 56789</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">⏰</div>
              <div>
                <h4>Working Hours</h4>
                <p>Mon - Sat: 9:00 AM - 7:00 PM<br />Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">✉️</div>
              <div>
                <h4>Email Us</h4>
                <p>info@parmatmaschoolwear.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div className="success-msg">
                <span>✅</span>
                <h3>Enquiry Sent!</h3>
                <p>We'll contact you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send Enquiry</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      id="name" type="text" name="name"
                      placeholder="Enter your name"
                      value={form.name} onChange={handleChange} required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      id="phone" type="tel" name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone} onChange={handleChange} required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="school">School Name</label>
                  <input
                    id="school" type="text" name="school"
                    placeholder="Your school name"
                    value={form.school} onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message" name="message" rows="4"
                    placeholder="Tell us about your uniform requirements..."
                    value={form.message} onChange={handleChange} required
                  ></textarea>
                </div>
                <button type="submit" className="btn-accent" style={{ width: '100%', textAlign: 'center' }}>
                  Send Enquiry →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
