# README
**nykim@nykim.net**
UI designed & developed by nykim


## Tree Structure
- css/
  - scss/
    - base/
      - common.scss
      - reset.scss
    - helpers/
      - mediaQueries.scss
      - mixins.scss
      - variables.scss
    - layout/
      - main.scss
    - style.scss
  - style.css
- images/
- js/
- index.html
- readme.md

## Markup Contents
- 전체를 .wrap으로 감싼다.
- 큰 구조는 .header + .section * n + .footer로 나눈다.
- 각 section은 개별 클래스를 갖는다.
  - .visual
  - .platform
  - .app
  - .engine
  - .cloud
- section 아래에는 960 사이즈를 위한 grid가 존재한다. (단, header는 예외로 1920까지 늘어날 수 있다.)

## Style Guide
- 폰트는 나눔스퀘어를 사용하며, _font.scss에서 정의한다.
 - 300: Light (사용?)
 - 400: Regular
 - 600: Bold
 - 800: ExtraBold
- 각 섹션의 타이틀은 텍스트 노드가 아닌 이미지를 사용한다.
- 로고 이미지는 svg를 사용한다.
- 반응형 분기점은 다음과 같다.
 - pc-md: 1400 
 - pc-sm: 1024
 - tablet-lg: 960
 - tablet: 768
 - mobile: 640
 - mobile-sm: 340

 # Cross Browse
 - 브라우저 대응은 IE 11 이상의 모던 브라우저를 대상으로 한다.
 - 최소한의 브라우저 대응은 IE 10으로 한다. (html5, flexbox를 대응할 것)