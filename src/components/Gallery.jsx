import React from 'react'
import './Gallery.css'

function Gallery() {
  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1625937329935-037e5aca6fa5?w=600&q=80',
      title: 'Classic Bánh Mì'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&q=80',
      title: 'Fresh Ingredients'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1559301504-86a3155b7c99?w=600&q=80',
      title: 'Vietnamese Herbs'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80',
      title: 'Grilled Perfection'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&q=80',
      title: 'Beef Special'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1619895092538-128341789043?w=600&q=80',
      title: 'Chicken Delight'
    }
  ]

  return (
    <section className="gallery reveal">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">A visual feast of our delicious creations</p>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div 
              key={image.id} 
              className="gallery-item reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="gallery-image-wrapper">
                <img src={image.url} alt={image.title} loading="lazy" />
                <div className="gallery-overlay">
                  <h3>{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
