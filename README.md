[![Netlify Status](https://api.netlify.com/api/v1/badges/952d4114-1b38-49d9-9ae8-85f3f4b6d39f/deploy-status)](https://app.netlify.com/sites/trusting-williams-8cacfb/deploys)

# 11st landing page clone app

[Vue.js(v2)](https://kr.vuejs.org/v2/guide/)를 사용하는 11번가 랜딩 페이지 클론 프로젝트입니다.<br>
번들러로 [Parcel](https://parceljs.org/getting_started.html)을 사용합니다.

[DEMO](https://trusting-williams-8cacfb.netlify.app/)

## 🏁 Getting started!

- `.env` 파일 생성 후 인증 키(`API_KEY`) 지정.
- `.cache` 파일이 있는 경우 제거.

```bash
$ npm i && npm run dev
## localhost:8080으로 접속
```

## 🗺 APIs~

Method | URL | Response
--|--|--
GET | https://trusting-williams-8cacfb.netlify.app/.netlify/functions/main | JSON
GET | https://trusting-williams-8cacfb.netlify.app/.netlify/functions/search | String

> 예제 진행을 위해 검색 요청은 1.5초 뒤에 응답됩니다! 

### Parameters

Parameter | Type | URL | Required | Description
--|--|--|--|--
apiKey | String | - | Y | 인증 키
requestName | String | main | Y | 요청할 데이터 이름
searchText | String | search | Y | 검색어

### Request names

Name | Description
--|--
navigations | 네비게이션 메뉴 목록 
rankings | 실시간 쇼핑 검색어 목록 (1~20위)
billboards | 빌보드 슬라이드(Swiper) 제품 목록 (12개)
directs | 바로가기 메뉴 목록 (쇼킹딜~사업자전용몰) 
banner | 전역 우하단 고정 배너 내용
hotFocus | 시선집중 할인 제품 목록 (6개)

## 💡 Specs

- 11st API(Custom)
- Parcel Bundler(HMR)
- Vue.js
- Vuex(Store)
- SCSS
- Babel
- ESLint
- PostCSS
- Autoprefixer
- Axios
- Swiper
- Lodash
- Dayjs

## 🎯 Goals

- Parcel 번들러를 통해 Vue.js 프로젝트를 구성할 수 있습니다.
- 11번가 커스텀 API를 요청하고, 실제 쇼핑 데이터를 응답받아 처리할 수 있습니다.(Axios.js)
- Global Navigation을 구성하고 디테일한 동작을 제어할 수 있습니다.
- 다양한 종류의 슬라이드 효과를 개발할 수 있습니다.(Swiper.js)
- 가벼운 날짜 정보를 처리할 수 있습니다.(Day.js)
- Image Sprite 방식으로 이미지 요청 횟수를 줄일 수 있습니다.
- 페이지의 각 섹션(Section)의 내용을 Lazy Loading할 수 있습니다.(Intersection Observer)
- Vue.js 플러그인을 생성하고 적용할 수 있습니다.
- 중앙 집중식 데이터를 처리하고 네임스페이스를 관리할 수 있습니다.(Vuex)
- Vue SFC(싱글 파일 컴포넌트) 스타일을 정의해, 협업을 위한 코드 품질을 향상시킬 수 있습니다.(ESLint)
- CSS 공급 업체 접두사를 자동으로 생성할 수 있습니다.(Autoprefixer)
- SCSS(CSS Preprocessor)로 더 쉽고 빠르게 스타일을 작성하고 관리할 수 있습니다. 

## 📦 Packages

> 명시하지 않은 패키지(모듈)는 Parcel 번들러를 통해 자동으로 설치됩니다.

- [parcel-bundler](https://parceljs.org/getting_started.html): 프로젝트 빌드를 위한 핵심 패키지입니다. 
- vue: Vue.js API를 사용하기 위한 핵심 패키지입니다.
- vuex: Vue.js 애플리케이션에 대한 상태 관리 패턴입니다.
- axios: HTTP 클라이언트 라이브러리로, 11st API를 통해 쇼핑 정보를 요청하기 위해 사용합니다.
- [regenerator-runtime](https://www.npmjs.com/package/regenerator-runtime): 비동기(Async) 함수 문법을 사용하기 위해 필요합니다.
- [swiper](https://swiperjs.com/get-started): 하드웨어 가속 전환과 놀라운 기본 동작을 갖춘 현대적인 슬라이더입니다.
- [lodash](https://lodash.com/): 다양한 유틸리티 기능을 제공하는 자바스크립트 라이브러리입니다.
- [dayjs](https://github.com/iamkun/dayjs): Moment.js와 호환 API를 가진 경량 라이브러리로, 날짜 정보를 처리합니다.
- postcss: CSS 후처리 패키지로 autoprefixer를 사용하기 위해 설치합니다.
- autoprefixer: CSS에 자동으로 공급 업체 접두사(Vendor prefix)를 적용합니다.
- eslint: 문제가 있는 코드나 안티 패턴을 찾기 위해 사용하는 스타일 가이드(Linter)입니다.
- eslint-plugin-vue: Vue.js용 공식 ESLint 플러그인으로, Vue 템플릿 스타일 가이드를 위해 사용합니다.
- @babel/eslint-parser: 표준 가이드만 제공하는 ESLint에서 실험적/비표준 구문도 변환하기 위해 사용합니다.

## 🤔 Issues..

- Globalize styles.(color variables...)
