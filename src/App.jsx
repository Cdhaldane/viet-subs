import React from 'react'
import { useScrollReveal } from './hooks/useScrollEffects'
import Loader from './components/Loader'
import Banner from './components/Banner'
import Header from './components/Header'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import About from './components/About'
import Testimonials from './components/Testimonials'
import InstagramFeed from './components/InstagramFeed'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import './App.css'

function App() {
  useScrollReveal()

  return (
    <div className="App">
      <Loader />
      {/* <CustomCursor /> */}
      <Banner />
      <ScrollProgress />
      <Header />
      <Hero />
      {/* <Stats /> */}
      <Menu />
      {/* <Gallery /> */}
      <About />
      <Testimonials />
      <InstagramFeed />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
