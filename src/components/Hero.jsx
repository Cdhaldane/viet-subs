import React from 'react'
import FloatingParticles from './FloatingParticles'
import './Hero.css'

function Hero() {
  const [offsetY, setOffsetY] = React.useState(0)

  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="hero">
      <FloatingParticles />
      <div 
        className="hero-background"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <img 
          src="https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=800&q=80" 
          alt="Vietnamese Bánh Mì"
          className="hero-image"
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h2 className="hero-title neon-text" style={{ transform: `translateY(${offsetY * 0.2}px)` }}>
          Authentic Vietnamese Bánh Mì
        </h2>
        <p className="hero-subtitle" style={{ transform: `translateY(${offsetY * 0.15}px)` }}>
          Fresh, Flavorful, and Made with Love
        </p>
        <div className="hero-buttons" style={{ transform: `translateY(${offsetY * 0.1}px)` }}>
          <a href="#menu" className="btn btn-primary">View Menu</a>
          <a href="#contact" className="btn btn-secondary">Order Now</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
