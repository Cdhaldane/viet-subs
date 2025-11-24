import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h2 className="hero-title">Authentic Vietnamese Bánh Mì</h2>
        <p className="hero-subtitle">Fresh, Flavorful, and Made with Love</p>
        <div className="hero-buttons">
          <a href="#menu" className="btn btn-primary">View Menu</a>
          <a href="#contact" className="btn btn-secondary">Order Now</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
