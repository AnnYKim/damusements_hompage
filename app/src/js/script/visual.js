$(function() {
  //[*] 비주얼 페이드인 이벤트 (Diversify~ 문구)
  var visualFadeInEvent = function() {
    var $visualTitle = $(".visual-title");
    var $visualLines = [];
    var $visualQuote = $visualTitle.find(".quote");
    var _tl_visualFadeIn = new TimelineMax({});

    $visualTitle.find("i").each(function(i) {
      $visualLines[i] = $(this);
    });

    _tl_visualFadeIn
      .staggerTo(
        [$visualLines[0], $visualLines[1], $visualLines[2]],
        0.6,
        { opacity: 1, width: "100%" },
        0.4 //간격
      )
      .addLabel("listShow")
      .to($visualQuote, 0.65, { opacity: 1 }, "listShow+=0.3");
  };

  $(window).on("load", function() {
    setTimeout(function() {
      visualFadeInEvent();
    }, 1000);
  });
});

$(function() {
  $(window).on("load scroll", function() {
    var scrollTop = $(this).scrollTop();

    // console.log("scrollTop: ", scrollTop);

    $("#sub").css({
      opacity: scrollTop / 980
    });

    if (scrollTop < 980) {
      $("#sub").removeClass("on");
    }
    if (scrollTop > 980) {
      $("#sub").addClass("on");
    }

    if (scrollTop < 981 - 70) {
      $("#header").removeClass("sticky");
    }
    if (scrollTop > 981 - 70) {
      $("#header").addClass("sticky");
    }
  });
});

$(function() {
  //IE 판단
  function msieversion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
      return true;
    }
  }

  if (msieversion()) {
    var sub = document.getElementById("sub");
    sub.style.display = "none";
  } else {
    // コントローラー
    var controller = new ScrollMagic.Controller();

    // シーン
    var scene1 = new ScrollMagic.Scene({
      duration: 980, // 500pxまで
      offset: 0 // スタートは0px
    }).setPin("#visual");

    // var scene2 = new ScrollMagic.Scene({
    //   duration: 980, // 500pxまで
    //   offset: 1 // スタートは0px
    // }).setPin("#sub"); // 要素の指定

    var scene3 = new ScrollMagic.Scene({
      duration: 980, // 1500pxまで
      offset: 0 // スタートは900px
    }).setPin("#main"); // 要素の指定

    controller.addScene([scene1, scene3]);
  }
});
