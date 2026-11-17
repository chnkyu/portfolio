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
      '직영 중고차 플랫폼의 React 기반 화면 운영 및 UI 개선',
      'Storybook을 직접 구축하고 개발계 내부망에 배포해 팀과 공유',
      'variables.scss 디자인 토큰을 CSS로 컴파일해 화면 간 스타일 기준 통일',
      'PC·모바일 화면 동시 운영',
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
    work: ['중고차 장기렌트 서비스 화면 운영 및 UI 개선', 'PC·모바일 화면 동시 운영'],
    featured: true,
    live: true,
    site: 'https://mycarsave.lotterentacar.net/',
    thumb: `${dir('mycarsave')}/pc.jpg`,
    images: [`${dir('mycarsave')}/pc.jpg`],
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
    work: ['2011년 구축된 노후 시스템의 화면 개선', 'jqWidgets로 그리드와 차트 구현', 'PC 전용이던 결재 시스템을 모바일 화면으로 확장'],
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
    ],
    featured: true,
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
    work: ['개인정보 보호법 준수를 위한 관리체계 고도화', '보안포털 리뉴얼과 관리자 화면 퍼블리싱', '수기 업무를 화면으로 옮겨 업무 효율 향상'],
    featured: false,
    internal: true,
    detailCount: 4,
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
    stack: 'HTML5 · CSS3 · jQuery · RealGrid',
    work: [
      'Flash 기반 RealGrid+를 Canvas 기반 RealGridJS로 전환',
      '공통 init 함수만 수정해 전체 화면을 최소 변경으로 전환',
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
    stack: 'HTML5 · CSS3 · jQuery',
    work: ['가족 간 결제권 요청·지급과 가맹점 결제 흐름 화면', 'Android · iOS 차이(상태바, 홈 바 영역 등)를 맞춰 같은 결과물 구현'],
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
    stack: 'HTML5 · CSS3 · jQuery · jqWidgets',
    work: [
      '블루투스 QR 스캐너 연동 모바일 앱 화면(재고·사용 관리)',
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
    work: ['운영 중인 사이트 소스를 분석해 필요한 부분만 추가·수정', '사용자 혼선을 막기 위해 UX 흐름은 유지하고 디자인 전면 변경', '웹표준 · 웹호환성 준수'],
    featured: false,
    detailCount: 13,
  },
  {
    id: 'hyundaiMobis',
    title: '현대모비스 정비지원 PDA 앱',
    year: '2018',
    kind: 'Native · Hybrid App · 내부망',
    short: 'Native · Hybrid App',
    summary: '',
    period: '2018 — 2019',
    role: 'PDA 디자인 · 태블릿 퍼블리싱',
    client: '현대모비스 (아래즈)',
    stack: 'HTML5 · CSS3 · jQuery',
    work: ['정비지원 PDA 프로그램을 Windows Mobile에서 Android로 전환', '네이티브 PDA 앱 화면 디자인, 태블릿 하이브리드 앱 퍼블리싱'],
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
