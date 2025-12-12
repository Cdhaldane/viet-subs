import React from 'react'
import FloatingParticles from './FloatingParticles'
import './Hero.css'

function Hero() {
  const [offsetY, setOffsetY] = React.useState(0)
  const [isMobile, setIsMobile] = React.useState(false)

  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
  }

  React.useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Reduce parallax intensity on mobile for better performance
  const parallaxMultiplier = isMobile ? 0.15 : 0.5
  const titleMultiplier = isMobile ? 0.1 : 0.28
  const contentMultiplier = isMobile ? 0.08 : 0.25

  return (
    <section id="home" className="hero">
      <FloatingParticles />
      <div 
        className="hero-background"
        style={{ 
          transform: `translateY(${offsetY * parallaxMultiplier}px)`,
          transition: 'transform 0.1s ease-out',
          willChange: 'transform'
        }}
      >
        <img 
          src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw-vxprbRcRulnvQ10NPFUZNzANMa11_x8StgjkW_hn-HDePw5AYS4_p5tVJNayeUlKW3PdLoI_55FkWeqdGlRpEFgKai48CmL4cESygiV6UUqS-EQmFzWXTfNBtENUNia4E38bOBZdGpY=s680-w680-h510-rw" 
          alt="Vietnamese Bánh Mì"
          className="hero-image"
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h2 
          className="hero-title neon-text" 
          style={{ 
            transform: `translateY(${offsetY * titleMultiplier}px)`,
            transition: 'transform 0.1s ease-out',
            willChange: 'transform'
          }}
        >
          Authentic Vietnamese Bánh Mì
        </h2>
        <p 
          className="hero-subtitle" 
          style={{ 
            transform: `translateY(${offsetY * contentMultiplier}px)`,
            transition: 'transform 0.1s ease-out',
            willChange: 'transform'
          }}
        >
          Fresh, Flavorful, and Made with Love
        </p>
        <div 
          className="hero-buttons" 
          style={{ 
            transform: `translateY(${offsetY * contentMultiplier}px)`,
            transition: 'transform 0.1s ease-out',
            willChange: 'transform'
          }}
        >
          <a href="#menu" className="btn btn-primary">View Menu</a>
          <a href="#contact" className="btn btn-secondary">Order Now</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
