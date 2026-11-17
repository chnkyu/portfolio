import './Normalize.css';
import './Style.scss';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faClose, faPhone, faMessage } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';
import { useState, useEffect } from 'react';

function App() {

  const [MobileNavActive, setMobileNavActive] = useState(false);

  const MobileNav = styled.div `
    position:fixed;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0, 0.95);
    z-index:4;
    color:#fff;
    top:0;
    left:0;
    display: ${MobileNavActive ? "block" : "none"}
  `;

  const MobileNavCloseBtn = styled.button `
    background:transparent;
    border:0;
    color:#fff;
    font-size:2rem;
    position:absolute;
    right:1vw;
    top:30px;
  `;

  const MobileNavLinkStyle = {
    fontSize:"2rem",
    fontWeight:"500"
  }

  return (
    <div id="Wrapper" className='wd-100 hght-100' style={{position : "relative"}}>
      <div id="FloatLeft">
        <ul className='sns-icons'>
          <li><a href="https://www.instagram.com/q_chnkyu/" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li><a href="tel:01042921028"><FontAwesomeIcon icon={faPhone} /></a></li>
          <li><a href="https://open.kakao.com/o/s94Y2tCg" target='_blank'><FontAwesomeIcon icon={faMessage} /></a></li>
          <li>Follow Me</li>
        </ul>
      </div>
      <Header navToggle={MobileNavActive} setNavToggle={setMobileNavActive} />
      <Intro animationComplete={true} />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <MobileNav id="MoblieNav">
        <MobileNavCloseBtn onClick={()=>{setMobileNavActive(false)}}>
          <FontAwesomeIcon icon={faClose} />
        </MobileNavCloseBtn>
        <div className='flex-align-center hght-100'>
          <ul>
            <li><a href="#AboutMe" onClick={()=>{setMobileNavActive(false)}} style={MobileNavLinkStyle}>About Me</a></li>
            <li><a href="#Skills" onClick={()=>{setMobileNavActive(false)}} style={MobileNavLinkStyle}>Skills</a></li>
            <li><a href="#Portfolio" onClick={()=>{setMobileNavActive(false)}} style={MobileNavLinkStyle}>Portfolio</a></li>
            <li><a href="#Contact" onClick={()=>{setMobileNavActive(false)}} style={MobileNavLinkStyle}>Contact</a></li>
          </ul>
        </div>
      </MobileNav>
    </div>
  );
}

export default App;
