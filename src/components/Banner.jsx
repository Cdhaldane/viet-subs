import React, { useState } from 'react'
import './Banner.css'

function Banner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="announcement-banner">
      <div className="banner-content">
        <span className="banner-icon">🎉</span>
        <p className="banner-text">
          <strong>Now Open!</strong> Visit us today for authentic Vietnamese Bánh Mì
        </p>
        <button 
          className="banner-close"
          onClick={() => setIsVisible(false)}
          aria-label="Close banner"
        >
          ×
        </button>
      </div>
    </div>
  )
}

export default Banner
