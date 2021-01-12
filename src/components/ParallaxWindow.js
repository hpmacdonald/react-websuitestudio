import React from 'react'
import './ParallaxWindow.css';
import { Parallax } from 'react-parallax';
const image1 = 'https://images.unsplash.com/photo-1515611856470-fae3e6c4e4e3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'


const ParallaxWindow = () => {
    return (
        <div>
            <Parallax className='parallax--window'bgImage={ image1 } strength={500}  blur={{ min: -5, max: 3 }}>
                <div style={{ height: '500px' }}>
                    <h1 data-aos="fade-in" className='parallax--text'>web suite studio</h1>
                <div className='hero-content' data-aos="fade-in">
                    e-commerce
                    <br></br>
                    web applications
                    <br></br>
                    web design
                </div>
                </div>
                
            </Parallax>
            
        </div>
    )
}

export default ParallaxWindow
