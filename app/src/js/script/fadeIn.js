// // //////
// // https://prinzhorn.github.io/skrollr/

// var scrollTop = null;
// var windowHeight = null;

// function itemFadeIn() {
//   $(".item-fade").each(function(i) {
//     var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//     var bottom_of_window = scrollTop + windowHeight;

//     console.log("bottom_of_object", bottom_of_object);
//     console.log("bottom_of_window", bottom_of_window);

//     /* If the object is completely visible in the window, fade it it */
//     if (bottom_of_window > bottom_of_object - 150) {
//       $(this).addClass("item-show");
//       $(".item-hide").addClass("item-show");
//     }
//   });
// }

// $(function() {
//   $(window).on("load scroll", function() {
//     //window on scroll 때 itemFadeIn을 호출해줘야 제대로 먹음ㅠㅠㅠㅠ!!!!
//     scrollTop = $(window).scrollTop();
//     windowHeight = $(window).height();

//     itemFadeIn();
//   });

// });

$(function() {
  //
  console.log("=== fadeIn.js 실행중 ===");
  //

  var $header = $(".header");
  var $section_visual = $(".section.visual");

  var scrollTop = null;
  var windowHeight = null;

  $(window).on("load scroll", function() {
    ////////////////////
    scrollTop = $(window).scrollTop();
    windowHeight = $(window).height();
    // console.log("scrollTop=", scrollTop);
    // console.log("windowHeight=", windowHeight);
    ////////////////////

    if (windowHeight < 980) {
      console.log("!!!!!!너무 작아!!!!!!!!");
    }

    if (scrollTop > 0) {
      console.log(" ~~ 지금부터 비주얼 오버랩 시작 ~~");
    }

    if (scrollTop > 980) {
      console.log(" ~~ 비주얼 넘엇따! ~~");
      // $section_visual.css({
      //   "z-index": "-100"
      // });
    }
  });
});
