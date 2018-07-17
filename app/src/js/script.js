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
    // $(".item-fade-damu").each(function(i) {
    //   var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    //   var bottom_of_window = scrollTop + windowHeight;

    //   if (bottom_of_window > bottom_of_object - 500) {
    //     $(this).addClass("item-show");
    //   }
    // });
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
  function isInViewPort(elem) {
    var top_of_element = $(elem).offset().top;
    var bottom_of_element = $(elem).offset().top + $(elem).outerHeight();
    var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
    var top_of_screen = $(window).scrollTop();

    if (
      bottom_of_screen > top_of_element &&
      top_of_screen < bottom_of_element
    ) {
      $(elem).addClass("item-show");
      return true;
    }
  }

  // 스크롤 이벤트 정의
  $(window).on("load scroll", function() {
    scrollTop = $(window).scrollTop();
    windowHeight = $(window).height();
    itemFadeIn();
    itemLineUp();
    isInViewPort(".item-fade-damu");
  });
});

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

var $wrap = $(".wrap");
var $body = $("body");
var $popup = $(".popup");

//[*] 스크롤바 너비 구하는 함수
var scrollBarWidth = function() {
  document.body.style.overflow = "hidden";
  var width = document.body.clientWidth;
  document.body.style.overflow = "scroll";
  width -= document.body.clientWidth;
  if (!width) width = document.body.offsetWidth - document.body.clientWidth;
  document.body.style.overflow = "";
  return width;
};

// [*] 스크롤 막는 함수
var preventScroll = function() {
  $wrap.css({ "padding-right": scrollBarWidth() });
  $body.addClass("noScroll");
};

// [*] 스크롤 허용하는 함수
var allowScroll = function() {
  $wrap.removeAttr("style");
  $body.removeClass("noScroll");
};

// [*] 팝업창 여는 함수
var openPopup = function(target) {
  switch (target) {
    case "damu":
      var $popup = $(".popup-damu");
      break;

    case "dsc":
      var $popup = $(".popup-dsc");
      break;

    case "proz":
      var $popup = $(".popup-proz");
      break;
  }
  preventScroll();
  $(".popup").show();

  if (target == "dsc") {
    setTimeout(function() {
      $popup.children(".popup-dim").removeClass("hide");
      _tl_animatePopup.play();
    }, 800);
    return false;
  }

  $popup.children(".popup-dim").removeClass("hide");
  _tl_animatePopup.play();
};

// [*] 팝업창 닫는 함수
var closePopup = function() {
  _tl_animatePopup.reverse();
  setTimeout(function() {
    allowScroll();
    $popup.hide();
  }, 400);
};

var invisible = function() {
  $(".popup-dim").addClass("hide");
  _tl_animatePopup.reverse();
};

var _tl_animatePopup = new TimelineMax({
  paused: true,
  onReverseComplete: invisible
});

// _tl_animatePopup
//   .add(
//     TweenMax.from(".popup-dim", 0.2, {
//       css: { opacity: 0 }
//       // ease: TimelineMax.easeOut
//     })
//   )
//   .add(
//     TweenMax.from(".popup-area", 0.4, {
//       css: {
//         opacity: 0,
//         transform: "translateY(100px)",
//         ease: TimelineMax.easeOut
//       },
//       ease: TimelineMax.easeOut
//     })
//   );
// 07-17 14:20 성능저하 문제로 막아둠, 성능 확인 후 수정할 예정

_tl_animatePopup.add(
  TweenMax.from(".popup-dim", 0.2, {
    css: { opacity: 0 }
  })
);

var popupEvent = function() {
  var $popup = $(".popup");
  var $popup_area = $popup.find(".popup-area");
  var $popup_dim = $popup.find(".popup-dim");
  var $popup_button_close = $(".popup-button-close");
  var $popup_link = $("a[data-link-popup]");

  //[*] 팝업닫기
  $popup_button_close.on("click", function(e) {
    e.preventDefault();
    closePopup();
  });

  //[*] dim으로 팝업닫기
  $popup_dim.on("click", function(e) {
    e.preventDefault();
    closePopup();
  });

  //[*] 팝업열기
  $popup_link.on("click", function(e) {
    e.preventDefault();
    var link = $(this).data("link-popup");
    openPopup(link);
  });

  //[*] 콘텐츠 눌렀을 때 버블링 방지
  $popup_area.on("click", function(e) {
    e.stopPropagation();
  });

  //[*] 초기 팝업 숨기기
  $(".popup").hide();
};

