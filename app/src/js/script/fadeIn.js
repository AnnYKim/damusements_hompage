$(function() {
  //스크롤 페이드 이벤트는 여기에 정의

  var $fadeInItem = $(".item-fade");
  var $lineUpItem = $(".item-line-label");
  var $damuWorks = $(".damu-works");

  var scrollTop = null;
  var windowHeight = null;
  var _tl_damuWorksFadeIn = new TimelineMax({ paused: true });

  function damuItemFadeIn() {
    var $damuWorksList = [];

    $damuWorks.find(".damu-works-item").each(function(i) {
      $damuWorksList[i] = $(this);
      console.log($damuWorksList);
    });

    _tl_damuWorksFadeIn
      .from(
        [$damuWorksList[0], $damuWorksList[1], $damuWorksList[2]],
        0.6,
        { opacity: 0, transform: "translateY(30px)" },
        0
      )
      .addLabel("list-1-show")
      .from(
        [$damuWorksList[3], $damuWorksList[4], $damuWorksList[5]],
        0.6,
        { opacity: 0, transform: "translateY(30px)" },
        "list-1-show+=0.2"
      );
  }

  function itemFadeIn() {
    $fadeInItem.each(function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = scrollTop + windowHeight;

      if (bottom_of_window > bottom_of_object - 150) {
        $(this).addClass("item-show");
        $(".item-hide").addClass("item-show");
      }
    });
    $(".item-fade-early").each(function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = scrollTop + windowHeight;

      if (bottom_of_window > bottom_of_object - 500) {
        $(this).addClass("item-show");
      }
    });
  }

  function itemLineUp() {
    $lineUpItem.each(function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = scrollTop + windowHeight;

      if (bottom_of_window > bottom_of_object - 150) {
        $(this)
          .find(".item-line")
          .addClass("item-show");
      }
    });
  }

  // 스크롤 이벤트 정의
  $(window).on("load scroll", function() {
    scrollTop = $(window).scrollTop();
    windowHeight = $(window).height();
    itemFadeIn();
    itemLineUp();
  });
});
