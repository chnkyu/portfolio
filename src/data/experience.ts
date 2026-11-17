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
    role: '운영 퍼블리싱',
    current: true,
    what: '롯데렌탈 T car · 마이카세이브 운영',
    highlights: [
      'React 기반 운영 서비스의 UI 개선과 퍼블리싱 담당',
      'Storybook을 직접 구축해 개발계 내부망에 배포하고 팀과 공유',
      'variables.scss 디자인 토큰을 CSS로 컴파일해 화면 간 스타일 기준 통일',
    ],
    stack: ['React', 'styled-components', 'SCSS', 'Storybook'],
  },
  {
    company: '서남아이에스',
    period: '2024.10 — 2025.02',
    role: '프리랜서 · 디자이너',
    what: '새마을금고 채용관리시스템',
    highlights: [],
    stack: [],
  },
  {
    company: '큐빅',
    period: '2024.08 — 2024.10',
    role: '퍼블리셔',
    what: '프로모션 홈페이지',
    highlights: ['Next.js 환경의 반응형 사이트에서 React 부분 구현', 'Figma 시안 기반 반응형 UI'],
    stack: ['React', 'Next.js', 'Figma'],
  },
  {
    company: '아래즈',
    period: '2018.01 — 2024.05',
    role: '과장 · 웹 퍼블리셔',
    what: 'KBS 등 공공·방송·제조 SI 퍼블리싱',
    highlights: [
      'KBS 편성제작정보시스템, 개인정보관리시스템, 감사정보시스템 등',
      '신용정보원 마이데이터, 현대자동차 BTO, 포스코 REMS, LG U+ 오픈랩',
      'jqWidgets·RealGrid 그리드·차트 화면, 하이브리드 앱 UI',
    ],
    stack: ['HTML5', 'CSS3', 'jQuery', 'jqWidgets'],
  },
  {
    company: 'CA소프트',
    period: '2016.03 — 2017.12',
    role: '웹 퍼블리셔',
    what: 'B2B · 내부 어드민 대시보드 · 쇼핑몰 · 기업 사이트',
    highlights: [],
    stack: ['HTML5', 'CSS3', 'jQuery'],
  },
];
