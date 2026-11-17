
import React from 'react';

import Modal from "react-modal";

import './Portfolio.scss';

function PortfolioModal(props:any) {

  function closeModal() {
    props.modalClose();
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
      minWidth:"1040px",
      width: "60%",
      height: "auto",
      maxHeight:"75%",
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

  interface Project {
    subTitle: string;
    title: string;
    period: string;
    skills: string[];
    contribution: string;
    content: string[];
    images: any;
  }

  interface PfContent {
    [key: string]: Project;
  }

  const pfContent : PfContent = {
    "kbsPps" : {
      subTitle : "Standard Website(PC, MO)",
      title : "KBS 편성제작정보시스템 기능 개선",
      period : "2023.05. ~ 2024.01",
      skills : ["html5", "css3", "javascript", "jquery", "jqwidgets", "svn"],
      contribution: "디자인 100%, 퍼블리싱 100%",
      content: [
          "2011년 구축된 노후 윈도우 개발환경 개선",
          "사용자 편의를 위한 UI/UX 개발",
          "jqwidgets 라이브러리를 사용하여 그리드 및 차트 기능 구현",
          "pc 결재시스템 모바일 UI/UX로 구현",
          "개선된 UI/UX로 사용자 이용 편의성 증가",
          "pc에서만 가능한 결재 시스템을 모바일에도 구현하여 업무 효율 증가"
      ],
      images:[...Array(9)].map((v,i) => (i + 1).toString().padStart(2, "0"))
  },
    "kbsIsmsp" : {
        subTitle : "Standard, Admin Website",
        title : "KBS 개인정보관리시스템 구축",
        period : "2022.07 ~ 2022.12",
        skills : ["html5", "css3", "javascript", "jquery", "jqwidgets", "svn", "ckeditor"],
        contribution: "디자인 100%, 퍼블리싱 100%",
        content: [
            "개인정보 보호법 준수를 위한 공사 개인정보 관리체계 고도화",
            "기존 보안포털 페이지를 리뉴얼",
            "보안포털 관리자 페이지 퍼블리싱",
            "개선된 UI/UX로 사용자 이용 편의성 증가",
            "기존 수기로 처리했던 복잡한 업무들을 프로그램화 시켜 업무 효율 향상"
        ],
        images:[...Array(4)].map((v,i) => (i + 1).toString().padStart(2, "0"))
    },
    "kbsCns" : {
        subTitle : "Standard Website",
        title : "KBS 수신료종합정보시스템 개선사업",
        period : "2021.09.07 ~ 2022.01",
        skills : ["html5", "css3", "javascript", "jquery", "svn", "RealGrid"],
        contribution: "퍼블리싱 100%",
        content: [
            "Flash 기반의 RealGrid+ 라이브러리를 사용하던 시스템으로써 Flash 서비스 종료 전 HTML의 Canvas를 기반으로 하는 RealGridJS로 업그레이드",
            "라이브러리가 업그레이드 되어도 core javascript는 비슷하여 Grid를 생성하는 init 함수만을 수정하여 기존 Flash로 출력되던 Grid를 HTML의 Canvas로 변환 및 출력되게 개선",
            "IE에서만 작동하던 라이브러리를 업그레이드 하여 다른 브라우저에서도 정상적으로 작동하도록 개발"        
          ],
          images:[...Array(0)].map((v,i) => (i + 1).toString().padStart(2, "0"))
    },
    "kbsAudit" : {
        subTitle : "Standard, Responsive(PC, MO), Admin Website",
        title : "KBS 감사정보시스템 구축",
        period : "2020.10. ~ 2021.02",
        skills : ["html5", "css3", "javascript", "jquery", "jqwidgets", "bootstrap", "svn"],
        contribution: "퍼블리싱 100%",
        content: [
            "기존 asp로 이루어진 웹사이트를 jsp로 변경",
            "IE에서만 작동하는 Active X 제거(인쇄 관련 스크립트)하고 javascript로 대체",
            "민원인용 홈페이지, 직원 업무용 페이지, 관리자용 페이지 디자인 및 퍼블리싱",
            "민원인용 홈페이지는 일반 사용자가 사용하므로 접근 편의성을 위해 Bootstrap 프레임워크를 사용하여 반응형으로 제작",
            "오래된 UI/UX를 수정하여 접근성과 사용 편의성 개선",
            "IE를 제외한 타 브라우저에서도 정상적으로 이용할 수 있게 크로스 브라우징 적용"
        ],
        images:[...Array(8)].map((v,i) => (i + 1).toString().padStart(2, "0"))
    },
    "kins" : {
        subTitle : "Hybrid Application",
        title : "킨즈페이, 킨즈헬스케어 하이브리드 앱",
        period : "2020.02. ~ 2020.05",
        skills : ["html5", "css3", "javascript", "jquery", "svn"],
        contribution: "퍼블리싱 100%",
        content: [
            "새로운 페이 시스템, 건강정보 커뮤니티 하이브리드 앱 제작",
            "가족이나 친인척관계인 사람들에게 쿠폰식의 결제권을 요청 또는 지급, 결제수단이 없는 경우 요청 받은 결제권으로 가맹점에서 결제하는 프로그램",
            "클라이언트가 디자인한 시안을 토대로 퍼블리싱 업무만 진행",
            "안드로이드와 iOS 개발환경 차이로 인해 제약이 많았으나 클라이언트와 소통하며 최대한 동일한 Output이 나올수 있게 구현(ex. status bar 색상, iOS 홈 바 영역 등)"
        ],
        images:[...Array(6)].map((v,i) => (i + 1).toString().padStart(2, "0"))
    },
    "posco" : {
        subTitle : "Standard Website, Hybrid Application",
        title : "포스코 포항제철소 연구시약관리 REMS 제작",
        period : "2019.11. ~ 2020.01",
        skills : ["html5", "css3", "javascript", "jquery", "photoshop", "illustrator", "svn"],
        contribution: "디자인 100%, 퍼블리싱 100%",
        content: [
            "QR 스캐너를 스마트폰과 블루투스로 연결하여 시약병을 식별하고 시약 재고, 사용 관리, 파일 읽기 등의 기능을 가진 모바일 하이브리드 앱 개발",
            "포스코 포항제철소에 상주하여 클라이언트과 직접적인 의사소통",
            "PC용 관리 페이지와 QR 스캐너용 모바일 페이지 개발",
            "jqWidgets 라이브러리를 사용하여 시약들의 재고, 현황 등을 Grid와 Chart로 구현, 한눈에 현황 파악 가능",
            "개인 장비와 보급된 QR 스캐너를 연결하여 업무 효율성 상승",
            "직관적인 UI로 사용 편의성 증가"
        ],
        images:[...Array(7)].map((v,i) => (i + 1).toString().padStart(2, "0"))
    },
    "lgu+" : {
        subTitle : "Standard Website",
        title : "LG U+ NB-IoT 오픈랩 홈페이지 리뉴얼",
        period : "2019.02. ~ 2019.03",
        skills : ["html5", "css3", "javascript", "jquery"],
        contribution: "디자인 100%, 퍼블리싱 100%",
        content: [
            "기존 운영중이던 홈페이지의 소스를 분석 후 이를 토대로 필요한 소스 추가 및 수정",
            "기존 사용자의 혼선을 방지하기 위해 UX는 최대한 그대로 가져가고 전체적인 디자인 변경",
            "홈페이지 구성에 필요한 리소스(아이콘, 배경 이미지, 콘텐츠 요소 등) 직접 제작",
            "홈페이지 리뉴얼로 기존 디자인과 다르고 트렌드에 맞게 디자인 변경",
            "웹표준, 웹 호환성 준수"
        ],
        images:[...Array(13)].map((v,i) => (i + 1).toString().padStart(2, "0"))
        // 이미지 개수 파악해서 배열로 이미지 파일명 뒤에 숫자만 map 함수로 넣기
        // 숫자 앞에 0 넣기, 숫자 0이 아니라 1부터 시작하기
    },
    "hyundaiMobis" : {
        subTitle : "Native Application",
        title : "현대모비스 PDA용 안드로이드 앱 UI/UX 디자인",
        period : "2019.11. ~ 2020.01",
        skills : ["html5", "css3", "javascript", "jquery", "photoshop", "illustrator", "sketch", "svn"],
        contribution: "디자인 100%",
        content: [
            "현대모비스 정비지원 PDA 프로그램의 OS를 Windows Mobile에서 Android로 변경",
            "모바일 PDA는 네이티브 App으로써 디자인 파트만 참여",
            "태블릿은 하이브리드 App으로써 퍼블리싱 파트만 참여",
            "안드로이드와 iOS 개발환경 차이로 인해 제약이 많았으나 클라이언트와 소통하며 최대한 동일한 Output이 나올수 있게 구현(ex. status bar 색상, iOS 홈 바 영역 등)"
        ],
        images:[...Array(12)].map((v,i) => (i + 1).toString().padStart(2, "0"))
    }
  }

  // 프로젝트 데이터를 props.project로 접근
  const projectData = pfContent[props.project];

  if (!projectData) {
    return (
      <Modal
        isOpen={props.modalIsOpen}
        ariaHideApp={false}
        style={modalStyles}
        onRequestClose={closeModal}
        className={'modal'}
      >
        <button className="close-modal-button" onClick={closeModal}>X</button>
        <div className='display-flex flex-direction-column gap-30'>
          <div className='portfolio-detail flex-1'>
            <h4>프로젝트 데이터를 찾을 수 없습니다.</h4>
          </div>
        </div>
      </Modal>
    );
  }

  return (
        <Modal
          isOpen={props.modalIsOpen}
          ariaHideApp={false}
          style={modalStyles}
          onRequestClose={closeModal}
          className={"modal"}
        >
          <button className="close-modal-button" onClick={closeModal}>X</button>
          <div className='display-flex flex-direction-column gap-30'>
            <div className='portfolio-detail flex-1'>
              <h4>{projectData.subTitle}</h4>
              <h3>{projectData.title}</h3>
              <ul className='display-flex gap-30'>
                <li><b>프로젝트 기간</b><br />{projectData.period}</li>
                <li><b>사용언어 및 기술</b><br />
                  <span className='display-flex gap-5'>
                  {projectData.skills.map((skill, index) => (
                    <span key={index} className={`badge badge-${skill.toLowerCase()}`}>{skill}</span>
                  ))}
                  </span>
                </li>
                <li><b>작업 기여도</b><br />{projectData.contribution}</li>
              </ul>
              {projectData.content.map((text, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
                ))}
            </div>
            <div className='portfolio-detail-image flex-1'>
              <ul className='display-flex'>
              {projectData.images == 0 ?
                <li>이미지 준비 중 입니다.</li> : 
                projectData.images.map((index:any)=>(
                  <li key={index}>
                    <a href={`/portfolio/images/portfolio_img/${props.project}/portfolio_detail_img_${index}.png`} target='_blank'>
                      <img key={index} src={`/portfolio/images/portfolio_img/${props.project}/portfolio_detail_img_${index}.png`} className='img-responsive' alt="" />
                    </a>
                  </li>
                ))
              }
              </ul>
            </div>
          </div>
        </Modal>
  );
}

export default PortfolioModal;
