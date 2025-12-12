import React, { useState, useEffect } from 'react'
import './About.css'

function About() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getParallaxOffset = () => {
    const aboutSection = document.querySelector('#about')
    if (!aboutSection) return 0

    const rect = aboutSection.getBoundingClientRect()
    const sectionTop = rect.top + scrollY
    const scrollProgress = (scrollY - sectionTop + window.innerHeight) / (rect.height + window.innerHeight)
    
    return scrollProgress
  }

  const parallaxProgress = getParallaxOffset()

  return (
    <section id="about" className="about reveal">
      <div 
        className="about-background"
       
      >
        <img 
          src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzmViLN9jGD5TFd4UJBWCdOhJK3578U2mASV0a7Myw5exUHTaxbE2qYB2Ap0UxO-_MoqT_gfZTOlFITM8p7onEM3t2gDSgMTHqOKStF1GZ17xSGyBJ44l46fR8xstLBxefcumwl65iqfjk=s680-w680-h510-rw" 
          alt="Vietnamese ingredients"
          loading="lazy"
          style={{
            transform: `scale(${1 + parallaxProgress * 0.15})`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div className="about-image-overlay"></div>
      </div>
      <div className="container">
        <div className="about-content">
          <div 
            className="about-text"
            style={{
              transform: `translateX(${-parallaxProgress * 30}px) translateY(${-parallaxProgress * 20}px)`,
              opacity: Math.max(0.3, 1 - parallaxProgress * 0.3),
              transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
            }}
          >
            <h2 
              className="section-title"
              style={{
                transform: `translateY(${-parallaxProgress * 40}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              Our Story
            </h2>
            <p style={{
              transform: `translateY(${-parallaxProgress * 30}px)`,
              transition: 'transform 0.1s ease-out'
            }}>
              Welcome to Viet Subs, where authentic Vietnamese tradition meets modern culinary excellence. 
              Our journey began with a simple passion: to share the incredible flavors of Vietnam's beloved 
              Bánh Mì with our community.
            </p>
            <p style={{
              transform: `translateY(${-parallaxProgress * 20}px)`,
              transition: 'transform 0.1s ease-out'
            }}>
              Every sandwich is crafted with care using fresh, high-quality ingredients and time-honored 
              recipes passed down through generations. From our perfectly crispy baguettes to our house-made 
              pickled vegetables and signature sauces, each element is prepared daily with love and attention 
              to detail.
            </p>
            <p style={{
              transform: `translateY(${-parallaxProgress * 10}px)`,
              transition: 'transform 0.1s ease-out'
            }}>
              Whether you're a Bánh Mì enthusiast or trying it for the first time, we invite you to 
              experience the perfect balance of savory, sweet, spicy, and fresh that makes Vietnamese 
              cuisine so special.
            </p>
          </div>
          <div className="about-features">
            <div 
              className="feature reveal"
              style={{
                transform: `translateY(${parallaxProgress * 60}px) rotate(${parallaxProgress * 5}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div 
                className="feature-icon"
                style={{
                  transform: `scale(${1 + parallaxProgress * 0.3}) rotate(${-parallaxProgress * 10}deg)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                🥖
              </div>
              <h3>Fresh Daily</h3>
              <p>Baguettes baked fresh every morning</p>
            </div>
            <div 
              className="feature reveal" 
              style={{ 
                animationDelay: '0.2s',
                transform: `translateY(${parallaxProgress * 80}px) rotate(${-parallaxProgress * 3}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div 
                className="feature-icon"
                style={{
                  transform: `scale(${1 + parallaxProgress * 0.4}) rotate(${parallaxProgress * 15}deg)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                🌿
              </div>
              <h3>Authentic</h3>
              <p>Traditional Vietnamese recipes</p>
            </div>
            <div 
              className="feature reveal" 
              style={{ 
                animationDelay: '0.4s',
                transform: `translateY(${parallaxProgress * 70}px) rotate(${parallaxProgress * 4}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div 
                className="feature-icon"
                style={{
                  transform: `scale(${1 + parallaxProgress * 0.5}) rotate(${-parallaxProgress * 12}deg)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                ❤️
              </div>
              <h3>Quality</h3>
              <p>Premium ingredients, made with care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
