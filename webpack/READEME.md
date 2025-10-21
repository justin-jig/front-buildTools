

<h5 align="left">Webpack</h5>
<p align="left">
  <span>노트 정리 : <a href="https://justin-jig.github.io/justin-book/front/buildTools/">https://justin-jig.github.io/justin-book/front/buildTools/</a></span><br/>
</p>

#### 개념
webpack   ( JavaScript와 JSON 파일 )

javascript 애플리케이션을 위한 정적 모듈 번들러 내부적으로는 프로젝트에 필요한 
모든 모듈을 매핑하고 
하나 이상의 번들을 생성하는 디펜더시 

* entry 엔트리
       디펜더시 그래프를 생성하기 위해 사용해야 하는 모듈
       webpack은 엔트리 포인트가 의존하는 다른 모듈과 라이브러리를 찾아냄.

* output 출력
      번들을 내보낼 위치와 
      이 파일의 이름을 지정하는 방법을 webpack에 알려주는 역할을 합니다

loaders 로더
     - 다른 유형의 파일을 처리하거나
     - 유효한 모듈로 변환 하여 에플리케이션에서 사용 하거니 디펜더시

plugins 플러그인
번들을 최적화하거나 에셋을 관리하고 환경 변수 주입


mode 모드
development, production 모드

* browser compatibility 브라우저 호환성
Webpack은 ES5가 호환되는 모든 브라우저를 지원합니다(IE8 이하는 지원되지 않습니다).
Webpack은 import() 및 require.ensure()을 위한 Promise를 요구합니다. 
구형 브라우저를 지원하려면 이러한 표현식을 사용하기 전에 폴리필을 로드해야 한다.

* Environment
Webpack 5는 Node.js 버전 10.13.0 이상에서 실행됨

### 설치 모듈

* webpack

    "webpack": "^4.44.2",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.0",
    "webpack-merge": "^4.2.2"

* babel

    "@babel/plugin-proposal-class-properties": "^7.10.4",
    "@babel/preset-env": "^7.11.5",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "babel-core": "6.26.3",
    "babel-loader": "8.2.2",
    "babel-plugin-lodash": "3.3.4",
    "html-loader": "^0.5.5",
    "html-webpack-plugin": "^3.2.0",
    "clean-webpack-plugin": "^3.0.0",
    "mini-css-extract-plugin": "^0.8.0",

1. watch mode

2. webpack-dev-server
"scripts": {
    "start": "webpack serve --mode development --open",
    "build": "webpack --mode production",
},