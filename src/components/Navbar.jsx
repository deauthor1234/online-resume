import { useState, useEffect } from 'react';
import SocialMediaIcons from './SocialMediaIcons';
import Btn from './Btn';

const Navbar = () => {
  // Getting the nav and navbar min-width values
  const [navWidth, setNavWidth] = useState('');
  const navbarWidth = '13rem';

  //Code for updating the nav min-width value on navbar width value change
  useEffect(() => {
    setNavWidth(navbarWidth)
  });

  return (
    <nav style={{minWidth: `${navWidth}`}}>
        <div className="navbar" style={{minWidth: `${navbarWidth}`}}>
          <p className="logo">Royal<span>Art</span></p>
          <div className="navlinks">
              <a href="#intro">Intro</a> 
              <a href="#services">My Services</a>
              <a href="#works">My Works</a>
              <a href="#experience">Experience</a>
              <a href="#skills">My Skills</a>
              <a href="#contact">Contact Me</a>
          </div>
          <div className="other_links">
            <Btn content="Book Now" width={'w-full'} />
            <SocialMediaIcons />
          </div>
        </div>
    </nav>
  )
}
export default Navbar