var dscPopupEvent = function() {
  //닥터심슨 팝업 전용 이벤트
};

// var appendPopupEvent = function() {
//   //팝업 삽입

//   var $wrap = $(".wrap");
//   var commonPopupHtml = "";
//   var popupType = ["damu", "dsc", "proz"];

//   commonPopupHtml += '<div class="popup popup-' + popupType[0] + '">';
//   commonPopupHtml += '<div class="popup-dim hide">';
//   commonPopupHtml += '<div class="popup-area">';
//   commonPopupHtml += '<article class="popup-contents">';
//   commonPopupHtml +=
//     '<div class="swiper-container popup-slide-damu-container">';
//   commonPopupHtml += "</div>";
//   commonPopupHtml += "</article>";
//   commonPopupHtml += "</div>";
//   commonPopupHtml += "</div>";
//   commonPopupHtml += "</div>";
//   $wrap.append(commonPopupHtml);
// };

$(window).on("load", function() {
  popupEvent();
  // damuPopupEvent();
});

// *****************
// *** 비주얼 영역 슬라이드
var visualSwiper = new Swiper(".visual-slide", {
  // Optional parameters
  loop: true,
  touchRatio: 0,

  // pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },

  // autoplay
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
});
// *****************

// *****************
// *** 서비스 영역 슬라이드
var serviceSwiperDuration = 8000;
var serviceSwiper = new Swiper(".service-slide", {
  // Optional parameters
  loop: true,
  touchRatio: 0,
  // navigation
  navigation: {
    nextEl: ".service-button-next",
    prevEl: ".service-button-prev"
  },

  // autoplay
  autoplay: {
    delay: serviceSwiperDuration,
    disableOnInteraction: false,
    autoplayDisableOnInteraction: false
  },
  autoplayDisableOnInteraction: false,

  // pagination: {
  //   el: ".service-slide-pagination",
  //   type: "progressbar"
  // },
  watchSlidesProgress: true
});
// *****************

// ------------------
//서비스 영역 슬라이드 이벤트는 모두 여기에 정의
var serviceSlideEvent = function() {
  //변수 선언
  var $pagination_current = $(".pagination-text.current");
  var $pagination_entire = $(".pagination-text.entire");
  var progressBar = new TimelineMax();
  var _tl_pagination = new TimelineMax();

  //프로그레스바 타임라인 정의
  progressBar
    .from(
      ".service-slide-progress .line", //대상
      8, //시간
      { width: 0, ease: Linear.easeNone }, //0프레임일 때 사항
      0
    )
    .timeScale(1);

  //페이지네이션 타임라인 정의

  var counter = $(".service-slide-counter");
  var currentCount = $('<span class="count">1<span/>');
  counter.append(currentCount);

  function paginationUpdate() {
    var index = serviceSwiper.realIndex + 1,
      $current = $(".service-slide").eq(index),
      dur = 0.8;

    var prevCount = $(".count");
    currentCount = $('<span class="count next">' + index + "<span/>");
    currentCount.appendTo(counter);
    TweenLite.to(prevCount, dur, {
      y: -12,
      opacity: 0,
      onCompleteParams: [prevCount],
      onComplete: function(prevCount) {
        prevCount.remove();
      },
      ease: Power2.easeOut
    });
    TweenLite.fromTo(
      currentCount,
      dur,
      {
        y: 12,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        ease: Power2.easeOut
      }
    );
  }

  //전체 슬라이드 개수 표시
  $pagination_entire.text(serviceSwiper.slides.length - 2);

  //슬라이드 바뀔 때마다 페이지네이션 숫자 변경 및 프로그레스바 리셋
  serviceSwiper.on("slideChange", function() {
    var slideIndex = serviceSwiper.realIndex;
    // $pagination_current.text(slideIndex + 1);
    paginationUpdate();
    progressBar.restart();
  });
}; //end of serviceSlideEvent();
// ------------------

