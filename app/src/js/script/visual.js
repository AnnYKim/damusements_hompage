$(function() {
  //[*] 비주얼 페이드인 이벤트
  var visualFadeInEvent = function() {
    var $visualTitle = $(".visual-title");
    var $visualLines = [];
    var $visualQuote = $visualTitle.find(".quote");
    var _tl_visualFadeIn = new TimelineMax({});

    $visualTitle.find("i").each(function(i) {
      $visualLines[i] = $(this);
    });

    _tl_visualFadeIn
      .staggerFrom(
        [$visualLines[0], $visualLines[1], $visualLines[2]],
        0.6,
        { opacity: 0, width: 0 },
        0.4 //간격
      )
      .addLabel("listShow")
      .from($visualQuote, 0.65, { opacity: 0 }, "listShow+=0.3");
  };

  $(window).on("load", function() {
    visualFadeInEvent();
  });
});
