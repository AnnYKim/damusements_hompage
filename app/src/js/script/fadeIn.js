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
  var $section_visual = $("section.visual");
  var $fadeInItem = $(".item-fade");
  var $visualTitle = $section_visual.find("h2.visual-title");

  var scrollTop = null;
  var windowHeight = null;

  function itemFadeIn() {
    $fadeInItem.each(function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = scrollTop + windowHeight;

      if (bottom_of_window > bottom_of_object - 150) {
        $(this).addClass("item-show");
        $(".item-hide").addClass("item-show");
      }
    });
  }

  // $(window).on("load resize", function() {
  //   var visualTitleOffsetLeft = $visualTitle.offset().left;
  //   console.log("visualTitleOffsetLeft", visualTitleOffsetLeft);
  //   $(".visual-text-grid").css({
  //     left: visualTitleOffsetLeft - 100
  //   });
  // });

  $(window).on("load scroll", function() {
    ////////////////////
    scrollTop = $(window).scrollTop();
    windowHeight = $(window).height();
    ////////////////////
    // if (scrollTop > 0) {
    //   $("body").css({
    //     "overflow-x": "hidden"
    //   });
    // }

    // if (scrollTop > 980) {
    //   $("body").css({
    //     "overflow-x": "auto"
    //   });
    // }

    itemFadeIn();
  });
});
