import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import PanoramaIcon from '@material-ui/icons/Panorama';
import { Link } from 'react-router-dom';
import './Footer.css'

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
    className='bottom--navigation'
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
     
    >
      <BottomNavigationAction label="Home" icon={<Link to='/'> <HomeIcon /></Link>} />
      <BottomNavigationAction label="Contact" icon={<Link to='/contact'><EmailIcon /></Link>} />
      <BottomNavigationAction label="Projects" icon={<Link to='/projects'><PanoramaIcon /></Link>} />
      <BottomNavigationAction label="GitHub" icon={<a href='https://github.com/hpmacdonald'><GitHubIcon /></a>} />
    </BottomNavigation>
  );
}