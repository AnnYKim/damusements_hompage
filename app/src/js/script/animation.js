//그 외 애니메이션 정의

function makeNewPosition($container) {
  // Get viewport dimensions (remove the dimension of the div)
  var h = $container.height() - 0;
  var w = $container.width() - 0;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];
}

function animateDiv($target) {
  var newq = makeNewPosition($target.parent());
  var oldq = $target.offset();
  // var speed = calcSpeed([oldq.top, oldq.left], newq);
  var speed = 25000;

  $target.animate(
    {
      top: newq[0],
      left: newq[1]
    },
    speed,
    function() {
      animateDiv($target);
    }
  );
}

function calcSpeed(prev, next) {
  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);

  var greatest = x > y ? x : y;

  var speedModifier = 0.1;

  var speed = Math.ceil(greatest / speedModifier);

  return speed;
}

$(window).on("load", function() {
  animateDiv($(".deco-icon-collaboration"));
  animateDiv($(".deco-icon-diversity"));
});

/////

// These events and people are fictional and any resemblance to person living or dead is purely coincidental.

// var width = $(".deco-container").width(),
//   height = $(".deco-container").height(),
//   CARL = new TimelineMax();

// function flying() {
//   CARL.to(".deco-icon-collaboration", 8, {
//     x: randomNumber(-50, width - 50),
//     y: randomNumber(-50, height - 50),
//     // ease: Quad.easeInOut,
//     // force3D: true,
//     onComplete: flying
//   });

//   function randomNumber(min, max) {
//     return Math.floor(Math.random() * (1 + max - min) + min);
//   }
// }
// flying();

///

// var headrBgID = setInterval(function() {
//   headerBg();
// }, 7400);

// /*헤더 - 함수 - 과일 움직임*/
// function headerBg() {
//   var randomPos = Math.floor(Math.random() * 11) + 10; //10~20
//   var randomTimer = Math.floor(Math.random() * 15) * 100 + 2000;
//   var randomDirect01 = null;
//   var randomDirect02 = null;

//   var random_pORm = Math.floor(Math.random() * 2);
//   if (random_pORm == 1) {
//     randomDirect01 = "-";
//     randomDirect02 = "+";
//   } else {
//     randomDirect01 = "+";
//     randomDirect02 = "-";
//   }

//   //console.log(randomDirect01);
//   //console.log(randomDirect02);

//   $(".deco-container")
//     .stop()
//     .animate(
//       {
//         left: "-=" + (randomPos - 5) + "px"
//       },
//       randomTimer,
//       function() {
//         $(".deco-container")
//           .stop()
//           .delay(1200)
//           .animate(
//             {
//               left: "+=" + (randomPos - 5) + "px"
//             },
//             randomTimer
//           );
//       }
//     );
// }
