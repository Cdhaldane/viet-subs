import React, { useState, useEffect } from 'react'
import './Menu.css'

function Menu() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuSections = [
    {
      category: 'Bánh Mì',
      description: 'Vietnamese sandwiches on crispy baguette',
      items: [
        {
          id: 1,
          name: 'Cold Cuts Bánh Mì',
          description: 'Classic Vietnamese cold cuts with pickled vegetables, cilantro, and house sauce',
          price: '$8',
          image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw6rR_7xVJ2sZN-VSRFGDsYQHFdO5lj7mgV5vNoidpTAMYNBEn9LLL25u0kp_J1ggsI4yGWRlicvblXoWuIFGqyHqr1p-GQkyWSA76MKj81cIuktVcgA-05-5VqslMclbBofSmrr7knsHkh=s680-w680-h510-rw'
        },
        {
          id: 2,
          name: 'Skewered Pork Bánh Mì',
          description: 'Grilled skewered pork with fresh herbs and traditional toppings',
          price: '$8',
          image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw6rR_7xVJ2sZN-VSRFGDsYQHFdO5lj7mgV5vNoidpTAMYNBEn9LLL25u0kp_J1ggsI4yGWRlicvblXoWuIFGqyHqr1p-GQkyWSA76MKj81cIuktVcgA-05-5VqslMclbBofSmrr7knsHkh=s680-w680-h510-rw'
        },
        {
          id: 3,
          name: 'Grilled Chicken Bánh Mì',
          description: 'Tender grilled chicken with pickled daikon, carrots, cucumber, and cilantro',
          price: '$8',
          image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxEOB0dWUaWj2xHRNUv0CtH03C0TBJAAq7Ns6Dt8u2Yvys4EU6r7H046Vd61MOBGB7_iqTVC3XCNwTARYgIfdsgjs_bYLsHEZ4Y7DEevqdutQw7vdEI6iQ5E7tSZNT03q10AjbcHVp97cYa=s680-w680-h510-rw'
        },
        {
          id: 4,
          name: 'Char Siu Bánh Mì',
          description: 'Vietnamese sandwich with sweet and savory char siu pork, pickled vegetables, and cilantro',
          price: '$8',
          image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxsdqlUQJssMof_ZuEcSoIVts24Un1EdHXhaGznTZmzG0K5QsKKxeb1Ju_VNJGAArt6JA-WXiYAfsbsf2hSbPgvSNzV7AS7u0g7uXf8CTX1LNkcURmgXWnPOsemVl2tzUySr0KzoNdnL81T=s680-w680-h510-rw'
        }
      ]
    },
    {
      category: 'Sticky Rice (Xôi)',
      description: 'Traditional Vietnamese sticky rice dishes',
      items: [
        {
          id: 5,
          name: 'Char Siu Xôi',
          description: 'Sticky rice topped with sweet and savory char siu pork',
          price: '$10',
          image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80'
        },
        {
          id: 6,
          name: 'Braised Pork Xôi',
          description: 'Sticky rice with tender braised pork in traditional Vietnamese sauce',
          price: '$10',
          image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw6rR_7xVJ2sZN-VSRFGDsYQHFdO5lj7mgV5vNoidpTAMYNBEn9LLL25u0kp_J1ggsI4yGWRlicvblXoWuIFGqyHqr1p-GQkyWSA76MKj81cIuktVcgA-05-5VqslMclbBofSmrr7knsHkh=s680-w680-h510-rw'
        }
      ]
    },
    {
      category: 'Vermicelli Noodles (Bún)',
      description: 'Rice vermicelli bowls with fresh herbs and vegetables',
      items: [
        {
          id: 7,
          name: 'Spring Roll Vermicelli',
          description: 'Fresh vermicelli with crispy spring rolls, herbs, and fish sauce',
          price: '$18',
          image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&q=80'
        },
        {
          id: 8,
          name: 'Grilled Pork Vermicelli',
          description: 'Chargrilled pork over vermicelli with vegetables and nuoc cham',
          price: '$10',
          image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=80'
        }
      ]
    },
    {
      category: 'Drinks',
      description: 'Refreshing Vietnamese beverages',
      items: [
        {
          id: 9,
          name: 'Vietnamese Iced Coffee',
          description: 'Rich and creamy iced coffee with condensed milk',
          price: '$5',
          image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyu2Ku1ZGIK-Ws7Duql9wcbLg-56NPAstPvqVjAqN6qEJIfJnPqHkNqq6LIswRazzBJaslIHshezsq4AQ6Je-Fv3Ll0aZ67PeVyzd_EGNxxKv9AWOpgsFUovSFSVecVwr_gGKDm_W_2yr1o=s680-w680-h510-rw'
        },
        {
          id: 10,
          name: 'Fresh Coconut Water',
          description: 'Refreshing natural coconut water served chilled',
          price: '$4',
          image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80'
        }
      ]
    },
    {
      category: 'Desserts',
      description: 'Sweet Vietnamese treats',
      items: [
        {
          id: 11,
          name: 'Chè Ba Màu',
          description: 'Three-color dessert with beans, jelly, and coconut milk',
          price: '$6',
          image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80'
        },
        {
          id: 12,
          name: 'Bánh Flan',
          description: 'Vietnamese caramel custard with coffee flavor',
          price: '$5',
          image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80'
        }
      ]
    }
  ]

  return (
    <section id="menu" className="menu reveal">
      <div className="container">
        <h2 
          className="section-title"
          style={{
            transform: `translateY(${-scrollY * 0.01}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          Our Menu
        </h2>
        <p 
          className="section-subtitle"
          style={{
            transform: `translateY(${-scrollY * 0.02}px)`,
            transition: 'transform 0.1s ease-out',
            borderBottom: '2px solid var(--color-pink)',
            paddingBottom: '1rem',
          }}
        >
          Handcrafted with authentic Vietnamese flavors
        </p>
        
        {menuSections.map((section, sectionIndex) => (
          <div key={section.category} style={{ marginBottom: '4rem' }}>
            <h3 
              style={{
                fontSize: '2rem',
                color: 'var(--color-pink)',
                marginBottom: '0.5rem',
                textAlign: 'center',
                fontFamily: 'var(--font-heading)',
                transform: `translateY(${-scrollY * 0.01}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              {section.category}
            </h3>
            <p 
              style={{
                textAlign: 'center',
                color: 'var(--color-gray)',
                marginBottom: '1rem',
                fontSize: '1rem',
                transform: `translateY(${-scrollY * 0.005}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              {section.description}
            </p>
            
            <div className="menu-grid">
              {section.items.map((item, index) => (
                <div 
                  key={item.id} 
                  className="menu-item reveal"
                >
                  <div className="menu-item-image">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      loading="lazy"
                      style={{
                        transform: `scale(${1 + (scrollY * 0.0001)})`,
                        transition: 'transform 0.1s ease-out'
                      }}
                    />
                    <div className="menu-item-overlay"></div>
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-header">
                      <h3>{item.name}</h3>
                      <span className="price">{item.price}</span>
                    </div>
                    <p className="menu-item-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Menu
