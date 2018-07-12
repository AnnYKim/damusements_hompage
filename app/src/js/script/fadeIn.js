// $(function() {
//   var prdIndexList = [];
//   var prdAni = new TimelineMax();
//   $(".damu-works-item").each(function(i) {
//     prdIndexList[i] = $(this);
//   });

//   var fadeInFunc = function() {
//     var $fadeInItem = $(".animation-fade");

//     $fadeInItem.each(function(e) {
//       var o = $(this).offset().top + $(this).outerHeight();

//       $(window).scrollTop() + $(window).height() > o - 150 &&
//         ($(this).addClass("animation-show"),
//         $(".animation-hide").addClass("animation-show"));

//       if ($(window).scrollTop() + $(window).height() > o - 150) {
//         prdAni.staggerFrom(
//           [
//             prdIndexList[0],
//             prdIndexList[1],
//             prdIndexList[2],
//             prdIndexList[3],
//             prdIndexList[4],
//             prdIndexList[5]
//           ],
//           0.8,
//           { opacity: 0, x: -20 },
//           0.2
//         );
//       }
//     });
//   };

//   $(window).on("load", function() {});

//   $(window).on("load scroll", function() {
//     fadeInFunc();
//   });
// });

// // //////
// // https://prinzhorn.github.io/skrollr/

var scrollTop = null;
var windowHeight = null;

function itemFadeIn() {
  $(".item-fade").each(function(i) {
    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = scrollTop + windowHeight;

    console.log("bottom_of_object", bottom_of_object);
    console.log("bottom_of_window", bottom_of_window);

    /* If the object is completely visible in the window, fade it it */
    if (bottom_of_window > bottom_of_object - 150) {
      $(this).addClass("item-show");
      $(".item-hide").addClass("item-show");
    }
  });
}

$(function() {
  $(window).on("load scroll", function() {
    //window on scroll 때 itemFadeIn을 호출해줘야 제대로 먹음ㅠㅠㅠㅠ!!!!
    scrollTop = $(window).scrollTop();
    windowHeight = $(window).height();

    itemFadeIn();
  });
});
