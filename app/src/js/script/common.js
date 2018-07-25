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
