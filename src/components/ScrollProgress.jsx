import React from 'react'
import { useScrollProgress } from '../hooks/useScrollEffects'
import './ScrollProgress.css'

function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div className="scroll-progress-bar" style={{ width: `${progress}%` }} />
  )
}

export default ScrollProgress
