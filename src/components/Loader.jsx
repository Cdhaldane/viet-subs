import React, { useState, useEffect } from 'react'
import './Loader.css'

function Loader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="loader-wrapper">
      <div className="loader-content">
        <h1 className="loader-title">Viet Subs</h1>
        <div className="loader-spinner">
          <div className="spinner-circle"></div>
          <div className="spinner-circle"></div>
          <div className="spinner-circle"></div>
        </div>
        <p className="loader-text">Preparing something delicious...</p>
      </div>
    </div>
  )
}

export default Loader