// *****************
// *** 어바웃 영역 슬라이드 이벤트
// last updated: 18-07-15 (리팩토링 필요함!!!)
var aboutSlideEvent = function() {
  //셀렉터 변수
  var $aboutSlideButton = $("button.about-story-button");
  var $aboutSlide = $(".about-slide");
  var aboutSlideIndex = 0;
  var aboutSlideLength = 2;

  var $list1 = $(".story-list-1");
  var $list2 = $(".story-list-2");
  var $list3 = $(".story-list-3");
  var $list4 = $(".story-list-4");
  var $logo = $(".about-slide .logo");
  var $logoLine = $(".about-slide-line");
  var $listAll = $(".story-text-list");

  //콘텐츠 내용 담을 변수
  var aboutSlideConents = {
    logo: ["damu", "dsc", "proz"],
    list_1: {
      title: [],
      text: []
    },
    list_2: {
      title: [],
      text: []
    },
    list_3: {
      title: [],
      text: []
    },
    list_4: {
      title: [],
      text: []
    }
  };

  //어바웃 영역 슬라이드의 내용을 배열로 만듦
  var getAboutSlideContents = function() {
    //[1] .story-list-1의 정보 가져오기
    $list1.each(function(i) {
      // 1) strong 가져오기
      aboutSlideConents.list_1.title[i] = $(this)
        .find("strong")
        .html();

      // 2) p 가져오기
      aboutSlideConents.list_1.text[i] = $(this)
        .find("p")
        .html();
    });

    //[2] .story-list-2의 정보 가져오기
    $list2.each(function(i) {
      // 1) strong 가져오기
      aboutSlideConents.list_2.title[i] = $(this)
        .find("strong")
        .html();

      // 2) p 가져오기
      aboutSlideConents.list_2.text[i] = $(this)
        .find("p")
        .html();
    });

    //[3] .story-list-3의 정보 가져오기
    $list3.each(function(i) {
      // 1) strong 가져오기
      aboutSlideConents.list_3.title[i] = $(this)
        .find("strong")
        .html();

      // 2) p 가져오기
      aboutSlideConents.list_3.text[i] = $(this)
        .find("p")
        .html();
    });

    //[4] .story-list-4의 정보 가져오기
    $list4.each(function(i) {
      // 1) strong 가져오기
      aboutSlideConents.list_4.title[i] = $(this)
        .find("strong")
        .html();

      // 2) p 가져오기
      aboutSlideConents.list_4.text[i] = $(this)
        .find("p")
        .html();
    });
  };

  //슬라이드 업데이트 함수
  var updateAboutSlide = function(index) {
    index == 2 ? $list4.addClass("list-hide") : $list4.removeClass("list-hide");

    $logo.removeClass("updated");
    $listAll.removeClass("updated");
    $logoLine.find("span").removeClass();

    $list1.find("strong").html(aboutSlideConents.list_1.title[index]);
    $list1.find("p").html(aboutSlideConents.list_1.text[index]);
    $list2.find("strong").html(aboutSlideConents.list_2.title[index]);
    $list2.find("p").html(aboutSlideConents.list_2.text[index]);
    $list3.find("strong").html(aboutSlideConents.list_3.title[index]);
    $list3.find("p").html(aboutSlideConents.list_3.text[index]);
    $list4.find("strong").html(aboutSlideConents.list_4.title[index]);
    $list4.find("p").html(aboutSlideConents.list_4.text[index]);

    setTimeout(function() {
      $logo
        .attr("data-logo", aboutSlideConents.logo[index])
        .addClass("updated");
    }, 120);

    setTimeout(function() {
      $logoLine.find("span").addClass(aboutSlideConents.logo[index]);
    }, 320);

    setTimeout(function() {
      $listAll.addClass("updated");
    }, 800);
  };

  //슬라이드 정보 동적 삽입
  getAboutSlideContents();
  //초기 슬라이드 정보 업데이트
  updateAboutSlide(aboutSlideIndex);

  $aboutSlideButton.on("click", function() {
    aboutSlideIndex < aboutSlideLength
      ? aboutSlideIndex++
      : (aboutSlideIndex = 0);
    updateAboutSlide(aboutSlideIndex);
  });
};
// *****************

