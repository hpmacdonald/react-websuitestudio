import React from 'react'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ParallaxWindow from '../components/ParallaxWindow'
import ContactPage from '../components/ContactPage'

const Contact = () => {
    return (
        <div>
            <NavBar />
            <ParallaxWindow />
            <ContactPage />
            <Footer />
        </div>
    )
}

export default Contact
