## 자바스크립트 프로젝트에 타입스크립트 적용하기

0. 자바스크립트 파일에 JSDoc으로 타입 시스템 입히기
1. 타입스크립트의 기본 환경 구성
   - [x] NPM 초기화
   - [x] 타입스크립트 라이브러리 설치
   - [x] 타입스크립트 설정 파일 생성 및 기본 값 추가
   - [x] 자바스크립트 파일을 타입스크립트 파일로 변환
   - [x] `tsc` 명령어로 타입스크립트 컴파일 하기
2. 명시적인 `any` 선언하기
   - `tsconfig.json` 파일에 `noImplicitAny` 값을 `true`로 추가
   - 가능한한 구체적인 타입으로 타입 정의
3. 프로젝트 환경 구성
   - babel, eslint, prettier 등의 환경 설정
4. 외부 라이브러리 모듈화

## 참고 자료

- [존스 홉킨스 코로나 현황](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)
- [Postman API](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#27454960-ea1c-4b91-a0b6-0468bb4e6712)
- [Type Vue without Typescript](https://blog.usejournal.com/type-vue-without-typescript-b2b49210f0b)

https://github.com/bjl0615/TypeScript_theory/blob/main/COVID-19/ezgif.com-gif-maker%20(4).gif

# 코로나 세계 현황판 만들기
# 🔊 Table of Contents

- [🎞Screen](#screen)
- [👟tool to run](#tool-to-run)
- [🌐API address](#api-address)
- [📖Web Link](#web-link)
- [🌏Web Support](#web-support)

### 🎞Screen

![Front](https://github.com/bjl0615/TypeScript_theory/blob/main/COVID-19/ezgif.com-gif-maker%20(4).gif)

### 👟tool to run

Development Environment Version
node.js -v14.17.5  
npm -v 6.14.14
Visual Studio code -v 1.57  
git -v 2.32.0.window.1

```sh
$ npm i
```

```sh
$ npm run build
```

```sh
    windows:   ALT + B
```

### 🌐API address

# [`🔗`](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#00030720-fae3-4c72-8aea-ad01ba17adf8)

### 📖Web Link

:school:[`inflearn`]("https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8B%A4%EC%A0%84/dashboard")

### 🌏Web Support

| <img src="https://user-images.githubusercontent.com/1215767/34348387-a2e64588-ea4d-11e7-8267-a43365103afe.png" alt="Chrome" width="16px" height="16px" /> Chrome | <img src="https://user-images.githubusercontent.com/1215767/34348590-250b3ca2-ea4f-11e7-9efb-da953359321f.png" alt="IE" width="16px" height="16px" /> Internet Explorer | <img src="https://user-images.githubusercontent.com/1215767/34348380-93e77ae8-ea4d-11e7-8696-9a989ddbbbf5.png" alt="Edge" width="16px" height="16px" /> Edge | <img src="https://user-images.githubusercontent.com/1215767/34348394-a981f892-ea4d-11e7-9156-d128d58386b9.png" alt="Safari" width="16px" height="16px" /> Safari | <img src="https://user-images.githubusercontent.com/1215767/34348383-9e7ed492-ea4d-11e7-910c-03b39d52f496.png" alt="Firefox" width="16px" height="16px" /> Firefox |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                               Yes                                                                                |                                                                                   11+                                                                                   |                                                                             Yes                                                                              |                                                                               Yes                                                                                |                                                                                Yes                                                                                 |


## ❗ 아쉬운 점

제공해주는 API가 바뀌어져서 완전 구현을 못한게 아쉽지만 나중에 API함수가 
다시 바뀐다면 꼭 바꾸고 싶다.