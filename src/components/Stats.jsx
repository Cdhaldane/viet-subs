import React, { useState, useEffect } from 'react'
import './Stats.css'

const PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID
const CACHE_KEY = 'google_stats_cache'
const CACHE_DURATION = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

function Stats() {
  const [counts, setCounts] = useState({
    years: 0,
    customers: 0,
    sandwiches: 0,
    reviews: 0
  })

  const [hasAnimated, setHasAnimated] = useState(false)
  const [finalValues, setFinalValues] = useState({
    years: 8,
    customers: 15000,
    sandwiches: 50000,
    reviews: 4.9,
    totalReviews: 0
  })

  // Fetch Google Place data for rating and review count
  useEffect(() => {
    const fetchPlaceStats = () => {
      // Check cache first
      const cachedData = localStorage.getItem(CACHE_KEY)
      if (cachedData) {
        try {
          const { stats, timestamp } = JSON.parse(cachedData)
          const isExpired = Date.now() - timestamp > CACHE_DURATION
          
          if (!isExpired) {
            console.log('Using cached stats')
            setFinalValues(prev => ({
              ...prev,
              reviews: stats.rating,
              totalReviews: stats.totalReviews
            }))
            return
          }
        } catch (e) {
          console.error('Error reading stats cache:', e)
          localStorage.removeItem(CACHE_KEY)
        }
      }

      // Wait for Google Maps API to load
      const checkGoogleMaps = setInterval(() => {
        if (window.google && window.google.maps && window.google.maps.places && window.google.maps.places.Place) {
          clearInterval(checkGoogleMaps)
          
          try {
            const place = new window.google.maps.places.Place({
              id: PLACE_ID,
            })
            
            // Fetch rating and user ratings total
            place.fetchFields({
              fields: ['rating', 'userRatingCount']
            }).then((response) => {
              const placeData = response.place
              
              if (placeData.rating) {
                const stats = {
                  rating: placeData.rating,
                  totalReviews: placeData.userRatingCount || 0
                }

                // Cache the stats
                localStorage.setItem(CACHE_KEY, JSON.stringify({
                  stats,
                  timestamp: Date.now()
                }))

                setFinalValues(prev => ({
                  ...prev,
                  reviews: stats.rating,
                  totalReviews: stats.totalReviews
                }))
                
                console.log('Fetched Google Place stats:', stats)
              }
            }).catch((error) => {
              console.error('Error fetching place stats:', error)
            })
          } catch (err) {
            console.error('Error setting up Place:', err)
          }
        }
      }, 100)

      // Cleanup after 10 seconds
      setTimeout(() => clearInterval(checkGoogleMaps), 10000)
    }

    fetchPlaceStats()
  }, [])

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
            <div className="stat-label">Google Rating</div>
            {finalValues.totalReviews > 0 && (
              <div className="stat-sublabel" style={{ fontSize: '0.9rem', marginTop: '0.25rem', opacity: 0.8 }}>
                {finalValues.totalReviews.toLocaleString()} reviews
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
