# 최현규 포트폴리오 (2026 리뉴얼)

https://chnkyu.github.io/portfolio/

React 19 · TypeScript · Vite · SCSS — 모바일 퍼스트, 1024px 이상에서 PC 레이아웃

## 실행
```bash
npm install
npm run dev      # http://localhost:5173/portfolio/
npm run build    # dist/ 생성
```

## 문구 고치기 — 화면 코드는 건드리지 않아도 됩니다
| 파일 | 내용 |
|---|---|
| `src/data/profile.ts` | 첫 화면 문구, 태그, About 문장, 연락처 문구·정보, 이메일·전화, 내부망 확인 코드 |
| `src/data/experience.ts` | 경력 (회사·기간·역할·설명·기술) |
| `src/data/projects.ts` | 프로젝트 (순서, 대표작 여부, 설명, 상세 내용, 사이트 주소, 이미지) |

- About 문장에서 `**이렇게**` 감싼 부분은 굵게 표시됩니다.
- 첫 화면 역할 문구의 `\n`은 줄바꿈입니다.

## 이미지 바꾸기
`public/images/portfolio_img/{프로젝트 id}/`
- T car: `tcar/pc.jpg`(PC), `tcar/mo.jpg`(모바일) — 고해상도 캡처로 같은 이름으로 덮어쓰면 됩니다.
- 마이카 세이브: `mycarsave/pc.jpg`
- 그 외: `portfolio_thumbnail.png`(대표작 카드), `portfolio_detail_img_01.png …`(상세) — 개수가 바뀌면 `projects.ts`의 `detailCount` 수정

## 배포 (GitHub Actions)
1. 이 폴더 내용으로 `chnkyu/portfolio` 저장소의 `main` 브랜치를 교체해 push
2. 저장소 Settings → Pages → Source를 **GitHub Actions**로 변경
3. 이후 `main`에 push할 때마다 자동 빌드·배포

## 구조
```
src/
  components/  Hero(첫 화면·상단 메뉴) · About · Experience · Work · ProjectSheet(상세) · Contact · Menu
  data/        화면 문구 (위 표)
  hooks/       useInView, useScrolledPast, useOverlay, useKST
  styles/      global.scss (색·글꼴 토큰은 맨 위 :root)
```
