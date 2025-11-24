import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Viet Subs</h3>
            <p>Authentic Vietnamese Bánh Mì</p>
          </div>
          
          <div className="footer-section">
            <h4>Hours</h4>
            <p>Monday - Friday: 10am - 8pm</p>
            <p>Saturday: 11am - 9pm</p>
            <p>Sunday: 11am - 7pm</p>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>📍 123 Main Street</p>
            <p>📞 (555) 123-4567</p>
            <p>✉️ hello@vietsubs.com</p>
          </div>
          
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="Twitter">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Viet Subs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
