[![Netlify Status](https://api.netlify.com/api/v1/badges/952d4114-1b38-49d9-9ae8-85f3f4b6d39f/deploy-status)](https://app.netlify.com/sites/trusting-williams-8cacfb/deploys)

# 11st landing page clone app

Vue3를 사용하는 11번가 랜딩 페이지 클론 프로젝트입니다.

[DEMO](https://trusting-williams-8cacfb.netlify.app/)

## 🏁 Getting started!

```bash
$ npm i && npm run dev
## localhost:8080으로 접속
```

## 🗺 APIs~

Method | URL | Response
--|--|--
GET | https://trusting-williams-8cacfb.netlify.app/.netlify/functions/main | JSON
GET | https://trusting-williams-8cacfb.netlify.app/.netlify/functions/search | String

> '검색 요청'은 의도적으로 1.5초 뒤에 응답합니다!

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
- Webpack
- Vue3
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

- Webpack 번들러로 Vue3 프로젝트를 구성할 수 있습니다.
- 11번가 커스텀 API를 요청하고, 실제 쇼핑 데이터를 응답받아 처리할 수 있습니다.(Axios)
- Global Navigation을 구성하고 디테일한 동작을 제어할 수 있습니다.
- 다양한 종류의 슬라이드 효과를 개발할 수 있습니다.(Swiper)
- 가벼운 날짜 정보를 처리할 수 있습니다.(Day.js)
- Image Sprite 방식으로 이미지 요청 횟수를 줄일 수 있습니다.
- 페이지의 각 섹션(Section)의 내용을 Lazy Loading할 수 있습니다.(Intersection Observer)
- Vue.js 플러그인을 생성하고 적용할 수 있습니다.
- 중앙 집중식 데이터를 처리하고 네임스페이스를 관리할 수 있습니다.(Vuex)
- Vue SFC(싱글 파일 컴포넌트) 스타일을 정의해, 협업을 위한 코드 품질을 향상시킬 수 있습니다.(ESLint)
- CSS 공급 업체 접두사를 자동으로 생성할 수 있습니다.(Autoprefixer)
- SCSS(CSS Preprocessor)로 더 쉽고 빠르게 스타일을 작성하고 관리할 수 있습니다.

## 📦 Packages

- __webpack__: 모듈(패키지) 번들러의 핵심 패키지<br>
- __webpack-cli__: 터미널에서 Webpack 명령(CLI)을 사용할 수 있음<br>
- __webpack-dev-server__: 개발용으로 Live Server를 실행(HMR)<br>
- __babel-loader__: JS 파일을 로드<br>
- __vue-loader__: Vue 파일을 로드<br>
- __vue-style-loader__: Vue 파일의 로드된 스타일(CSS)을 `<style>`로 `<head>`에 삽입<br>
- __css-loader__: CSS 파일을 로드<br>
- __postcss-loader__: PostCSS(Autoprefixer)로 스타일 파일을 처리<br>
- __sass-loader__: SCSS(Sass) 파일을 로드<br>
- __file-loader__: 지정된 파일(이미지)을 로드<br>
- __html-webpack-plugin__: 최초 실행될 HTML 파일(템플릿)을 연결<br>
- __copy-webpack-plugin__: 정적 파일(파비콘, 이미지 등)을 제품 폴더(`dist`)로 복사<br>
- __@babel/core__: ES6 이상의 코드를 ES5 이하 버전으로 변환<br>
- __@babel/preset-env__: Babel 지원 스펙을 지정<br>
- __@babel/plugin-transform-runtime__: 폴리필이 필요한 부분(Async/Await 등)에서 Babel 헬퍼 함수를 재사용해 코드 사이즈 축소<br>
- __@babel/runtime-corejs3__: transform-runtime 플러그인이 사용하는 폴리필 모듈(core-js)<br>
- __sass__: 스타일 전처리기 SCSS(Sass) 문법을 해석 및 변환<br>
- __postcss__: 다양한 스타일 후처리기 패키지<br>
- __autoprefixer__: 스타일에 자동으로 공급 업체 접두사(Vendor prefix)를 적용하는 PostCSS의 플러그인<br>
- __vue__: Vue.js 프레임워크<br>
- __@vue/compiler-sfc__: .vue 파일(SFC, 3버전)을 해석<br>
- __eslint__: 정적 코드 분석 도구 __(+ESLint)__<br>
- __eslint-plugin-vue__: Vue.js 코드 분석 __(+ESLint)__<br>
- __vuex__: 중앙 집중식 저장소 __(+Vuex)__<br>

## ESLint Auto fix on save for VSCode

- 모든 명령 표시(Windows: `Ctrl`+`Shift`+`P` / macOS: `Cmd`+`Shift`+`P`)
- 모든 명령 표시에서 `settings` 검색
- `Preferences: Open Settings (JSON)` 선택
- 오픈된 `settings.json`파일에서 아래 코드 추가 및 저장

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

