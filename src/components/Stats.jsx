import React, { useState, useEffect } from 'react'
import './Stats.css'

function Stats() {
  const [counts, setCounts] = useState({
    years: 0,
    customers: 0,
    sandwiches: 0,
    reviews: 0
  })

  const [hasAnimated, setHasAnimated] = useState(false)

  const finalValues = {
    years: 8,
    customers: 15000,
    sandwiches: 50000,
    reviews: 4.9
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animateCounters()
        }
      },
      { threshold: 0.5 }
    )

    const element = document.querySelector('.stats')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCounters = () => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounts({
        years: Math.floor(finalValues.years * progress),
        customers: Math.floor(finalValues.customers * progress),
        sandwiches: Math.floor(finalValues.sandwiches * progress),
        reviews: (finalValues.reviews * progress).toFixed(1)
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounts(finalValues)
      }
    }, interval)
  }

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item reveal">
            <div className="stat-number">{counts.years}+</div>
            <div className="stat-label">Years Serving</div>
          </div>
          <div className="stat-item reveal">
            <div className="stat-number">{counts.customers.toLocaleString()}+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-item reveal">
            <div className="stat-number">{counts.sandwiches.toLocaleString()}+</div>
            <div className="stat-label">Bánh Mì Made</div>
          </div>
          <div className="stat-item reveal">
            <div className="stat-number">{counts.reviews}★</div>
            <div className="stat-label">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
