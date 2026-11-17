
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import ScrollTrigger from 'gsap/ScrollTrigger';
import './Header.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Header(props:any) {

  const header = useRef(null);

  useEffect(()=>{

    gsap.registerPlugin(ScrollTrigger);

    var navLinks = document.querySelectorAll("#Nav ul > li > a");

    gsap.to("#Header", {
      scrollTrigger:{
        trigger:"#AboutMe",
        scrub:true,
        start: "50 bottom",
        end:"bottom center",
        toggleClass:"active",
        markers:false,
        onToggle:({isActive}) => {
          if(isActive == true){
            navLinks[0].setAttribute("class", "active");
          } else {
            navLinks[0].classList.remove("active");
          }
        }
      }
    });
    gsap.to("#Header", {
      scrollTrigger:{
        trigger:"#AboutMe",
        scrub:true,
        start: "50 bottom",
        end:"300 center",
        markers:false,
      },
      top:0,
      bottom:"inherit"
    });
    gsap.to("#Header", {
      scrollTrigger:{
        scrub:true,
        start:"top center",
        end:"center top",
        trigger:"#Skills",
        toggleClass:"active",
        markers:false,
        onToggle:({progress, direction, isActive}) => {
          if(isActive == true){
            navLinks[1].setAttribute("class", "active");
          } else {
            navLinks[1].classList.remove("active");
          }
        }
      }
    });
    gsap.to("#Header", {
      scrollTrigger:{
        scrub:true,
        start:"-50%",
        end:"center",
        trigger:"#Portfolio",
        toggleClass:"active",
        onToggle:({progress, direction, isActive}) => {
          if(isActive == true){
            navLinks[2].setAttribute("class", "active");
          } else {
            navLinks[2].classList.remove("active");
          }
        }
      }
    });
    gsap.to("#Header", {
      scrollTrigger:{
        scrub:true,
        start:"start center",
        end:"bottom center",
        trigger:"#Contact",
        toggleClass:"active",
        onToggle:({progress, direction, isActive}) => {
          if(isActive == true){
            navLinks[3].setAttribute("class", "active");
          } else {
            navLinks[3].classList.remove("active");
          }
        }
      }
    });
  })

  return (
    <>
      <header id="Header" ref={header}>
        <nav id="Nav" className='flex-align-center-between container'>
          <div>
            <a href="#Intro"><h1 id='Logo'>chnkyu's portfolio</h1></a>
          </div>
          <div>
            <ul className='flex-align-center-between gap-30'>
              <li><a href="#AboutMe">About Me</a></li>
              <li><a href="#Skills">Skills</a></li>
              <li><a href="#Portfolio">Portfolio</a></li>
              <li><a href="#Contact">Contact</a></li>
              <li className='nav-toggle-button' onClick={()=>{
                props.setNavToggle(true)
                console.log(props)
              }}><FontAwesomeIcon icon={faBars} /></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
