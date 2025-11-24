import React from 'react'
import './ParallaxSection.css'

function ParallaxSection({ imageUrl, height = '400px', children, speed = 0.5 }) {
  const [offsetY, setOffsetY] = React.useState(0)

  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="parallax-section" style={{ height }}>
      <div
        className="parallax-background"
        style={{
          backgroundImage: `url(${imageUrl})`,
          transform: `translateY(${offsetY * speed}px)`,
        }}
      />
      <div className="parallax-content">
        {children}
      </div>
    </div>
  )
}

export default ParallaxSection
