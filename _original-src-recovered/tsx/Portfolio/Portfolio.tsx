
import React, { useEffect } from 'react';

import { useState, useRef } from 'react';

import Modal from "react-modal";

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import gsap from 'gsap';

import ScrollTrigger from 'gsap/ScrollTrigger';

import PortfolioModal from './PortfolioModal';

import './Portfolio.scss';

function Portfolio() {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [pwModalIsOpen, setPwIsOpen] = useState(false);
  const [project, setProject] = useState("");
  const [projectPw, setProjectPw] = useState("");

  const pwModalInput = useRef<HTMLInputElement>(null);

  function closePwModal() {
    setPwIsOpen(false)
  }

  const modalStyles: ReactModal.Styles = {
    overlay: {
      backgroundColor: " rgba(0, 0, 0, 0.8)",
      width: "100%",
      height: "100vh",
      zIndex: "10",
      position: "fixed",
      top: "0",
      left: "0",
    },
    content: {
      width: "360px",
      height: "auto",
      maxHeight:"95%",
      zIndex: "150",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "8px",
      boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
      backgroundColor: "white",
      overflow: "auto",
      border:0,
      padding:"2rem",
      outline:"none"
    },
  };

  function openModal(project:any, inOut:string) {
    if(inOut === "in" && projectPw === ""){
      setProject(project);
      setPwIsOpen(true);
    } else if (inOut === "in" && projectPw === "7928" || inOut === "out") {
      setProject(project);
      setIsOpen(true);
    }
  }

  function projectPwChk (pwd:any) {
    if(pwd === "7928") {
      setProjectPw(pwd);
      setIsOpen(true);
      setPwIsOpen(false);
    } else if (pwd !== "7928" && pwd.length > 0){
      pwModalInput.current?.classList.remove("warning-password");
      pwModalInput.current?.classList.add("fail-password");
      if(pwModalInput?.current?.value) {
        pwModalInput.current.value = "";
      }
    } else if (pwd == "") {
      pwModalInput.current?.classList.remove("fail-password");
      pwModalInput.current?.classList.add("warning-password");
    }
  }

  var settings = {
    dots:false,
    infinite:false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    className: 'portfolio-carousel',
    centerPadding:"0",
    responsive : [
      {
        breakpoint: 640,
        settings: {
          slidesToShow:1,
          slidesToScroll:1,
          arrows:false
        }
      }
    ]
  }

  useEffect(()=>{
    
    const portfolioScrollTl = gsap.timeline();
    
    portfolioScrollTl.from(".portfolio-carousel",{y:100, opacity:0})

    ScrollTrigger.create({
        animation: portfolioScrollTl,
        trigger: "#Portfolio",
        start: "top center", // "A B" (%, px 둘다 가능) A: trigger 시작점을 내려줌 B : 스크롤 시작점을 올려줌
        end:"center center", // "A B" (%, px 둘다 가능) A: trigger 끝점을 올려줌 B : 스크롤 시작점을 내려줌
        scrub: 1,
        markers:false,
    });
  })

  return (
    <section id="Portfolio" className="sections">
        <PortfolioModal modalIsOpen={modalIsOpen} modalClose={() => setIsOpen(false)} project={project}/>
        <div className='container'>
          <h2 className='section-title'>Portfolio
          <small style={{display:"block",fontSize:"35%", margin:"0 auto 10px", wordBreak:"keep-all"}}>내부망 프로젝트는 대외적으로 공개가 불가하여 추후 인터뷰 진행시 직접 보여드리도록 하겠습니다. 양해해주셔서 감사합니다.</small>
            <ul className='section-title-divider flex-align-center-between'>
              <li></li><li></li><li className='active'></li><li></li>
            </ul>
          </h2>
          <Slider {...settings}>
            <div>
              <div className='portfolio-items'>
                <div className='portfolio-thumb'>
                  <img src={"/portfolio/images/portfolio_img/kbsPps/portfolio_thumbnail.png"} className='img-responsive' alt="" />
                  <div className='portfolio-modal-trigger'>
                    <button type='button' onClick={()=>openModal("kbsPps", "in")}>자세히 보기</button>
                  </div>
                </div>
                <div className='portfolio-description'>
                  <h4 className='portfolio-name'>KBS 편성제작정보시스템 기능 개선</h4>
                  <p className='portfolio-desc-items'><b>SKILL</b>
                    <span className='display-inline-flex align-items-center gap-5'>
                      <span className='badge badge-html5'>html5</span>
                      <span className="badge badge-css3">css3</span>
                      <span className="badge badge-javascript">javascript</span>
                      <span className="badge badge-jquery">jquery</span>
                    </span>
                  </p>
                  <p className='portfolio-desc-items'><b>TYPE</b>내부망 프로젝트 | Web, Mobile | 디자인, 퍼블리싱</p>
                </div>
              </div>
            </div>
            <div>
              <div className='portfolio-items'>
                <div className='portfolio-thumb'>
                  <img src={"/portfolio/images/portfolio_img/kbsIsmsp/portfolio_thumbnail.png"} className='img-responsive' alt="" />
                  <div className='portfolio-modal-trigger'>
                    <button type='button' onClick={()=>openModal("kbsIsmsp", "in")}>자세히 보기</button>
                  </div>
                </div>
                <div className='portfolio-description'>
                  <h4 className='portfolio-name'>KBS 개인정보관리시스템 구축</h4>
                  <p className='portfolio-desc-items'><b>SKILL</b>
                    <span className='display-inline-flex align-items-center gap-5'>
                      <span className='badge badge-html5'>html5</span>
                      <span className="badge badge-css3">css3</span>
                      <span className="badge badge-javascript">javascript</span>
                      <span className="badge badge-jquery">jquery</span>
                    </span>
                  </p>
                  <p className='portfolio-desc-items'><b>TYPE</b>내부망 프로젝트 | Web | 디자인, 퍼블리싱</p>
                </div>
              </div>
            </div>
            <div>
              <div className='portfolio-items'>
                <div className='portfolio-thumb'>
                  <img src={"/portfolio/images/404_not_found.png"} className='img-responsive' alt="" />
                  <div className='portfolio-modal-trigger'>
                    <button type='button' onClick={()=>openModal("kbsCns", "in")}>자세히 보기</button>
                  </div>
                </div>
                <div className='portfolio-description'>
                  <h4 className='portfolio-name'>KBS 수신료종합정보시스템 개선사업</h4>
                  <p className='portfolio-desc-items'><b>SKILL</b>
                    <span className='display-inline-flex align-items-center gap-5'>
                      <span className='badge badge-html5'>html5</span>
                      <span className="badge badge-css3">css3</span>
                      <span className="badge badge-javascript">javascript</span>
                      <span className="badge badge-jquery">jquery</span>
                    </span>
                  </p>
                  <p className='portfolio-desc-items'><b>TYPE</b>내부망 프로젝트 | Web | 퍼블리싱</p>
                </div>
              </div>
            </div>
            <div>
              <div className='portfolio-items'>
                <div className='portfolio-thumb'>
                  <img src={"/portfolio/images/portfolio_img/kbsAudit/portfolio_thumbnail.png"} className='img-responsive' alt="" />
                  <div className='portfolio-modal-trigger'>
                    <button type='button' onClick={()=>openModal("kbsAudit", "out")}>자세히 보기</button>
                  </div>
                </div>
                <div className='portfolio-description'>
                  <h4 className='portfolio-name'>KBS 감사정보시스템 구축</h4>
                  <p className='portfolio-desc-items'><b>SKILL</b>
                    <span className='display-inline-flex align-items-center gap-5'>
                      <span className='badge badge-html5'>html5</span>
                      <span className="badge badge-css3">css3</span>
                      <span className="badge badge-javascript">javascript</span>
                      <span className="badge badge-jquery">jquery</span>
                      <span className="badge badge-bootstrap">bootstrap</span>
                    </span>
                  </p>
                  <p className='portfolio-desc-items'><b>TYPE</b>내부망, 외부망 프로젝트 | Web, Mobile | 디자인, 퍼블리싱</p>
                </div>
              </div>
            </div>
            <div>
              <div className='portfolio-items'>
                <div className='portfolio-thumb'>
                <img src={"/portfolio/images/portfolio_img/kins/portfolio_thumbnail.png"} className='img-responsive' alt="" />
                  <div className='portfolio-modal-trigger'>
                    <button type='button' onClick={()=>openModal("kins", "out")}>자세히 보기</button>
                  </div>
                </div>
                <div className='portfolio-description'>
                  <h4 className='portfolio-name'>킨즈페이, 킨즈헬스케어 하이브리드 앱</h4>
                  <p className='portfolio-desc-items'><b>SKILL</b>
                    <span className='display-inline-flex align-items-center gap-5'>
                      <span className='badge badge-html5'>html5</span>
                      <span className="badge badge-css3">css3</span>
                      <span className="badge badge-javascript">javascript</span>
                      <span className="badge badge-jquery">jquery</span>
                    </span>
                  </p>
                  <p className='portfolio-desc-items'><b>TYPE</b>외부망 프로젝트 | Hybrid Application | 퍼블리싱</p>
                </div>
              </div>
            </div>
            <div>
              <div className='portfolio-items'>
                <div className='portfolio-thumb'>
                  <img src={"/portfolio/images/portfolio_img/posco/portfolio_thumbnail.png"} className='img-responsive' alt="" />
                  <div className='portfolio-modal-trigger'>
                    <button type='button' onClick={()=>openModal("posco", "in")}>자세히 보기</button>
                  </div>
                </div>
                <div className='portfolio-description'>
                  <h4 className='portfolio-name'>포스코 포항제철소 연구시약관리 REMS 제작</h4>
                  <p className='portfolio-desc-items'><b>SKILL</b>
                    <span className='display-inline-flex align-items-center gap-5'>
                      <span className='badge badge-html5'>html5</span>
                      <span className="badge badge-css3">css3</span>
                      <span className="badge badge-javascript">javascript</span>
                      <span className="badge badge-jquery">jquery</span>
                      <span className="badge badge-photoshop">photoshop</span>
                      <span className="badge badge-illustrator">illustrator</span>
                    </span>
                  </p>
                  <p className='portfolio-desc-items'><b>TYPE</b>내부망 프로젝트 | Web, Hybrid Application | 디자인, 퍼블리싱</p>
                </div>
              </div>
            </div>
            <div>
              <div className='portfolio-items'>
                <div className='portfolio-thumb'>
                  <img src={"/portfolio/images/portfolio_img/lgu+/portfolio_thumbnail.png"} className='img-responsive' alt="" />
                  <div className='portfolio-modal-trigger'>
                    <button type='button' onClick={()=>openModal("lgu+", "out")}>자세히 보기</button>
                  </div>
                </div>
                <div className='portfolio-description'>
                  <h4 className='portfolio-name'>LG U+ NB-IoT 오픈랩 홈페이지 리뉴얼</h4>
                  <p className='portfolio-desc-items'><b>SKILL</b>
                    <span className='display-inline-flex align-items-center gap-5'>
                      <span className='badge badge-html5'>html5</span>
                      <span className="badge badge-css3">css3</span>
                      <span className="badge badge-javascript">javascript</span>
                      <span className="badge badge-jquery">jquery</span>
                    </span>
                  </p>
                  <p className='portfolio-desc-items'><b>TYPE</b>외부망 프로젝트 | Web | 디자인, 퍼블리싱</p>
                </div>
              </div>
            </div>
            <div>
              <div className='portfolio-items'>
                <div className='portfolio-thumb'>
                  <img src={"/portfolio/images/portfolio_img/hyundaiMobis/portfolio_thumbnail.png"} className='img-responsive' alt="" />
                  <div className='portfolio-modal-trigger'>
                    <button type='button' onClick={()=>openModal("hyundaiMobis", "in")}>자세히 보기</button>
                  </div>
                </div>
                <div className='portfolio-description'>
                  <h4 className='portfolio-name'>현대모비스 PDA용 안드로이드 앱 UI/UX 디자인</h4>
                  <p className='portfolio-desc-items'><b>SKILL</b>
                    <span className='display-inline-flex align-items-center gap-5'>
                      <span className='badge badge-html5'>html5</span>
                      <span className="badge badge-css3">css3</span>
                      <span className="badge badge-javascript">javascript</span>
                      <span className="badge badge-jquery">jquery</span>
                      <span className="badge badge-photoshop">photoshop</span>
                      <span className="badge badge-illustrator">illustrator</span>
                    </span>
                  </p>
                  <p className='portfolio-desc-items'><b>TYPE</b>내부망 프로젝트 | Web | 디자인, 퍼블리싱</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <Modal
          isOpen={pwModalIsOpen}
          ariaHideApp={false}
          style={modalStyles}
          onRequestClose={closePwModal}
          className={'password-modal'}
          onAfterOpen={()=>{
            pwModalInput.current?.focus();
          }}
        >
          <div className='display-flex flex-direction-column gap-15'>
              <p>대외적으로 공개가 불가한 포트폴리오 입니다. 비밀번호를 입력하세요.</p>
              <div>
                <input ref={pwModalInput} type="password" name="projectPw" onFocus={(event)=>{
                  if(event.currentTarget.classList.length > 0){
                    event.currentTarget.className = "";
                  }
                }} onKeyDown={(event)=>{
                  if(event.keyCode == 13) {
                    projectPwChk(event.currentTarget.value);
                  }
                }}/>
                <span className='password-input-desc fail-password-desc'>비밀번호가 틀립니다.</span>
                <span className='password-input-desc warning-password-desc'>비밀번호가 입력하세요.</span>
              </div>
              <div className='btn-group flex-align-center gap-5'>
                <button type='button' className='btn btn-ok' onClick={()=>{
                  projectPwChk(pwModalInput.current?.value);
                }}>확인</button>
                <button type='button' className='btn btn-cancel' onClick={()=>{
                  setPwIsOpen(false);
                }}>취소</button>
              </div>
          </div>
        </Modal>
    </section>
  );
}

export default Portfolio;
