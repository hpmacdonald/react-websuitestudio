import React from 'react'
import Text from '../components/Text'
import Responsive from '../components/Responsive'
import Divider from '../components/Divider'
import Footer from '../components/Footer'
import TechSection from '../components/TechSection'
import Time from '../components/Time'
import NavBar from '../components/NavBar';

function Index() {
  return (
    <div>
        <NavBar />
        <Text />  
        <Responsive />
        <Time />
        <Divider />
        <TechSection />
        <Footer />
    </div>
  );
}

export default Index;
