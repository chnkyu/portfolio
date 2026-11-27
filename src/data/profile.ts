/**
 * 사이트 전체 문구 · 연락처
 * 화면에 나오는 글은 여기서 고치면 됩니다.
 */
export const profile = {
  logo: 'HK',
  logoSub: 'UI Developer',
  nameEn: 'Choi Hyun Kyu',
  email: 'hyunku1028@gmail.com',
  phone: '010-4292-1028',
};

export const hero = {
  /** 줄바꿈은 \n */
  role: '웹 퍼블리셔 ·\nUI 개발자',
  roleSuffix: '— 10년차',
  pills: [
    { label: '프로젝트 문의 가능', dot: true },
    { label: 'Incheon, KR', dot: false },
  ],
};

export const about = {
  /** **굵게** 표시한 부분은 강조됩니다 */
  statement:
    '디자인을 이해하는 퍼블리셔로, **시안이 실제 화면이 되기까지**의 과정을 책임집니다. 디자이너의 의도는 지키고, 개발자가 쓰기 편한 구조로 넘깁니다.',
  clientsLabel: '10년간 함께한 고객사', clients: ['KBS', '롯데렌탈', '새마을금고', '현대자동차', '현대모비스', '포스코', 'LG U+', '신용정보원', '푸르덴셜생명'],
  button: '더 알아보기',
};

export const contact = {
  title: ['함께 일할', '프로젝트를'],
  titleDim: '찾고 있어요.',
  info: [
    { label: 'Available', value: '프리랜서 · 정규직' },
    { label: 'Local time', value: 'KST' }, // 실시간 한국 시간으로 바뀜
    { label: 'Version', value: `${new Date().getFullYear()} ©` },
    { label: 'Work area', value: '서울 · 인천 · 경기 서부' },
  ],
};

/** 내부망 프로젝트 화면 확인 코드 (화면에서만 확인하므로 보안 장치는 아님) */
export const INTERNAL_CODE = '7928';