// *****************
// *** 팝업 슬라이드 (디어뮤)
var popupDamuSwiper = new Swiper(".popup-slide-damu-container", {
  // Optional parameters
  loop: true,
  touchRatio: 0,

  // navigation
  navigation: {
    nextEl: ".popup-damu-button-next",
    prevEl: ".popup-damu-button-prev"
  }
});
// *****************
// *****************
// *** 팝업 슬라이드 (닥터심슨)
var popupDscSwiper = new Swiper(".popup-slide-dsc-container", {
  // Optional parameters
  loop: true,
  touchRatio: 0,

  // navigation
  navigation: {
    nextEl: ".popup-dsc-button-next",
    prevEl: ".popup-dsc-button-prev"
  }
});
// *****************

// *****************
// *** DSC 휘리릭 슬라이드
var dscWorksSwiper = new Swiper(".dsc-slide", {
  // Optional parameters
  // loop: true,
  slidesPerView: "auto",
  // spaceBetween: -90,
  spaceBetween: -80,
  // spaceBetween: 50,
  centeredSlides: true,
  speed: 800,
  touchRatio: 0,
  // slideToClickedSlide: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

function dscWorksSlideEvent() {
  var $dscPopupCloseButton = $(".popup-dsc .popup-button-close");
  var $dscPopupDim = $(".popup-dsc .popup-dim");
  var $dscSlideItem = $(".dsc-slide-item");
  var length = $(".dsc-slide-item").length;
  var idx = Math.ceil(length / 2); //전체 개수의 절반으로 설정
  var isOnGoing = false; //애니메이션 진행중일 때 m클릭 방지

  var addClassActive = function() {
    $dscSlideItem.eq(idx).addClass("active");
  };

  var addClassLeft = function() {
    $dscSlideItem
      .eq(idx)
      .nextAll()
      .addClass("left");
  };

  dscWorksSwiper.slideTo(idx, 800); //초기 슬라이드로 이동
  addClassActive(); //초기 설정
  addClassLeft(); //초기 설정

  //클릭 시 이벤트
  $dscSlideItem.on("click", function(e) {
    if (isOnGoing) {
      return;
    }

    isOnGoing = true;

    idx = $dscSlideItem.index($(this));
    // console.log("idx", idx);

    $dscSlideItem.removeClass("active left");

    setTimeout(function() {
      dscWorksSwiper.slideTo(idx, 800, addClassLeft());
    }, 450);

    setTimeout(function() {
      addClassActive();
      isOnGoing = false;
    }, 800);
  });

  $dscPopupCloseButton.add($dscPopupDim).on("click", function() {
    if (idx !== popupDscSwiper.realIndex) {
      idx = popupDscSwiper.realIndex;
      $(".dsc-slide-item").removeClass("active left");
      dscWorksSwiper.slideTo(idx, 800);
      addClassActive();
      addClassLeft();
    }
  });
}
// *****************

var popupSlideEvent = function() {
  console.log("~");
  $(".popup-damu-button-next").on("click", function() {
    console.log("next!");
  });
};

var damuPopupSlideEvent = function() {
  //디어뮤 팝업 전용 이벤트

  var $damuSlide = $(".popup-damu .popup-slide");
  var $damuItem = $(".damu-works-item a");
  var slideHTML =
    '<div class="swiper-slide popup-slide">여기에 정보가 들어갑니다.</div>';

  //아이템 클릭 시
  $damuItem.on("click", function(e) {
    e.preventDefault();
    var idx = 0;

    idx = $damuItem.index($(this));
    // $damuSlide
    //   .eq(idx)
    //   .text(idx + 1 + "번째 아이템 정보가 여기에 들어갑니다ㅏㅏ");
    // console.log("idx=", idx);
    // console.log("popupDamuSwiper.activeIndex", popupDamuSwiper.activeIndex);
  });

  //다음 버튼 클릭 시
  $(".popup-damu-button-next").on("click", function() {
    // popupDamuSwiper.prependSlide(slideHTML);
  });
};

// ------------------
// 윈도 로드 시 이벤트 정의
$(window).on("load", function() {
  aboutSlideEvent();
  serviceSlideEvent();
  dscWorksSlideEvent();
  damuPopupSlideEvent();
});
// ------------------

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
