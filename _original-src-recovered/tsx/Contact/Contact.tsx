
import React, { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarked, faPhone, faMailBulk, faDesktop } from '@fortawesome/free-solid-svg-icons'

import { useRef } from 'react';

import gsap from 'gsap';

import ScrollTrigger from 'gsap/ScrollTrigger';

import './Contact.scss';

function Contact() {

  const faIconStyle = {
    "fontSize" : "2rem"
  }

  const targetFocus = useRef<HTMLInputElement>(null); // Type 지정, useRef 지정

  const contactExtend = () => { // 메세지 보내기 함수
    var contactForm = document.querySelector("form") as HTMLElement; //  Type과 함께 form 태그 변수(선택자) 지정
    
    
    contactForm.classList.toggle("extend"); // form 태그에 "extend" 클래스 추가
  
    if (contactForm.classList.contains('extend')) {// form 태그에 "extend" 클래스가 추가되면
        setTimeout(function() {
          targetFocus.current?.scrollIntoView({behavior:"smooth", block:"start"}); // useRef 지정한 input 태그로 부드럽게 스크롤 이동
        }, 160); // CSS transition 시간과 일치시킵니다. 1.6초

        var formControl = document.querySelector(".contact-form .form-control") as HTMLElement; // 첫번째 input 태그(이름) 변수(선택자) 지정
  
        formControl.focus(); // 포커스 이동
    }
  }

  useEffect(()=>{
    
    const contactScrollTl = gsap.timeline();
    
    contactScrollTl.from(".contact-item01",{y:200, opacity:0})
    .from(".contact-item02",{y:100, opacity:0})
    .from(".contact-item03",{y:100, opacity:0})
    .from(".contact-item04",{y:100, opacity:0})
    .from(".contact-btn", {y:100, opacity:0})

    ScrollTrigger.create({
        animation: contactScrollTl,
        trigger: "#Contact",
        start: "-200 60%", // "A B" (%, px 둘다 가능) A: trigger 시작점을 내려줌 B : 스크롤 시작점을 올려줌
        end:"bottom bottom", // "A B" (%, px 둘다 가능) A: trigger 끝점을 올려줌 B : 스크롤 시작점을 내려줌
        scrub: 1,
        markers:false,
    });
  })

  return (
    <section id="Contact"className="sections gradient-edge-top gradient-edge-bottom" style={{backgroundImage:'url(/portfolio/images/main_intro_bg.jpg)'}}>
        <div className='container'>
          <h2 className='section-title'>Contact
            <ul className='section-title-divider flex-align-center-between'>
              <li></li><li></li><li></li><li className='active'></li>
            </ul>
          </h2>
          <div className='contact-info'>
            <ul className='flex-align-center-between'>
              <li className='contact-item01 flex-align-center'>
                <span><FontAwesomeIcon icon={faMapMarked} style={faIconStyle} /></span>
                <span className='display-flex flex-direction-column'>
                  <b>Address</b>
                  <span>경기도 고양시 덕양구</span>
                </span>
              </li>
              <li className='contact-item02 flex-align-center'>
                <span><FontAwesomeIcon icon={faPhone} style={faIconStyle} /></span>
                <span className='display-flex flex-direction-column'>
                  <b>Cell Phone</b>
                  <span><a href="tel:01042921028">010-4292-1028</a></span>
                </span>
              </li>
              <li className='contact-item03 flex-align-center'>
                <span><FontAwesomeIcon icon={faMailBulk} style={faIconStyle} /></span>
                <span className='display-flex flex-direction-column'>
                  <b>E-mail</b>
                  <span><a href="mailto:hyunku1028@gmail.com">hyunku1028@gmail.com</a></span>
                </span>
              </li>
              <li className='contact-item04 flex-align-center'>
                <span><FontAwesomeIcon icon={faDesktop} style={faIconStyle} /></span>
                <span className='display-flex flex-direction-column'>
                  <b>Web Site</b>
                  <span><a href='https://chnkyu.github.io/portfolio/' target='_blank'>https://chnkyu.github.io/portfolio/</a></span>
                </span>
              </li>
            </ul>
            <div className='contact-btn contact-extend'>
              <button type='button' onClick={contactExtend}>send message</button>
            </div>
          </div>
          <form onSubmit={()=>{alert("메일 확인 후 빠른 시일내에 답변 드리겠습니다.")}} method="POST" target="frAttachFiles" action="https://script.google.com/macros/s/AKfycbwIptPUDftMSDhmjsNGcLuU9dioooin559L5UmX0C2jGUdOGW80d4C_VooDJp0GhpfZSQ/exec">
            <div className='contact-wrap display-flex gap-30'>
              <div className='flex-1 display-flex flex-direction-column justify-content-between'>
                <div className='contact-form'>
                    <label htmlFor="이름">이름</label>
                    <input ref={targetFocus} type="text" name='name' className="form-control" placeholder='이름을 입력해주세요.' />
                </div>
                <div className='contact-form'>
                    <label htmlFor="이메일">이메일</label>
                    <input type="email" name="email" className="form-control" placeholder="@를 포함한 정확한 이메일 주소를 입력해주세요." />
                </div>
                <div className='contact-form'>
                    <label htmlFor="연락처">연락처</label>
                    <input type="number" name="phone" className="form-control" placeholder='연락처를 입력해주세요.' />
                </div>
              </div>
              <div className='flex-1 display-flex flex-direction-column gap-30'>
                <div className='contact-form display-flex flex-direction-column'>
                    <label htmlFor="내용">내용</label>
                    <textarea className="form-control" rows={10} name='message' placeholder='보내실 내용을 입력해주세요.'></textarea>
                </div>
              </div>
              <div className='contact-btn'>
                <button type='submit'>send</button>
              </div>
            </div>
          </form>
          <iframe name="frAttachFiles" style={{"display":"none"}}></iframe>
        </div>
        <div className='gradient-bg gradient-dark-bg'></div>
    </section>
  );
}

export default Contact;
