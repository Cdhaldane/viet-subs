import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Rose's Viet Subs</h3>
            <p>Authentic Vietnamese Bánh Mì</p>
          </div>
          
          <div className="footer-section">
            <h4>Hours</h4>
            <p>OPEN 7 DAYS A WEEK</p>
            <p>Monday - Sunday: 11am - 7pm</p>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>📍 493A Dundas St W, Toronto, ON M5T 1H1</p>
            <p>📞 (555) 123-4567</p>
            <p>✉️ hello@vietsubs.com</p>
          </div>
          
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="https://www.instagram.com/rosesvietsubs/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="#" aria-label="Twitter">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Viet Subs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
