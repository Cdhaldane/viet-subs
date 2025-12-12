import React, { useState, useEffect } from 'react'
import './Testimonials.css'

const PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID
const CACHE_KEY = 'google_reviews_cache'
const CACHE_DURATION = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

function Testimonials() {
  const [testimonials, setTestimonials] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [scrollY, setScrollY] = useState(0)

  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fetch reviews from Google Places API using Google Maps JavaScript library
  useEffect(() => {
    const fetchReviews = () => {
      // Check if we have cached reviews
      const cachedData = localStorage.getItem(CACHE_KEY)
      if (cachedData) {
        try {
          const { reviews, timestamp } = JSON.parse(cachedData)
          const isExpired = Date.now() - timestamp > CACHE_DURATION

          if (!isExpired && reviews.length > 0) {
            setTestimonials(reviews)
            setLoading(false)
            return
          }
        } catch (e) {
          console.error('Error reading cache:', e)
          localStorage.removeItem(CACHE_KEY)
        }
      }

      // Wait for Google Maps API to load
      const checkGoogleMaps = setInterval(() => {
        if (window.google && window.google.maps && window.google.maps.places && window.google.maps.places.Place) {
          clearInterval(checkGoogleMaps)
          
          try {
            // Use the new Place class (recommended as of March 2025)
            const place = new window.google.maps.places.Place({
              id: PLACE_ID,
            })
            
            // Fetch place details with reviews using the new API
            place.fetchFields({
              fields: ['reviews']
            }).then((response) => {
              const placeData = response.place
              
              if (placeData.reviews && placeData.reviews.length > 0) {
                const formattedReviews = placeData.reviews.map((review, index) => ({
                  id: index + 1,
                  name: review.authorAttribution?.displayName || review.author_name || 'Anonymous',
                  rating: review.rating,
                  text: review.text || review.textContent || '',
                  image: review.authorAttribution?.photoURI || review.profile_photo_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(review.authorAttribution?.displayName || 'User')}&background=random`
                }))
                
                // Cache the reviews in localStorage
                localStorage.setItem(CACHE_KEY, JSON.stringify({
                  reviews: formattedReviews,
                  timestamp: Date.now()
                }))
                
                setTestimonials(formattedReviews)
              } else {
                console.log('No reviews found')
                setTestimonials([])
              }
              setLoading(false)
            }).catch((error) => {
              console.error('Error fetching place details:', error)
              setTestimonials([])
              setLoading(false)
            })
          } catch (err) {
            console.error('Error setting up Places service:', err)
            setError(err.message)
            setTestimonials([])
            setLoading(false)
          }
        }
      }, 100)
    }

    fetchReviews()
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    if (testimonials.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)

      return () => clearInterval(timer)
    }
  }, [testimonials.length, currentIndex])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const getParallaxOffset = () => {
    const testimonialsSection = document.querySelector('.testimonials')
    if (!testimonialsSection) return 0

    const rect = testimonialsSection.getBoundingClientRect()
    const sectionTop = rect.top + scrollY
    const scrollProgress = (scrollY - sectionTop + window.innerHeight) / (rect.height + window.innerHeight)
    
    return scrollProgress
  }

  const parallaxProgress = getParallaxOffset()

  if (loading) {
    return (
      <section className="testimonials reveal">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Loading reviews...</p>
        </div>
      </section>
    )
  }

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section className="testimonials reveal">
      <div className="container">
        <h2 
          className="section-title"
          style={{
            transform: `translateY(${parallaxProgress * 20}px) scale(${1 - parallaxProgress * 0.1})`,
            transition: 'transform 0.1s ease-out',
            marginBottom: '0rem'
          }}
        >
          What Our Customers Say
        </h2>
        <p 
          className="section-subtitle"
          style={{
            transform: `translateY(${parallaxProgress * 30}px)`,
            opacity: Math.max(0.5, 1 - parallaxProgress * 0.4),
            transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
            marginBottom: '6rem'
          }}
        >
          Real reviews from Google
        </p>

        <div 
          className="testimonials-slider"
          style={{
            transform: `translateY(${-parallaxProgress * 70}px)`,
            transition: 'transform 0.1s ease-out',
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}
        >
          <div 
            className="testimonial-card" 
            key={testimonials[currentIndex].id}
            style={{
              transform: `scale(${1 + parallaxProgress * 0.05})`,
              transition: 'transform 0.3s ease-out',
              transformStyle: 'preserve-3d'
            }}
          >
            <div 
              className="stars"
              style={{
                transform: `translateY(${-parallaxProgress * 20}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              {[...Array(testimonials[currentIndex]?.rating)].map((_, i) => (
                <span 
                  key={i} 
                  className="star"
                  style={{
                    display: 'inline-block',
                    transform: `scale(${1 + parallaxProgress * 0.3})`,
                    transition: 'transform 0.1s ease-out'
                  }}
                >
                  ★
                </span>
              ))}
            </div>
            <p 
              className="testimonial-text"
              style={{
                transform: `translateY(${-parallaxProgress * 15}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              "{testimonials[currentIndex].text}"
            </p>
            <div 
              className="testimonial-author"
              style={{
                transform: `translateY(${-parallaxProgress * 25}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                className="author-image"
                style={{
                  transform: `scale(${1 + parallaxProgress * 0.2})`,
                  transition: 'transform 0.1s ease-out'
                }}
              />
              <div className="author-info">
                <h4>{testimonials[currentIndex].name}</h4>
                <p>Verified Customer</p>
              </div>
            </div>
          </div>

          <div 
            className="slider-dots"
            style={{
              transform: `translateY(${parallaxProgress * 30}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                style={{
                  transform: `scale(${index === currentIndex ? 1 + parallaxProgress * 0.3 : 1})`,
                  transition: 'transform 0.2s ease-out'
                }}
              />
            ))}
          </div>
        </div>

        <div 
          style={{ 
            marginTop: '2rem', 
            textAlign: 'center',
            transform: `translateY(${-parallaxProgress * 50}px) scale(${1 - parallaxProgress * 0.2})`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <a 
            href={`https://search.google.com/local/reviews?placeid=${PLACE_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className='btn btn-primary'
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Read All Reviews on Google →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
