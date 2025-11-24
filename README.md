# Viet Subs Restaurant Website

A modern, responsive website for a Vietnamese sub restaurant built with React and Vite. Features a striking black and pink color scheme.

## Features

- 🎨 Modern black and pink design theme with neon accents
- 📱 Fully responsive layout for all devices
- ⚡ Fast performance with Vite
- 🎭 Parallax scrolling effects on hero section
- ✨ Scroll reveal animations with Intersection Observer
- 📊 Animated statistics counter with number animations
- 💬 Auto-rotating testimonials carousel with 5-star ratings
- 🖼️ Interactive image gallery with hover effects
- 🎯 Scroll progress indicator bar at the top
- 🔝 Floating back-to-top button
- 🌟 Neon glow effects on text and buttons
- 🎪 Floating particle animations in hero section
- 🪟 Glassmorphism (frosted glass) effects on cards
- 🎨 3D card tilt effects on hover
- 🖱️ Custom animated cursor (desktop only)
- 💫 Smooth scroll navigation
- � Animated loading screen
- 🔘 Ripple effects on button clicks
- �🍜 Menu showcase with high-quality images
- 📸 Ken Burns effect on images
- 📖 About section with animated feature cards
- 📞 Contact information footer
- 🎭 Multiple gradient backgrounds
- ⭐ Glowing price tags with pulse animation

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
viet-subs/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Sticky navigation with mobile menu
│   │   ├── Hero.jsx            # Hero section with parallax
│   │   ├── Stats.jsx           # Animated statistics counter
│   │   ├── Menu.jsx            # Menu with images and 3D effects
│   │   ├── Gallery.jsx         # Interactive image gallery
│   │   ├── About.jsx           # About section with features
│   │   ├── Testimonials.jsx    # Auto-rotating reviews carousel
│   │   ├── Footer.jsx          # Contact and social links
│   │   ├── ScrollProgress.jsx  # Top progress bar
│   │   ├── BackToTop.jsx       # Floating back button
│   │   ├── CustomCursor.jsx    # Animated custom cursor
│   │   ├── FloatingParticles.jsx # Background particles
│   │   ├── Loader.jsx          # Loading animation
│   │   └── ParallaxSection.jsx # Reusable parallax component
│   ├── hooks/
│   │   ├── useScrollEffects.js # Scroll reveal & progress hooks
│   │   └── useParallax.js      # Parallax scrolling hook
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Technologies Used

- React 18
- Vite
- CSS3 with custom properties
- Google Fonts (Playfair Display & Poppins)

## Color Scheme

- Primary Black: `#0a0a0a`
- Dark: `#1a1a1a`
- Pink: `#ff1493`
- Pink Light: `#ff69b4`
- Pink Dark: `#c71585`

## License

MIT License - feel free to use this project for your own purposes.
