# README

**nykim@nykim.net**

_UI developed by nykim_

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

## Markup Contents

- 전체를 .wrap 이라는 div 로 감싸고 있습니다.
- 각 section 은 .section 과 고유 이름 클래스를 갖습니다.
- 각 팝업은 .popup 과 .popup-\* 클래스를 갖습니다.
- 팝업의 마크업은 다음과 같습니다.
- .popup/
  - .popup-dim/
    - article.popup-contents/
      - div.popup-slide
      - a.popup-button-close
      - div.popup-buttons/
        - button.popup-button-prev
        - button.popup-button-next

## Style Guide

- 기본 폰트는 '나눔스퀘어체'를 사용하며, /\_font.scss 에서 정의합니다.
  - 300: Light
  - 400: Regular
  - 600: Bold
  - 800: ExtraBold
- 보조 폰트는 '고담체'를 사용하며, /\_font.scss 에서 정의합니다.
  - 300: Light
  - 800: Bold
- 최소 브라우저 너비는 다음과 같으며, 반응형은 지원하지 않습니다.
  - 1480px ~
- \_variables.scss 에서 정의하고 있는 변수는 다음과 같습니다.
  - layout
  - z-idnex : z-index 값이 필요한 요소 별로 z-index 변수를 개별 생성합니다. 이는 z-index 를 사용하고 있는 요소가 무엇인지 한눈에 파악하고 일괄 관리하기 위함입니다.
  - path : 상대경로를 사용하는 경우 여기에 정의한 path 변수를 사용합니다.
  - font-weight

## Cross Browse

- 브라우저 대응은 Edge 이상의 모던 브라우저를 대상으로 합니다.
- 최소한의 브라우저 대응은 IE 10 입니다.(html5, flexbox 를 대응할 것)

## Maintenance

- 모든 작업은 src/ 폴더 내에서 이뤄지며, gulp 를 통해 dist/로 보냅니다.
- 배포 시에는 dist/ 폴더 내 파일만 배포합니다.
- gulp task 는 gulpfile.js 에서 정의하고 있습니다.
