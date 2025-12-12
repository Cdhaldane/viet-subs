import React, { useState, useEffect } from 'react'
import './InstagramFeed.css'

function InstagramFeed() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // You'll need to add this to your .env file
  const INSTAGRAM_TOKEN = import.meta.env.VITE_INSTAGRAM_TOKEN
  const CACHE_KEY = 'instagram_photos_cache'
  const CACHE_DURATION = 2 * 60 * 60 * 1000 // 2 hours

  useEffect(() => {
    const fetchInstagramPhotos = async () => {
      // Check cache first
      const cachedData = localStorage.getItem(CACHE_KEY)
      if (cachedData) {
        try {
          const { photos: cachedPhotos, timestamp } = JSON.parse(cachedData)
          const isExpired = Date.now() - timestamp > CACHE_DURATION
          
          if (!isExpired && cachedPhotos.length > 0) {
            console.log('Using cached Instagram photos')
            setPhotos(cachedPhotos)
            setLoading(false)
            return
          }
        } catch (e) {
          console.error('Error reading Instagram cache:', e)
          localStorage.removeItem(CACHE_KEY)
        }
      }

      if (!INSTAGRAM_TOKEN) {
        console.warn('Instagram token not configured')
        setLoading(false)
        return
      }

      try {
        // Instagram Basic Display API endpoint
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${INSTAGRAM_TOKEN}&limit=12`
        )
        
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram photos')
        }

        const data = await response.json()
        
        if (data.data && data.data.length > 0) {
          // Filter for images and videos, format the data
          const formattedPhotos = data.data
            .filter(item => item.media_type === 'IMAGE' || item.media_type === 'CAROUSEL_ALBUM')
            .slice(0, 8) // Show only 8 photos
            .map(item => ({
              id: item.id,
              url: item.media_url,
              caption: item.caption || '',
              permalink: item.permalink,
              timestamp: item.timestamp
            }))

          // Cache the photos
          localStorage.setItem(CACHE_KEY, JSON.stringify({
            photos: formattedPhotos,
            timestamp: Date.now()
          }))

          setPhotos(formattedPhotos)
        }
      } catch (err) {
        console.error('Error fetching Instagram photos:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchInstagramPhotos()
  }, [INSTAGRAM_TOKEN])

  if (loading) {
    return (
      <section className="instagram-feed">
        <div className="container">
          <h2 className="section-title">Follow Us on Instagram</h2>
          <p className="section-subtitle">Loading photos...</p>
        </div>
      </section>
    )
  }

  if (photos.length === 0) {
    return null
  }

  return (
    <section className="instagram-feed">
      <div className="container">
        <div className="instagram-header">
          <h2 className="section-title">
            <span className="instagram-icon">📸</span> Follow Us on Instagram
          </h2>
          <p className="section-subtitle">@yourbusinesshandle</p>
          <a 
            href="https://instagram.com/yourbusinesshandle" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Follow Us →
          </a>
        </div>

        <div className="instagram-grid">
          {photos.map((photo) => (
            <a
              key={photo.id}
              href={photo.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-item"
            >
              <img src={photo.url} alt={photo.caption} loading="lazy" />
              <div className="instagram-overlay">
                <span className="instagram-icon-overlay">📷</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InstagramFeed
