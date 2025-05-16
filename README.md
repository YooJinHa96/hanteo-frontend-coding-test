# HANTEO 서비스개발실 프론트엔드 개발자 코딩테스트

## 소개

본 프로젝트는 [와이어프레임 디자인 시안](https://zpl.io/ykQJMOo)을 참고하여,  
핵심 사용자 경험(UX/UI)과 실제 서비스에 가까운 리스트형 차트/뉴스/이벤트 UI를 구현하는 데 중점을 두었습니다.  
가상화 리스트, 타입 안정성, 컴포넌트 분리, 일관된 스타일 등 실무 수준의 구조와 품질을 목표로 개발하였습니다.

## 과제 요구사항 및 구현 방향

- **모든 기능을 완벽히 구현하지 않아도 부분 점수 부여**
- **실제 서비스 구현을 염두에 두고, 본인만의 추가 구현/확장도 가산점**
- **핵심 구현 사항**
  - [x] 상단 탭 메뉴 클릭 및 좌/우 슬라이드(스와이프)로 카테고리 이동
  - [x] 각 카테고리별 콘텐츠는 리스트형 뷰 + 무한 스크롤(가상화)
  - [x] 중단 배너 영역은 최소 3개, 슬라이드형, 무한루프, 외부 링크 이동 가능
- **425x900 해상도 기준, 예시와 최대한 유사하게 구현**
- **폰트/간격 등 세부 디자인은 자유, 코드의 간결함과 확장성에 가산점**
- **구현 언어/프레임워크 제한 없음**

## 참고

- 과제 기획 문서(와이어프레임): [https://zpl.io/ykQJMOo](https://zpl.io/ykQJMOo)

---

이 프로젝트는 실제 서비스에 준하는 구조와 확장성을 고려하여 설계 및 구현되었습니다.

## 주요 기술스택

- React (Vite)
- TypeScript
- @tanstack/react-virtual (가상 리스트)
- SCSS (kebab-case 네이밍)
- Redux Toolkit (상태관리)
- Vercel (배포)

## 폴더 구조

```
src/
  features/
    category/   # 카테고리 관련 상태/컴포넌트
    chart/      # 차트 리스트
    news/       # 뉴스 리스트
  components/
    content-list/   # 카테고리별 리스트 분기
    dummy-list/     # 더미(스켈레톤) 리스트
    banner.tsx      # 배너 컴포넌트
  styles/           # SCSS 스타일 (kebab-case)
  types/            # 타입 정의
  mock/             # 목업 데이터 (public/mock)
```

## 개발 방법

```bash
npm install
npm run dev
```

## 배포 방법 (Vercel)

- Vercel에 GitHub 레포 연동 후 자동 배포
- 정적 파일은 반드시 `public/` 폴더에 위치

---

문의: [yjs1916211@gmail.com]
