import React from 'react'
import './Menu.css'

function Menu() {
  const menuItems = [
    {
      id: 1,
      name: 'Classic Pork Bánh Mì',
      description: 'Grilled pork with pickled vegetables, cilantro, and house sauce',
      price: '$8.99'
    },
    {
      id: 2,
      name: 'Grilled Chicken',
      description: 'Tender grilled chicken with fresh herbs and traditional toppings',
      price: '$8.99'
    },
    {
      id: 3,
      name: 'Tofu Bánh Mì',
      description: 'Crispy tofu with vegetables, perfect for vegetarians',
      price: '$7.99'
    },
    {
      id: 4,
      name: 'Beef Special',
      description: 'Marinated beef with lemongrass and fresh vegetables',
      price: '$9.99'
    },
    {
      id: 5,
      name: 'Vietnamese Meatball',
      description: 'Homemade meatballs in tomato sauce with pickled daikon',
      price: '$8.99'
    },
    {
      id: 6,
      name: 'Combo Sub',
      description: 'Mixed meats with traditional Vietnamese flavors',
      price: '$10.99'
    }
  ]

  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2 className="section-title">Our Menu</h2>
        <p className="section-subtitle">Handcrafted with authentic Vietnamese flavors</p>
        
        <div className="menu-grid">
          {menuItems.map(item => (
            <div key={item.id} className="menu-item">
              <div className="menu-item-header">
                <h3>{item.name}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p className="menu-item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
