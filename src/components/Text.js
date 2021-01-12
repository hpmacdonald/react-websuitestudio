import React from 'react'
import text from '../text'
import './Text.css';
import Button from './Button'
import { Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap'


const Text = () => {
    return (
        <div className='card--cont'>
                <h3 data-aos="fade-in" className="top--header"><i style={{color: 'rgb(64, 80, 181)'}} class="fab fa-wikipedia-w fa-2x"></i>hat we do</h3>
                    {text.map(tex => (
                    <p data-aos="fade-left" className='desc--text'>{tex.description}</p>
                    ))}           
        </div>
    )
}

export default Text
