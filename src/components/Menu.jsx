import React from 'react'
import './Menu.css'

function Menu() {
  const menuItems = [
    {
      id: 1,
      name: 'Classic Pork Bánh Mì',
      description: 'Grilled pork with pickled vegetables, cilantro, and house sauce',
      price: '$8.99',
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80'
    },
    {
      id: 2,
      name: 'Grilled Chicken',
      description: 'Tender grilled chicken with fresh herbs and traditional toppings',
      price: '$8.99',
      image: 'https://images.unsplash.com/photo-1619895092538-128341789043?w=800&q=80'
    },
    {
      id: 3,
      name: 'Tofu Bánh Mì',
      description: 'Crispy tofu with vegetables, perfect for vegetarians',
      price: '$7.99',
      image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=800&q=80'
    },
    {
      id: 4,
      name: 'Beef Special',
      description: 'Marinated beef with lemongrass and fresh vegetables',
      price: '$9.99',
      image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800&q=80'
    },
    {
      id: 5,
      name: 'Vietnamese Meatball',
      description: 'Homemade meatballs in tomato sauce with pickled daikon',
      price: '$8.99',
      image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800&q=80'
    },
    {
      id: 6,
      name: 'Combo Sub',
      description: 'Mixed meats with traditional Vietnamese flavors',
      price: '$10.99',
      image: 'https://images.unsplash.com/photo-1592415486689-125cbbfcbee2?w=800&q=80'
    }
  ]

  return (
    <section id="menu" className="menu reveal">
      <div className="container">
        <h2 className="section-title">Our Menu</h2>
        <p className="section-subtitle">Handcrafted with authentic Vietnamese flavors</p>
        
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div 
              key={item.id} 
              className="menu-item reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="menu-item-image">
                <img src={item.image} alt={item.name} loading="lazy" />
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
    </section>
  )
}

export default Menu
