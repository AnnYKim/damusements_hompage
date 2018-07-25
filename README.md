# README

**nykim@nykim.net**

*UI developed by nykim*
_Last Modified: 2018-07-17_

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
    - .popup-area
      - article.popup-contents/
        - .swiper-container/
        - .swiper-wrapper/
          - swiper-slide
          - div.popup-buttons/
            - button.popup-button-prev
            - button.popup-button-next
          - a.popup-button-close

## Style Guide

- 기본 폰트는 '나눔스퀘어체'를 사용하며, /\_font.scss 에서 정의합니다.
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

## Data Processing Guide

- 데이터 삽입이 필요한 곳은 3 군데 입니다.
  - .section-damu
  - .section-dsc
  - .section-proz
- 각 섹션에 있는 a 태그를 클릭하면 팝업이 열리는 구조입니다. 팝업은 html 태그 가장 최하단에 하드코딩되어 있고, 기본적으로 hide 처리되어 있습니다.
- a 태그에는 [data-link-popup]이라는 속성이 있습니다. data-link-popup 에 연결된 값에 따라 각기 다른 팝업이 show 처리됩니다. (예를 들어, &lt;a data-link-popup="dsc"/>는 DSC 팝업을 보여줍니다. 이 이벤트는 popup.js 에서 정의하고 있습니다.)
- 팝업 내부는 슬라이드로 이루어져 있습니다. 슬라이드는 'Swiper'라는 라이브러리를 사용하고 있습니다. 슬라이드 관련 이벤트는 slideJS.js 에서 정의하고 있습니다.
  - [Swiper API DOC](http://idangero.us/swiper/api)

## Mobile Page

- 모바일에 접속 시 서브도메인으로 리다이렉트 되도록 합니다.
