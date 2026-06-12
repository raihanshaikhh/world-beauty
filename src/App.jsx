import { useState } from 'react'
import './App.css'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import TrustBar from './components/Trustbar.jsx'
import FeaturedCollections from './components/FeaturedCollection.jsx'
function App() {


  return (
    <div className="App">
      <Nav />
      <Hero />
      <TrustBar />
      <FeaturedCollections />
    </div>

  )
}

export default App
