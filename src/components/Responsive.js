import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Responsive.css';
import Button from '@material-ui/core/Button';




const Responsive = () => {
    return (
        <div className='resp--container'>
            <div className='responsive--element'>
            <h2 data-aos="fade-up">Responsive Apps
                </h2>
                <h4 data-aos="fade-in">UI / UX designed</h4>
                <h4 data-aos="fade-in">mobile first approach</h4>
                <p data-aos="fade-in">Responsive sites improve SEO rankings</p>
                <p data-aos="fade-in">80% of websites are viewed on a mobile device</p>
                <Link to="/projects" >
                    <Button  className='contact--button' data-aos="fade-in" variant="outlined" color='secondary'>projects</Button>    
                </Link>
            </div>
            <div className='one'>
                <Image className='one--image' data-aos="fade-right" src='images/square.png' />  
            </div>
            <div className='two'>
                <h2 data-aos="fade-up">Responsive
                </h2>
                <h4 data-aos="fade-in">UI / UX designed</h4>
                <h4 data-aos="fade-in">mobile first approach</h4>
                <p data-aos="fade-in">Responsive sites improve SEO rankings</p>
                <p data-aos="fade-in">80% of websites are viewed on a mobile device</p>
                <Link to="/projects" >
                    <Button variant="outlined" data-aos="fade-in" color='secondary'>projects</Button>    
                </Link>
                
            </div>        

        </div>
    )
}

export default Responsive
