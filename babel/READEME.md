

<h5 align="left">babely</h5>
<p align="left">
  <span>노트 정리 : <a href="https://justin-jig.github.io/justin-book/front/buildTools/">https://justin-jig.github.io/justin-book/front/buildTools/</a></span><br/>
</p>

####  개요
babel 관련 정리중  


babel is a javascript compiler
코드를 현재 및 이전 브라우저나 환경에서 역호환 
가능한 버전의 자바스크립트로 변환하는 데 주로 사용되는 툴체인이다

polyfill은 기본적으로 지원하지 않는 이전 브라우저에서 최신 기능을 제공하는 데 필요한 코드
1. transform syntax 
2. Polyfill features that are missing in your target environment (through a third-party polyfill such as core-js)
3. Source code transformations

babel
-ESNext 
@babel/preset-env : ES5+ 를 변환할 때 사용한다.
@babel/preset-react : React 를 변환할 때 사용한다.
@babel/preset-typescript : Typescript 를 변환할 때 사용한다.
@babel/plugin-transform-runtime
babel-polyfill

source-map-loader