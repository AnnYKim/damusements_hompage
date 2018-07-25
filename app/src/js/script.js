//그 외 애니메이션 정의

// function makeNewPosition($container) {
//   // Get viewport dimensions (remove the dimension of the div)
//   var h = $container.height() - 0;
//   var w = $container.width() - 0;

//   var nh = Math.floor(Math.random() * h);
//   var nw = Math.floor(Math.random() * w);

//   return [nh, nw];
// }

// function animateDiv($target) {
//   var newq = makeNewPosition($target.parent());
//   var oldq = $target.offset();
//   // var speed = calcSpeed([oldq.top, oldq.left], newq);
//   var speed = 25000;

//   $target.animate(
//     {
//       top: newq[0],
//       left: newq[1]
//     },
//     speed,
//     function() {
//       animateDiv($target);
//     }
//   );
// }

// function calcSpeed(prev, next) {
//   var x = Math.abs(prev[1] - next[1]);
//   var y = Math.abs(prev[0] - next[0]);

//   var greatest = x > y ? x : y;

//   var speedModifier = 0.1;

//   var speed = Math.ceil(greatest / speedModifier);

//   return speed;
// }

// $(window).on("load", function() {
//   animateDiv($(".deco-icon-collaboration"));
//   animateDiv($(".deco-icon-diversity"));
// });

//너무 버벅거려서 CSS로 변경
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

//섹션의 위치값
var sectionTop = [1960, 4571, 6277, 7283, 8263];
var $section = $(".has-menu");
var currentScroll = 0;

$(function() {
  //header js

  var $header = $("#header");
  var $navMenu = $header.find(".nav-menu");

  var headerHeight = 0; //header의 높이

  //섹션의 위치 구하는 함수
  var getSectionTop = function() {
    $section.each(function(idx) {
      sectionTop[idx] = Math.ceil($(this).offset().top);
    });
    console.log(sectionTop);
  };

  // 페이지 스크롤 함수
  var pageScroll = function(where, anim) {
    var $body = $("html, body");
    if (anim == null) {
      $body.stop().animate(
        {
          scrollTop: where
        },
        800
      );
    } else {
      $body.stop().animate(
        {
          scrollTop: where
        },
        anim
      );
    }
  };

  // 로고 클릭 시 맨 위로 이동 함수
  var clickHeaderLogo = function() {
    var $headerLogo = $header.find(".header-logo");

    $headerLogo.on("click", function(e) {
      e.preventDefault();
      pageScroll(0);
    });
  };

  // 헤더 메뉴 클릭 시 해당 섹션으로 이동하는 함수
  var scrollToSection = function() {
    $navMenu.on("click", function(e) {
      e.preventDefault();

      var idx = $navMenu.index($(this));
      //만약 스크롤이 980미만이라면 새로 구하지 않고 사용
      if (currentScroll <= 980) {
        sectionTop = [1960, 4571, 6277, 7283, 8263];
      } else {
        getSectionTop();
      }
      var position = sectionTop[idx] - headerHeight;
      pageScroll(position);
    });
  };

  //로딩 이미지 제거하는 함수
  var removeLoading = function() {
    $(".loading").fadeOut(1300);
  };

  ///////////////////
  //다무 모어버튼

  var $damuMoreButton = $(".damu-btn-more");
  var $damuWorksItem = $(".damu-works-item");
  var $damuWorksItem_hide = $(".damu-works-item.hide");
  var $damuWorksItem_show = $(".damu-works-item.show");
  var $damuPopupSlideWrapper = $(".popup-damu .popup-silde-damu-wrapper");
  var $damuPopupSlideItem_hide = $(".popup-damu .hidden-slide");

  // more 버튼 누르면 숨김처리 해제
  $damuMoreButton.on("click", function() {
    for (var i = 0; i < 3; i++) {
      $damuWorksItem_hide
        .eq(i)
        .removeClass("hide")
        .addClass("show");
    }
    $damuWorksItem_hide = $(".damu-works-item.hide");

    appendDamuPopupSlide(3);

    if (!$damuWorksItem_hide.length) {
      $damuMoreButton.addClass("disabled");
    }
  });

  var appendDamuPopupSlide = function(num) {
    //팝업 슬라이드를 추가하는 함수
    var $popupLists = $(".additional-damu-popup"); //팝업 슬라이드를 가져올 리스트
    var nowItemNumber = num; //현재 화면상에 나타나는 아이템의 개수. 최초 6, 이후 more 클릭 시 3씩 증가함

    var damuItemLength = $damuWorksItem.length; //디어뮤 슬라이드 총 개수. 우선은 14개임.

    var targetNum = damuItemLength - nowItemNumber;

    // 타겟넘버만큼 잘라서 타겟으로 지정
    var $target = $popupLists.children(":lt(" + nowItemNumber + ")");
    // 타겟을 옮겨버림
    popupDamuSwiper.appendSlide($target);
    popupDamuSwiper.update();
  };

  //회사소개서 다운로드 함수
  var downloadLink = function(link) {
    var newWindow = window.open("about:blank");
    newWindow.location.href = link;
  };

  var $downloadButton = $(".download-introduction");
  $downloadButton.on("click", function(e) {
    e.preventDefault();
    downloadLink("files/damusements_introduction.pdf");
  });

  // 초기 이벤트 지정
  var initEvent = function() {
    headerHeight = Math.ceil($header.height());
    scrollToSection();
    clickHeaderLogo();
    appendDamuPopupSlide(6);

    setTimeout(function() {
      scroll(0, "noTransition"); //로드 시 최상단으로 자동 스크롤
      removeLoading(); //로딩 이미지 제거
    }, 300);
  };

  // 윈도 로드
  $(window).on("load", function() {
    initEvent();
    console.log(currentScroll);
  });

  $(window).scroll(function() {
    currentScroll = $(window).scrollTop();
  });
});

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
  $popup.show();

  // if (target == "dsc") {
  //   return false;
  // }

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
  speed: 800,

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
  speed: 800,
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
  var isOnGoing = false; //애니메이션 진행중일 때 클릭 방지

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
    e.preventDefault();
    if (isOnGoing) {
      return;
    }

    isOnGoing = true;

    idx = $dscSlideItem.index($(this));

    if (idx == dscWorksSwiper.realIndex) {
      //active 상태의 아이템 클릭 시 애니메이션 대신 팝업 띄움
      // console.log("idx는,", idx);
      popupDscSwiper.slideToLoop(idx, 0, openPopup("dsc"));
      // openPopup("dsc");
      isOnGoing = false;
      return false;
    }
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

var damuPopupSlideEvent = function() {
  //디어뮤 팝업 전용 이벤트

  var $damuItem = $(".damu-works-item a");

  //아이템 클릭 시
  $damuItem.on("click", function(e) {
    e.preventDefault();
    var idx = 0;

    idx = $damuItem.index($(this));
    //선택한 아이템으로 팝업 슬라이드 이동시킴
    popupDamuSwiper.slideToLoop(idx, 0);
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
});
