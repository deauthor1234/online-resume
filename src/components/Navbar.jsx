import { useState, useEffect } from 'react';
import SocialMediaIcons from './SocialMediaIcons';
import Btn from './Btn';
import { BsChevronCompactLeft, BsList, BsX } from 'react-icons/bs';

const Navbar = () => {
  // Getting the nav and navbar min-width values
  const [navWidth, setNavWidth] = useState('');
  const navbarWidth = '13rem';

  //Code for updating the nav min-width value on navbar width value change
  useEffect(() => {
    setNavWidth(navbarWidth)
  });

  const [navShow, setNavShow] = useState(false);

  const handleClick = () => {
    !navShow ? setNavShow(true) : setNavShow(false);
  }

  return (
    <nav className={navShow && "show"} style={{minWidth: `${navWidth}`}}>
        <div className="navbar" style={{minWidth: `${navbarWidth}`}}>
          {!navShow ? <BsList id='menuIcon' onClick={handleClick} /> : <BsChevronCompactLeft id='menuIcon' onClick={handleClick} />}
          <div className="navbar_content">
            <p className="logo" data-aos="fade-down">Royal<span>Art</span></p>
            <div className="navlinks" data-aos="fade-right">
                <a href="#hero">Intro</a> 
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
        </div>
    </nav>
  )
}
export default Navbar