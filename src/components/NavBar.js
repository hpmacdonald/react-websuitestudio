
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap'
import './NavBar.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Button from '@material-ui/core/Button';

const Navbar = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <section>
            <nav className="navbar">
                <div className="navbar-container">
                    <ul>
                        <Link data-aos="fade-right" to="/index" className="navbar-logo" onClick={closeMobileMenu}>
                    
                        </Link>
                    </ul>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-window-close' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>  
                        </li>
                        <li className='nav-item'>
                            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        
                        <li className='nav-item'>
                            <a href="https://github.com/hpmacdonald" className="nav-links-mobile" onClick={closeMobileMenu}>
                            <small>GitHub</small><i class="fab fa-github"></i>
                            </a>
                        </li>
                    </ul>
                    <ul>
                    { button && <Button variant="outlined" size="medium" color='secondary'>GitHub <i class="fab fa-github"></i></Button>
                    }
                    </ul>
                </div>
            </nav>
            
                <div style={{ height: '500px' }}>
                    <h1 data-aos="fade-in" className='parallax--text'>web suite studio</h1>
                <div className='hero-content' data-aos="fade-in">
                    e-commerce
                    <br></br>
                    web applications
                    <br></br>
                    web design
                    <br></br>
                    <Button variant="outlined" size="medium" color='primary'>
                        <Link className="header--link" to="/contact">
                            Contact
                        </Link>
                    </Button>
                </div>
                <br></br>
                <br></br>
                
                </div>
                
            </section>
        </>
    )
}

export default Navbar;