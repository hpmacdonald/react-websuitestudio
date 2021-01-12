import React from 'react'
import ProjectCards from '../components/ProjectCards'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Text from '../components/Text'
import ParallaxWindow from '../components/ParallaxWindow'

function Projects() {
  return (
    <div>
        <NavBar />
        <ParallaxWindow />
        <ProjectCards />
        <Footer />
    </div>
  );
}

export default Projects;
