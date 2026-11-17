/**
 * 프로젝트 목록 — 순서 = 화면 순서
 * featured: true → 대표작(큰 이미지), false → 아래 목록
 *
 * 이미지 경로: public/images/portfolio_img/{id}/
 *   - thumb: 대표작 카드 이미지
 *   - images: 상세 화면 이미지 (없으면 detailCount 개수만큼 portfolio_detail_img_01.png… 사용)
 */
export interface Project {
  id: string;
  title: string;
  year: string;
  kind: string;
  /** 목록에 보이는 짧은 유형 */
  short: string;
  summary: string;
  period: string;
  role: string;
  client: string;
  stack: string;
  work: string[];
  featured: boolean;
  live?: boolean;
  site?: string;
  internal?: boolean;
  thumb?: string;
  /** 대표작 카드에 겹쳐 보여 줄 모바일 화면 */
  thumbMobile?: string;
  images?: string[];
  detailCount?: number;
}

const dir = (id: string) => `images/portfolio_img/${id}`;

export const projects: Project[] = [
  {
    id: 'tcar',
    title: '롯데렌터카 T car',
    year: '2025 —',
    kind: 'Web · 운영 중',
    short: 'React · Storybook',
    summary: '직영 중고차 플랫폼 운영 · React UI 개선 · Storybook 직접 구축',
    period: '2025.02 — 현재',
    role: '운영 퍼블리싱 · UI 개선',
    client: '롯데렌탈 (비오시스템즈)',
    stack: 'React · styled-components · SCSS · Storybook',
    work: [
      '중고차 매매 플랫폼 PC·모바일 프론트 화면 퍼블리싱 및 React UI 개발 주 담당',
      '월 20건 이상 운영 요청 처리 (배너, 이벤트 페이지, 화면 수정, 신규 기능 UI, 오류 대응)',
      '버튼·팝업·바텀시트·라벨·차량카드·인풋 등 공통 컴포넌트화 — 팝업은 내용만 교체하고 "오늘 하루 보지 않기" 기능 내장',
      'Storybook을 직접 제안·구축해 개발계 서버에 배포, 개발 참고와 디자인 검수에 활용 (운영 반영)',
      'variables.scss 디자인 토큰을 CSS로 컴파일해 화면 간 스타일 기준 통일',
      '함수형·클래스형 혼재 환경의 Invalid hook call 오류를 styled-components → SCSS 전환, 스켈레톤 자체 제작으로 해결',
      '반응형 · 웹접근성 · 크로스브라우징 대응',
    ],
    featured: true,
    live: true,
    site: 'https://tcar.lotterentacar.net/',
    thumb: `${dir('tcar')}/pc.jpg`,
    thumbMobile: `${dir('tcar')}/mo.jpg`,
    images: [`${dir('tcar')}/pc.jpg`, `${dir('tcar')}/mo.jpg`],
  },
  {
    id: 'mycarsave',
    title: '롯데렌터카 마이카 세이브',
    year: '2025 —',
    kind: 'Web · 운영 중',
    short: 'React',
    summary: '중고차 장기렌트 서비스 운영 · UI 개선 · 퍼블리싱',
    period: '2025.02 — 현재',
    role: '운영 퍼블리싱 · UI 개선',
    client: '롯데렌탈 (비오시스템즈)',
    stack: 'React · styled-components · SCSS',
    work: [
      '중고차 장기렌트 서비스 PC·모바일 프론트 화면 퍼블리싱 및 React UI 개발',
      '배너·이벤트 페이지·신규 기능 UI 등 운영 요청 처리',
      '반응형 · 웹접근성 · 크로스브라우징 대응',
    ],
    featured: true,
    live: true,
    site: 'https://mycarsave.lotterentacar.net/',
    thumb: `${dir('mycarsave')}/pc.jpg`,
    images: [`${dir('mycarsave')}/pc.jpg`],
  },
  {
    id: 'kfcc',
    title: '새마을금고 채용관리시스템',
    year: '2024',
    kind: 'Responsive Web · Admin · 디자인',
    short: 'UI/UX 디자인',
    summary: '대외 채용 홈페이지(반응형)와 내부 채용 관리 프로그램(적응형) UI/UX 디자인',
    period: '2024.10 — 2025.02',
    role: 'UI/UX 디자인 100%',
    client: '새마을금고 (서남아이에스)',
    stack: 'Figma · Photoshop · Illustrator',
    work: [
      '대외 채용 홈페이지(반응형)와 내부 채용 관리 프로그램(적응형) UI/UX 디자인',
      '지원자용 화면과 채용 담당자용 관리자 화면 디자인',
      '디자인 가이드 정리',
      'Figma 시안을 퍼블리셔와 공유하며 구현 협업, Photoshop·Illustrator로 이미지·아이콘 제작',
    ],
    featured: true,
    live: true,
    site: 'https://recruit.kfcc.co.kr/',
    thumb: `${dir('kfcc')}/pc.jpg`,
    thumbMobile: `${dir('kfcc')}/mo.jpg`,
    images: [`${dir('kfcc')}/pc.jpg`, `${dir('kfcc')}/mo.jpg`],
  },
  {
    id: 'kbsPps',
    title: 'KBS 편성제작정보시스템 기능 개선',
    year: '2023',
    kind: 'Web · Mobile · 내부망',
    short: 'Web · Mobile',
    summary: '2011년 시스템의 UI 개선, PC 결재를 모바일로 확장 · 디자인·퍼블리싱',
    period: '2023.05 — 2024.01',
    role: '디자인 100% · 퍼블리싱 100%',
    client: 'KBS (아래즈)',
    stack: 'HTML5 · CSS3 · jQuery · jqWidgets',
    work: [
      '2011년 구축된 노후 윈도우 개발환경의 화면 개선',
      '사용자 편의를 위한 UI/UX 구현',
      'jqWidgets로 그리드와 차트 구현',
      'PC에서만 가능하던 결재 시스템을 모바일 화면으로 확장해 업무 효율 향상',
    ],
    featured: true,
    internal: true,
    thumb: `${dir('kbsPps')}/portfolio_thumbnail.png`,
    detailCount: 9,
  },
  {
    id: 'kbsAudit',
    title: 'KBS 감사정보시스템 구축',
    year: '2020',
    kind: 'Responsive Web · Admin',
    short: 'Responsive Web',
    summary: 'ASP→JSP 전환, ActiveX 제거, 민원인용 반응형 홈페이지 · 퍼블리싱',
    period: '2020.10 — 2021.02',
    role: '퍼블리싱 100%',
    client: 'KBS (아래즈)',
    stack: 'HTML5 · CSS3 · jQuery · jqWidgets · Bootstrap',
    work: [
      'ASP 웹사이트를 JSP로 전환하며 화면 재구성',
      'IE 전용 ActiveX(인쇄)를 JavaScript로 대체',
      '민원인용 · 직원 업무용 · 관리자용 화면 퍼블리싱',
      '민원인용 홈페이지는 Bootstrap 반응형, 크로스브라우징 적용',
      '감사정보시스템의 안정성과 업무 생산성 향상을 위한 신규 구축',
    ],
    featured: false,
    thumb: `${dir('kbsAudit')}/portfolio_thumbnail.png`,
    detailCount: 8,
  },
  {
    id: 'kbsIsmsp',
    title: 'KBS 개인정보관리시스템 구축',
    year: '2022',
    kind: 'Web · Admin · 내부망',
    short: 'Web · Admin',
    summary: '',
    period: '2022.07 — 2022.12',
    role: '디자인 100% · 퍼블리싱 100%',
    client: 'KBS (아래즈)',
    stack: 'HTML5 · CSS3 · jQuery · jqWidgets · CKEditor',
    work: [
      '개인정보 보호법 준수를 위한 공사 개인정보 관리체계 고도화',
      '기존 보안포털 페이지 리뉴얼과 이를 관리할 관리자 페이지 제작',
      'CKEditor 연동 화면 퍼블리싱',
      '수기로 처리하던 업무를 화면으로 옮겨 업무 효율 향상',
    ],
    featured: false,
    internal: true,
    detailCount: 4,
  },
  {
    id: 'kbsCall',
    title: 'KBS 수신료 콜센터 상담지원 기능보강',
    year: '2022',
    kind: 'Web · 내부망',
    short: 'Web · 크로스브라우징',
    summary: '',
    period: '2022.09 — 2022.12',
    role: '퍼블리싱 100%',
    client: 'KBS (아래즈)',
    stack: 'HTML5 · CSS3 · jQuery · jqWidgets',
    work: [
      'KBS 수신료 상담시스템과 클라우드 콜센터 연계 화면 퍼블리싱',
      '크로스브라우징이 가능하도록 기존 화면 개선',
      '요구사항에 따라 기존 UI/UX 수정 및 신규 화면 추가',
    ],
    featured: false,
    internal: true,
    detailCount: 0,
  },
  {
    id: 'kbsPrivacy',
    title: 'KBS 수신료 정보시스템 개인정보보호 강화',
    year: '2022',
    kind: 'Web · 내부망',
    short: 'Web',
    summary: '',
    period: '2022.08 — 2022.11',
    role: '퍼블리싱 100%',
    client: 'KBS (아래즈)',
    stack: 'HTML5 · CSS3 · jQuery · jqWidgets',
    work: ['수신료 시스템의 개인정보보호 강화 사업', '요구사항에 따라 기존 UI/UX 수정 및 신규 화면 추가'],
    featured: false,
    internal: true,
    detailCount: 0,
  },
  {
    id: 'kbsCns',
    title: 'KBS 수신료종합정보시스템 개선',
    year: '2021',
    kind: 'Web · 내부망',
    short: 'Flash → Canvas 전환',
    summary: '',
    period: '2021.09 — 2022.01',
    role: '퍼블리싱 100%',
    client: 'KBS (아래즈)',
    stack: 'HTML5 · CSS3 · jQuery · RealGridJS',
    work: [
      'Flash 서비스 종료 전, Flash 기반 RealGrid+를 HTML Canvas 기반 RealGridJS로 전환',
      'Grid를 생성하는 init 함수만 수정해 전체 화면을 최소 변경으로 전환, 개발 일정 단축',
      'IE 전용 라이브러리 교체로 다른 브라우저에서도 정상 동작',
    ],
    featured: false,
    internal: true,
    detailCount: 0,
  },
  {
    id: 'kins',
    title: '킨즈페이 · 킨즈헬스케어 하이브리드 앱',
    year: '2020',
    kind: 'Hybrid App',
    short: 'Hybrid App',
    summary: '',
    period: '2020.02 — 2020.05',
    role: '퍼블리싱 100%',
    client: '킨즈 (아래즈)',
    stack: 'HTML5 · CSS3 · jQuery · Photoshop · Illustrator',
    work: [
      '새로운 페이 시스템과 건강정보 커뮤니티 하이브리드 앱 제작',
      '가족·친인척 간 쿠폰식 결제권 요청·지급, 가맹점 결제 흐름 화면 구현',
      '클라이언트 디자인 시안 기반 퍼블리싱',
      'Android · iOS 차이(상태바 색상, 홈 바 영역 등)를 맞춰 같은 결과물 구현',
    ],
    featured: false,
    detailCount: 6,
  },
  {
    id: 'posco',
    title: '포스코 연구시약관리 REMS',
    year: '2019',
    kind: 'Web · Hybrid App · 내부망',
    short: 'Web · Hybrid App',
    summary: '',
    period: '2019.11 — 2020.01',
    role: '디자인 100% · 퍼블리싱 100%',
    client: '포스코 (아래즈)',
    stack: 'HTML5 · CSS3 · jQuery · jqWidgets · Photoshop · Illustrator',
    work: [
      '블루투스 QR 스캐너로 시약병을 식별하는 모바일 하이브리드 앱 화면(재고·사용 관리·파일 읽기)',
      'PC용 관리 페이지와 QR 스캐너용 모바일 페이지 구현',
      'jqWidgets 그리드·차트로 시약 재고 현황 화면',
      '제철소 현장 상주, 고객과 직접 소통하며 요구사항 반영',
    ],
    featured: false,
    internal: true,
    detailCount: 7,
  },
  {
    id: 'lguplus',
    title: 'LG U+ NB-IoT 오픈랩 리뉴얼',
    year: '2019',
    kind: 'Web',
    short: 'Web · 디자인·퍼블리싱',
    summary: '',
    period: '2019.02 — 2019.03',
    role: '디자인 100% · 퍼블리싱 100%',
    client: 'LG U+ (아래즈)',
    stack: 'HTML5 · CSS3 · jQuery',
    work: [
      'LG U+ NB-IoT 오픈랩에서 5G 이노베이션랩으로 홈페이지 리뉴얼',
      '운영 중인 사이트 소스를 분석해 필요한 부분만 추가·수정',
      '사용자 혼선을 막기 위해 UX 흐름은 유지하고 디자인 전면 변경',
      '아이콘·배경 이미지 등 리소스 직접 제작, 웹표준 · 웹호환성 준수',
    ],
    featured: false,
    detailCount: 13,
  },
  {
    id: 'hyundaiMobis',
    title: '현대모비스 PDA·태블릿 정비지원 앱',
    year: '2018',
    kind: 'Native · Hybrid App · 내부망',
    short: 'Native · Hybrid App',
    summary: '',
    period: '2018.09 — 2018.12',
    role: 'PDA 디자인 100% · 태블릿 퍼블리싱 30%',
    client: '현대모비스 (아래즈)',
    stack: 'Photoshop · Illustrator · Sketch · HTML5 · CSS3 · jQuery',
    work: [
      '자재관리·포장관리·설비보전 PDA 프로그램의 OS를 Windows Mobile에서 Android로 전환',
      '프로그램 업무 로직을 파악하고 클라이언트 요구사항 반영',
      '모바일 PDA(네이티브 앱)는 UI/UX 디자인, 태블릿(하이브리드 앱)은 퍼블리싱 참여',
    ],
    featured: false,
    internal: true,
    detailCount: 12,
  },
];

/** 상세 화면 이미지 목록 */
export function projectImages(p: Project): string[] {
  if (p.images) return p.images;
  return Array.from(
    { length: p.detailCount ?? 0 },
    (_, i) => `${dir(p.id)}/portfolio_detail_img_${String(i + 1).padStart(2, '0')}.png`,
  );
}
