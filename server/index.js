const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// In-memory store for enquiries (replace with DB in production)
const enquiries = []

// Products data
const products = [
  { id: 1, name: 'Boys Classic Shirt & Trouser', category: 'Boys', desc: 'Crisp white shirt with navy blue trouser.' },
  { id: 2, name: 'Girls Pinafore Dress Set', category: 'Girls', desc: 'Elegant navy pinafore with white blouse.' },
  { id: 3, name: 'Sports Track Suit', category: 'Sports', desc: 'Lightweight and breathable sportswear.' },
  { id: 4, name: 'Winter Blazer & Sweater', category: 'Winter', desc: 'Warm woolen blazer with school emblem.' },
  { id: 5, name: 'Boys Summer Uniform Set', category: 'Boys', desc: 'Light cotton fabric for hot summers.' },
  { id: 6, name: 'Girls Salwar Kameez Set', category: 'Girls', desc: 'Traditional style with modern comfort.' },
]

// GET all products
app.get('/api/products', (req, res) => {
  const { category } = req.query
  if (category && category !== 'All') {
    return res.json(products.filter(p => p.category === category))
  }
  res.json(products)
})

// POST enquiry
app.post('/api/enquiry', (req, res) => {
  const { name, phone, school, message } = req.body
  if (!name || !phone || !message) {
    return res.status(400).json({ error: 'Name, phone and message are required.' })
  }
  const enquiry = {
    id: enquiries.length + 1,
    name, phone, school, message,
    createdAt: new Date().toISOString()
  }
  enquiries.push(enquiry)
  console.log('New enquiry:', enquiry)
  res.status(201).json({ success: true, message: 'Enquiry received!', id: enquiry.id })
})

// GET all enquiries (admin)
app.get('/api/enquiries', (req, res) => {
  res.json(enquiries)
})

app.get('/', (req, res) => {
  res.json({ message: 'Parmatma Ek School Dress API running!' })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
