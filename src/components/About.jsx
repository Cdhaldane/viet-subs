import React from 'react'
import './About.css'

function About() {
  return (
    <section id="about" className="about reveal">
      <div className="about-background">
        <img 
          src="https://images.unsplash.com/photo-1559301504-86a3155b7c99?w=1920&q=80" 
          alt="Vietnamese ingredients"
          loading="lazy"
        />
        <div className="about-image-overlay"></div>
      </div>
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Our Story</h2>
            <p>
              Welcome to Viet Subs, where authentic Vietnamese tradition meets modern culinary excellence. 
              Our journey began with a simple passion: to share the incredible flavors of Vietnam's beloved 
              Bánh Mì with our community.
            </p>
            <p>
              Every sandwich is crafted with care using fresh, high-quality ingredients and time-honored 
              recipes passed down through generations. From our perfectly crispy baguettes to our house-made 
              pickled vegetables and signature sauces, each element is prepared daily with love and attention 
              to detail.
            </p>
            <p>
              Whether you're a Bánh Mì enthusiast or trying it for the first time, we invite you to 
              experience the perfect balance of savory, sweet, spicy, and fresh that makes Vietnamese 
              cuisine so special.
            </p>
          </div>
          <div className="about-features">
            <div className="feature reveal">
              <div className="feature-icon">🥖</div>
              <h3>Fresh Daily</h3>
              <p>Baguettes baked fresh every morning</p>
            </div>
            <div className="feature reveal" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon">🌿</div>
              <h3>Authentic</h3>
              <p>Traditional Vietnamese recipes</p>
            </div>
            <div className="feature reveal" style={{ animationDelay: '0.4s' }}>
              <div className="feature-icon">❤️</div>
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
