
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import gsap from 'gsap';

import ScrollTrigger from 'gsap/ScrollTrigger';

import './AboutMe.scss';

function init() {
  
  const aboutMeScrollTl = gsap.timeline();

  ScrollTrigger.matchMedia({
    "(min-width: 768px)": function() {

      aboutMeScrollTl.from(".introduce", {y:100, opacity:0})
      .from(".profile-photo-wrap",{y:100, opacity:0})
      .from(".project01",{y:100, opacity:0})
      .from(".project02",{y:100, opacity:0})
      .from(".project03",{y:100, opacity:0})
      .from(".project04",{y:100, opacity:0})
      .from(".project05",{y:100, opacity:0})
      .from(".project06",{y:100, opacity:0})

      ScrollTrigger.create({
        animation: aboutMeScrollTl,
        trigger: "#AboutMe",
        start: "250 center", // "A B" (%, px 둘다 가능) A: trigger 시작점을 내려줌 B : 스크롤 시작점을 올려줌
        end:"650 center", // "A B" (%, px 둘다 가능) A: trigger 끝점을 올려줌 B : 스크롤 시작점을 내려줌
        scrub: 1,
        markers:false,
      });
    },
    "(max-width: 767px)": function() {

      aboutMeScrollTl.from(".introduce", {y:100, opacity:0})
      .from(".profile-photo-wrap",{y:100, opacity:0})
      .from(".project01",{y:100, opacity:0})
      .from(".project02",{y:100, opacity:0})
      .from(".project03",{y:100, opacity:0})
      .from(".project04",{y:100, opacity:0})
      .from(".project05",{y:100, opacity:0})
      .from(".project06",{y:100, opacity:0})

      ScrollTrigger.create({
        animation: aboutMeScrollTl,
        trigger: "#AboutMe",
        start: "top center", // "A B" (%, px 둘다 가능) A: trigger 시작점을 내려줌 B : 스크롤 시작점을 올려줌
        end:"bottom bottom", // "A B" (%, px 둘다 가능) A: trigger 끝점을 올려줌 B : 스크롤 시작점을 내려줌
        scrub: 1,
        markers:false,
      });
    }
  });
  window.addEventListener("resize", ScrollTrigger.update);
}



function AboutMe() {

  useEffect(()=>{
    init();
  })

  return (
    <section id="AboutMe" className="sections">
        <div className='container'>
            <h2 className='section-title'>About Me
              <ul className='section-title-divider flex-align-center-between'>
                <li className='active'></li><li></li><li></li><li></li>
              </ul>
            </h2>
            <div className='profile-wrap flex-align-center-between gap-30'>
              <div className='flex-1'>
                <div className='profile-photo-wrap'></div>
              </div>
              <div className='flex-2'>
                <div className='introduce'>
                  <h3>안녕하세요</h3>
                  <p>함께 일하고 싶은 동료, <u style={{fontSize : "1.2rem"}}><b>8년차 웹퍼블리셔 최현규</b></u> 입니다.</p>
                  <p style={{wordBreak: "keep-all"}}>초석을 잘 쌓아야 100년 갈 집을 지을 수 있다는 말처럼, 꾸준히 쌓은 탄탄한 기본기로 회사와 동료들에게 보탬이 되는 모습 보여드리겠습니다.</p>
                </div>
                <div className='project'>
                  <h3 className='project01'>Experience</h3>
                  <div className='project-group'>
                    <ul className='project01'>
                      <li><b>2023 ~ 2024</b></li>
                      <li><FontAwesomeIcon icon={faCheck} />KBS 편성제작정보시스템</li>
                    </ul>
                    <ul className='project02'>
                      <li><b>2022</b></li>
                      <li><FontAwesomeIcon icon={faCheck} />KBS 수신료콜센터 상담지원 기능보강 사업</li>
                      <li><FontAwesomeIcon icon={faCheck} />KBS 수신료 정보시스템 개인정보보호 강화 사업</li>
                      <li><FontAwesomeIcon icon={faCheck} />KBS 개인정보관리시스템 구축 사업</li>
                      <li><FontAwesomeIcon icon={faCheck} />KBS 현대오토에버 미래 고객 관리 통합시스템 개발(KIA MCRMS)</li>
                    </ul>
                    <ul className='project03'>
                      <li><b>2021</b></li>
                      <li><FontAwesomeIcon icon={faCheck} />KBS 수신료종합정보시스템 개선사업</li>
                      <li><FontAwesomeIcon icon={faCheck} />신용정보원 마이데이터 전송요구권 개발</li>
                      <li><FontAwesomeIcon icon={faCheck} />부영산전 열수송관 중앙감시시스템 통합서버 구축</li>
                    </ul>
                    <ul className='project04'>
                      <li><b>2020</b></li>
                      <li><FontAwesomeIcon icon={faCheck} />KBS 감사정보시스템 구축</li>
                      <li><FontAwesomeIcon icon={faCheck} />킨즈페이, 킨즈헬스케어 하이브리드 앱 개발</li>
                    </ul>
                    <ul className='project05'>
                      <li><b>2019</b></li>
                      <li><FontAwesomeIcon icon={faCheck} />포스코 연구시약관리 REMS 제작</li>
                      <li><FontAwesomeIcon icon={faCheck} />현대모비스 유동랙 관리 pda용 안드로이드 앱 개발</li>
                      <li><FontAwesomeIcon icon={faCheck} />현대자동차 주문생산방식(BTO) 구축</li>
                      <li><FontAwesomeIcon icon={faCheck} />LG U+ 5G 이노베이션 랩 홈페이지 리뉴얼</li>
                    </ul>
                    <ul className='project06'>
                      <li><b>2018</b></li>
                      <li><FontAwesomeIcon icon={faCheck} />현대모비스 pda용 안드로이드 앱 개발</li>
                      <li><FontAwesomeIcon icon={faCheck} />푸르덴셜 생명 모바일 니즈 분석</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>
  );
}

export default AboutMe;
