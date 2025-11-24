import React, { useState, useEffect } from 'react'
import './Testimonials.css'

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      text: 'The best bánh mì I\'ve ever had! The ingredients are always fresh and the flavors are incredible. I come here at least twice a week!',
      image: 'https://i.pravatar.cc/150?img=1'
    },
    {
      id: 2,
      name: 'Mike Chen',
      rating: 5,
      text: 'Authentic Vietnamese flavors that remind me of my grandmother\'s cooking. The pork bánh mì is perfection!',
      image: 'https://i.pravatar.cc/150?img=13'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'As a vegetarian, I love that they have amazing tofu options. The pickled vegetables are the perfect balance of tangy and sweet!',
      image: 'https://i.pravatar.cc/150?img=5'
    },
    {
      id: 4,
      name: 'David Park',
      rating: 5,
      text: 'Outstanding quality and service. The bread is always perfectly crispy on the outside and soft inside. Highly recommended!',
      image: 'https://i.pravatar.cc/150?img=12'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section className="testimonials reveal">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">Real reviews from real people</p>

        <div className="testimonials-slider">
          <div className="testimonial-card" key={testimonials[currentIndex].id}>
            <div className="stars">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
            <div className="testimonial-author">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                className="author-image"
              />
              <div className="author-info">
                <h4>{testimonials[currentIndex].name}</h4>
                <p>Verified Customer</p>
              </div>
            </div>
          </div>

          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
