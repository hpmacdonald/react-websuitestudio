import React from 'react'
import ProjectCards from '../components/ProjectCards'
import Footer from '../components/Footer'
import ImageSlider from '../components/ImageSlider'
import OnlyNavBar from '../components/OnlyNavBar'

function Projects() {
  return (
    <div>
      <OnlyNavBar />
        <ImageSlider />
        <ProjectCards />
        <Footer />
    </div>
  );
}

export default Projects;
