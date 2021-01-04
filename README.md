[![Netlify Status](https://api.netlify.com/api/v1/badges/952d4114-1b38-49d9-9ae8-85f3f4b6d39f/deploy-status)](https://app.netlify.com/sites/trusting-williams-8cacfb/deploys)

# 11st landing page clone app

[Vue.js(v2)](https://kr.vuejs.org/v2/guide/)를 사용하는 11번가 랜딩 페이지 클론 프로젝트입니다.<br>
번들러로 [Parcel](https://parceljs.org/getting_started.html)을 사용합니다.

[DEMO](https://trusting-williams-8cacfb.netlify.app/)

## API

Method | URL | Response
--|--|--
GET | https://trusting-williams-8cacfb.netlify.app/.netlify/functions/main | JSON
GET | https://trusting-williams-8cacfb.netlify.app/.netlify/functions/search | String

### Parameters

Parameter | Type | URL | Required | Description
--|--|--|--|--
apiKey | String | all | Y | 인증 키
requestName | String | main | Y | 요청할 데이터 이름
searchText | String | search | Y | 검색어

### Request names

Name | Description
--|--
navDrawers | 네비게이션 메뉴 목록 
rankings | 실시간 쇼핑 검색어 목록 (1~20위)
billboards | 빌보드 슬라이드(Swiper) 제품 목록 (12개)
directs | 바로가기 메뉴 목록 (쇼킹딜~사업자전용몰) 

## 구현 필요..

- 전역 고정 배너
