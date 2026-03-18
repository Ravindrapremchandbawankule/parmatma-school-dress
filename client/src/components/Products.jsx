import React, { useState } from 'react'
import './Products.css'

const categories = ['All', 'Boys', 'Girls', 'Sports', 'Winter']

const products = [
  {
    id: 1, category: 'Boys',
    name: 'Boys Classic Shirt & Trouser',
    desc: 'Crisp white shirt with navy blue trouser. Durable fabric, easy to wash.',
    color: '#1a237e', accent: '#ffd600',
    tag: 'Bestseller'
  },
  {
    id: 2, category: 'Girls',
    name: 'Girls Pinafore Dress Set',
    desc: 'Elegant navy pinafore with white blouse. Comfortable fit for all-day wear.',
    color: '#4a148c', accent: '#ce93d8',
    tag: 'Popular'
  },
  {
    id: 3, category: 'Sports',
    name: 'Sports Track Suit',
    desc: 'Lightweight and breathable. Perfect for PT classes and sports activities.',
    color: '#1b5e20', accent: '#a5d6a7',
    tag: 'New'
  },
  {
    id: 4, category: 'Winter',
    name: 'Winter Blazer & Sweater',
    desc: 'Warm woolen blazer with school emblem. Keeps students cozy in winters.',
    color: '#37474f', accent: '#ffd600',
    tag: 'Winter Special'
  },
  {
    id: 5, category: 'Boys',
    name: 'Boys Summer Uniform Set',
    desc: 'Light cotton fabric for hot summers. Includes shirt, trouser and tie.',
    color: '#0277bd', accent: '#81d4fa',
    tag: 'Summer'
  },
  {
    id: 6, category: 'Girls',
    name: 'Girls Salwar Kameez Set',
    desc: 'Traditional style with modern comfort. Available in school colors.',
    color: '#880e4f', accent: '#f48fb1',
    tag: 'Traditional'
  },
]

function UniformIcon({ color, accent }) {
  return (
    <svg viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="product-svg">
      <path d="M45 60 L20 85 L38 93 L38 170 L122 170 L122 93 L140 85 L115 60 L95 52 L80 64 L65 52 Z" fill={color} stroke={accent} strokeWidth="2"/>
      <path d="M65 52 L80 72 L95 52 L87 48 L80 58 L73 48 Z" fill="white"/>
      <path d="M77 68 L83 68 L86 110 L80 116 L74 110 Z" fill={accent}/>
      <rect x="42" y="100" width="24" height="20" rx="3" fill={color} stroke={accent} strokeWidth="1.5" opacity="0.8"/>
      <path d="M38 170 L38 195 L75 195 L80 175 L85 195 L122 195 L122 170 Z" fill={color} opacity="0.85"/>
      <circle cx="80" cy="84" r="2.5" fill="white"/>
      <circle cx="80" cy="96" r="2.5" fill="white"/>
    </svg>
  )
}

export default function Products() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? products : products.filter(p => p.category === active)

  return (
    <section className="products" id="products">
      <div className="container">
        <p className="section-label">Our Collection</p>
        <h2 className="section-title">School Uniform Range</h2>
        <p className="section-subtitle">High-quality uniforms for every school requirement</p>

        <div className="category-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`cat-tab ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filtered.map(product => (
            <div className="product-card" key={product.id}>
              {product.tag && <span className="product-tag">{product.tag}</span>}
              <div className="product-img" style={{ background: `linear-gradient(135deg, ${product.color}22, ${product.accent}22)` }}>
                <UniformIcon color={product.color} accent={product.accent} />
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.desc}</p>
                <div className="product-footer">
                  <div className="color-dots">
                    <span className="dot" style={{ background: product.color }}></span>
                    <span className="dot" style={{ background: product.accent }}></span>
                    <span className="dot" style={{ background: '#fff', border: '2px solid #ddd' }}></span>
                  </div>
                  <button className="enquire-btn">Enquire Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
