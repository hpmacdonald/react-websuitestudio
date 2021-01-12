import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './TechSection.css';

const TechSection = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <div className='tech--section'>
            <br></br>
            <div className="fa-fontawesome--cont">
                <i data-aos="zoom-in" class="fab fa-react fa-3x"></i>
            </div>
            <div className="fa-fontawesome--cont">
                <i data-aos="zoom-in" class="fab fa-angular fa-3x"></i>
            </div>
            <div className="fa-fontawesome--cont">
                <i data-aos="zoom-in" class="fab fa-python fa-3x"></i>
            </div>
            <div className="fa-fontawesome--cont">
                <i data-aos="zoom-in" class="fab fa-node fa-3x"></i>
            </div>
            <div className="fa-fontawesome--cont">
                <i data-aos="zoom-in" class="fab fa-css3-alt fa-3x"></i>
            </div>
            <div className="fa-fontawesome--cont">
                <i data-aos="zoom-in" class="fab fa-html5 fa-3x"></i>
            </div>
            <div className="fa-fontawesome--cont">
                <i data-aos="zoom-in" class="fab fa-js fa-3x"></i>
            </div>
            <div className="fa-fontawesome--cont">
                <i data-aos="zoom-in" class="fab fa-wordpress-simple fa-3x"></i>
            </div>
            
            <div className="fa-fontawesome--cont">
                <i data-aos="zoom-in" class="fab fa-paypal fa-3x"></i>
            </div>
            
            <div className="fa-fontawesome--cont">
                <i data-aos="zoom-in" class="fab fa-aws fa-3x"></i>
            </div>
            
            <div className="fa-fontawesome--cont">
                <i data-aos="zoom-in" class="fab fa-linode fa-3x"></i>
            </div>
            <br></br>
            <div className="fa-fontawesome--cont">
                <i data-aos="zoom-in" class="fas fa-database fa-3x"></i>
            </div>
            <div data-aos="zoom-in" className="fa-fontawesome--cont">
                <small>mongoDB
                    <br></br>
                    oracle
                    <br></br>
                    mySQL
                </small>
            </div>
           
            
            

            
            
            
            
            
        </div>
    );
};

export default TechSection;