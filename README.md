# README

**nykim@nykim.net**

_UI developed by nykim_

## Tree Structure

모든 작업은 src/ 폴더 내에서 이뤄지며,
gulp 를 통해 dist/로 보냅니다.

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

## Style Guide

- 폰트는 \*를 사용하며, /\_font.scss 에서 정의합니다.
  - 300: Light
  - 400: Regular
  - 600: Bold
  - 800: ExtraBold
- 최소 브라우저 너비는 다음과 같으며, 반응형은 지원하지 않습니다.
  - 1200px ~

## Cross Browse

- 브라우저 대응은 Edge 이상의 모던 브라우저를 대상으로 한다.
- 최소한의 브라우저 대응은 IE 10 으로 한다. (html5, flexbox 를 대응할 것)

## Maintenance

-
