import React from 'react'
import NavBar from '../components/NavBar'
import Text from '../components/Text'
import Responsive from '../components/Responsive'
import Divider from '../components/Divider'
import Footer from '../components/Footer'
import TechSection from '../components/TechSection'
import Time from '../components/Time'
import ParallaxWindow from '../components/ParallaxWindow'
import ImageSlider from '../components/ImageSlider'

function Index() {
  return (
    <div>
        <NavBar />
        <ParallaxWindow />
        <Text />
        <Responsive />
        <Time />
        <ImageSlider />
        <Divider />
        <TechSection />
        <Footer />
    </div>
  );
}

export default Index;
