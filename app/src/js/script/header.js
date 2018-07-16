// $(function() {
//   //header js

//   var $header = $(".header");
//   var $section = $(".section");
//   var $navMenu = $header.find(".nav-menu");
//   var sectionTop = [];

//   var headerHeight = 0; //header의 높이

//   //섹션의 위치 구하는 함수
//   var getSectionTop = function() {
//     $section.each(function(idx) {
//       sectionTop[idx] = Math.ceil($(this).offset().top);
//     });
//   };

//   // 페이지 스크롤 함수
//   var pageScroll = function(where, anim) {
//     var $body = $("body");
//     if (anim == null) {
//       $body.stop().animate(
//         {
//           scrollTop: where
//         },
//         800
//       );
//     } else {
//       $body.stop().animate(
//         {
//           scrollTop: where
//         },
//         anim
//       );
//     }
//   };

//   // 로고 클릭 시 맨 위로 이동 함수
//   var clickHeaderLogo = function() {
//     var $headerLogo = $header.find(".header-logo");

//     $headerLogo.on("click", function(e) {
//       e.preventDefault();
//       pageScroll(0);
//     });
//   };

//   // 헤더 메뉴 클릭 시 해당 섹션으로 이동하는 함수
//   var scrollToSection = function() {
//     $navMenu.on("click", function(e) {
//       e.preventDefault();
//       var idx = $navMenu.index($(this));
//       switch (idx) {
//         case 0:
//           alert("0");
//           var position = sectionTop[idx + 1] - headerHeight;
//           pageScroll(500);
//           break;
//         case 1:
//           var position = sectionTop[idx + 1] - headerHeight;
//           break;
//         case 2:
//           var position = sectionTop[idx + 2] - headerHeight;
//           break;
//         case 3:
//           var position = sectionTop[idx + 2] - headerHeight;
//           break;
//         case 4:
//           var position = sectionTop[idx + 2] - headerHeight;
//           break;
//         case 5:
//           var position = sectionTop[idx + 2] - headerHeight;
//           break;
//         case 6:
//           var position = sectionTop[idx + 2] - headerHeight;
//           break;
//         case 7:
//           var position = sectionTop[idx + 2] - headerHeight;
//           break;
//       }
//       pageScroll(position);
//     });
//   };

//   // 초기 이벤트 지정
//   var initEvent = function() {
//     headerHeight = Math.ceil($header.height());
//     getSectionTop();
//     scrollToSection();
//   };

//   // 윈도 로드
//   $(window).on("load", function() {
//     initEvent();
//   });
// });

// $(function() {
//   // [*] 전역변수

//   var sectionTop = []; //각 section의 위치
//   var headerHeight = 0; //header의 높이

//   var $body = $("html, body");
//   var $header = $(".header");
//   var $section = $(".section");
//   var $navMenu = $header.find(".nav-menu");

//   // [*] 각 section의 위치 구하는 함수
//   function getSectionTop() {
//     $section.each(function(idx) {
//       sectionTop[idx] = Math.ceil($(this).offset().top);
//     });
//   }

//   function getHeaderHeight() {
//     headerHeight = Math.ceil($header.height());
//   }

//   // [*] 스크롤 함수
//   function scroll(where, anim) {
//     if (anim == null) {
//       $body.stop().animate(
//         {
//           scrollTop: where
//         },
//         800
//       );
//     } else {
//       $body.scrollTop(0);
//     }
//   }

//   // [*] 헤더 링크 클릭 시 해당 섹션으로 이동
//   function headerFunc() {
//     $navMenu.on("click", function(e) {
//       e.preventDefault();

//       var idx = $navMenu.index($(this));
//       console.log(headerHeight);

//       switch (idx) {
//         case 0:
//           var position = sectionTop[idx + 1] - headerHeight;
//           break;
//         case 1:
//           var position = sectionTop[idx + 1] - headerHeight;
//           break;
//         case 2:
//           var position = sectionTop[idx + 2] - headerHeight;
//           break;
//         case 3:
//           var position = sectionTop[idx + 2] - headerHeight;
//           break;
//         case 4:
//           var position = sectionTop[idx + 2] - headerHeight;
//           break;
//       }

//       scroll(position);
//     });
//   }

//   function initEvent() {
//     //섹션위치 구함
//     getSectionTop();

//     //헤더높이 구함
//     getHeaderHeight();

//     //헤더 메뉴 클릭 시 이동
//     headerFunc();

//     //로고 클릭 시 맨 위로
//     clickHeaderLogo();

//     $(window).on("resize", function() {
//       getSectionTop();
//     });

//     setTimeout(function() {
//       scroll(0, "noTransition"); //로드 시 최상단으로 자동 스크롤
//       // removeLoading();
//     }, 300);
//     // setTimeout(function(){
//     //   $(".visual").addClass("on");
//     // },500);
//   }

//   $(window).on("load", function() {
//     initEvent();
//   });
// });
