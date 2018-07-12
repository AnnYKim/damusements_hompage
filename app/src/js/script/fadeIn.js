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

//       // $(window).scrollTop() + $(window).height() > o - 150 &&
//       //   ($(this).addClass("animation-show"),
//       //   $(".animation-hide").addClass("animation-show"));

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

// //////
// https://prinzhorn.github.io/skrollr/
