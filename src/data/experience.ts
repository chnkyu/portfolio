export interface Experience {
  company: string;
  period: string;
  role: string;
  current?: boolean;
  what: string;
  highlights: string[];
  stack: string[];
}

export const experiences: Experience[] = [
  {
    company: '비오시스템즈',
    period: '2025.02 — 현재',
    role: '퍼블리셔 · React UI 개발',
    current: true,
    what: '롯데렌탈 T car · 마이카세이브 PC/모바일 프론트 UI 주 담당',
    highlights: [
      '기획·디자인·개발로 구성된 채널 팀에서 요청 접수 → 디자인 전달 → 퍼블리싱 → 개발 전달까지 담당',
      '월 20건 이상 운영 요청 처리 (배너, 이벤트 페이지, 화면 수정, 신규 기능 UI, 오류 대응)',
      '버튼·팝업·바텀시트·차량카드 등 공통 컴포넌트와 디자인 토큰(variables.scss) 구축으로 반복 작업 단축',
      'Storybook을 직접 제안·구축해 개발계 서버에 배포, 개발 참고와 디자인 검수에 활용 (운영 반영)',
      '함수형·클래스형 혼재 레거시에서 Invalid hook call 이슈를 라이브러리 대체로 해결',
    ],
    stack: ['React 18', 'SCSS Module', 'styled-components', 'Storybook', 'Thymeleaf', 'Jira'],
  },
  {
    company: '서남아이에스',
    period: '2024.10 — 2025.02',
    role: '프리랜서 · UI/UX 디자이너',
    what: '새마을금고 채용관리시스템 구축',
    highlights: [
      '대외 채용 홈페이지(반응형)와 내부 채용 관리 프로그램(적응형) UI/UX 디자인',
      '지원자용 화면과 관리자 화면 디자인, 디자인 가이드 정리',
      'Figma로 설계한 시안을 퍼블리셔와 공유하고, Photoshop·Illustrator로 이미지·아이콘 제작',
      '디자인 기여도 100%',
    ],
    stack: ['Figma', 'Photoshop', 'Illustrator'],
  },
  {
    company: '큐빅',
    period: '2024.08 — 2024.10',
    role: 'UI/UX 디자이너 · 웹 퍼블리셔',
    what: '자체 솔루션(AI 합성 데이터) 프로모션 홈페이지',
    highlights: [
      'Figma 기반 프로모션 홈페이지 UI/UX 디자인',
      'Next.js 프로젝트 환경에서 React로 반응형 퍼블리싱',
    ],
    stack: ['Figma', 'React', 'Next.js'],
  },
  {
    company: '아래즈',
    period: '2018.01 — 2024.05',
    role: '과장 · 웹디자이너(퍼블리셔)',
    what: 'KBS 등 공공·방송·제조 SI 디자인 · 퍼블리싱',
    highlights: [
      '웹디자이너로 입사해 기획서 기반 프로그램 전반 디자인 후 퍼블리싱까지 진행, 이후 퍼블리싱 메인 담당',
      '기획자와 요구사항 정의서를 분석해 기획서 작성',
      'KBS 편성제작·수신료·개인정보관리·감사정보시스템 등 KBS 사업 6건',
      '킨즈페이·포스코 REMS 하이브리드 앱, LG U+ 홈페이지 리뉴얼, 현대모비스 PDA 앱',
      'Flash 기반 그리드를 RealGridJS로 전환하는 등 레거시 환경 개선',
    ],
    stack: ['HTML5', 'CSS3', 'jQuery', 'jqWidgets', 'RealGridJS', 'Bootstrap', 'Photoshop'],
  },
  {
    company: 'CA소프트',
    period: '2016.03 — 2017.12',
    role: '웹디자이너',
    what: 'B2B · 내부 어드민 대시보드 · 쇼핑몰 · 기업 홈페이지',
    highlights: [
      '디자인팀에서 메인 디자이너를 서포트하며 다수 홈페이지 디자인 및 퍼블리싱',
      'Photoshop·Illustrator로 웹사이트용 이미지·아이콘 제작',
      '확정된 디자인을 HTML/CSS로 퍼블리싱',
    ],
    stack: ['Photoshop', 'Illustrator', 'HTML5', 'CSS3'],
  },
];
