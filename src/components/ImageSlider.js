import React from 'react'
import './ImageSlider.css';
import { Carousel } from 'react-bootstrap'

const ImageSlider = () => {
    return (
        <div className='carousel--cont'>

            <Carousel >
  <Carousel.Item interval={2000}>
    <img
      style={{  }}
      className="d-block w-100"
      src="images/realestate-ss.png"
      alt="First slide"
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      style={{  }}
      className="d-block w-100"
      src="images/food-app-ss.png"
      alt="Second slide"
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{  }}
      className="d-block w-100"
      src="images/eagle-ss.png"
      alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item interval={2000}>
    <img
      style={{  }}
      className="d-block w-100"
      src="images/twitter-ss-2.png"
      alt="Fourth slide"
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </div>
    )
}

export default ImageSlider
