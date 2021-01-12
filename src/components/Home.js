import React from 'react'
// DO NOT DELETE HERO COMPONENT 
import Hero from '../components/Hero'
import Divider from '../components/Divider'
import NavBar from '../components/NavBar'


import ImageSlider from '../components/ImageSlider'
import ParallaxWindow from '../components/ParallaxWindow'

function Home() {
  return (
    <div>
        <NavBar />
        <ParallaxWindow />
        <ImageSlider />
        <Divider />
    </div>
  );
}

export default Home;
