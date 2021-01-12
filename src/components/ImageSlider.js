import React from 'react'
import './ImageSlider.css';
import { Carousel } from 'react-bootstrap'

const ImageSlider = () => {
    return (
        <div className='carousel--cont'>
          <h2 className='process--header'>Bringing your ideas to life</h2>
            <Carousel >
  <Carousel.Item interval={2000}>
    <img
      style={{ height: '500px' }}
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1596169909685-40177dee8e71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3><i data-aos="fade-right" class="fas fa-pencil-ruler fa-2x"></i></h3>
      <br></br>
      <h5>Completely custom designs that are pleasing to the eye, but also work for the clients branding and marketing.</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      style={{ height: '500px' }}
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1599153870006-715f0e7380b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3><i data-aos="fade-left" class="fas fa-search-location fa-2x"></i></h3>
      <br></br>
      <h5>Search Engine Optimization features and functionalities to make sure that Search Engines, and your target audience, know where to find you.</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{ height: '500px' }}
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1520475244260-7fcbc6e7c8f7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1702&q=80"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3><i data-aos="fade-right" class="fas fa-mobile fa-2x"></i></h3>
      <br></br>
      <h5>Along with a modern design, we'll make sure your site is mobile friendly, and will fit optimal pixelization on any device.</h5>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default ImageSlider
