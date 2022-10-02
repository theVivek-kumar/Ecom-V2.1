import React from 'react'
import CardCategory from '../Components/Cards/CardCategory'
import HeroSection from '../Components/Herosection/Herosection'
import Navbar from '../Components/Navbar/Navbar'

function Landingpage() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <CardCategory/>
    </div>
  )
}

export default Landingpage