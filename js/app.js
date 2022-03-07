$(document).ready(function () {
 $(".work__accordeon-item-top").on("click", function () {
  const $this = $(this),
   accordeonBottom = $(".work__accordeon-item-bottom");
  $this.siblings(accordeonBottom).is(":visible") ? ($(".work__accordeon-item-top").removeClass("active"), accordeonBottom.slideUp(300)) : ($(
   ".work__accordeon-item-top").removeClass("active"), $this.addClass("active"), accordeonBottom.slideUp(300), $this.siblings(accordeonBottom).slideDown(
   300));
 });

 setTimeout(() => {
  const owlNav = $('.owl-carousel .owl-nav');
  const element = document.createElement('div');
  $(element).addClass('testimonials__num').html('<span>01</span> <img src="img/num-line.png" alt="Mediabsolute"> 04').appendTo(owlNav);
 }, 10);

 const sliderData = [{
   num: '01'
  },
  {
   num: '02'
  },
  {
   num: '03'
  },
  {
   num: '04'
  }
 ]

 $(".owl-carousel").owlCarousel({
  items: 1,
  nav: true,
  navText: ["<div class='wrap-left'><img src='img/ellipse.svg'><img class='arrow__left' src='img/arrow-left.svg'></div>", "<div class='wrap-right'><img src='img/ellipse.svg'><img class='arrow__right' src='img/arrow-right.svg'></div>"],
 });

 $(".owl-carousel").on('changed.owl.carousel', function (event) {
  let num = $('.testimonials__num span');
  const selectNum = sliderData[event.page.index];
  num.text(selectNum.num)
 });

 $("[data-scroll]").on("click", function (event) {
  event.preventDefault();

  let $this = $(this),
   blockId = $this.data('scroll'),
   blockOffset = $(blockId).offset().top;

  $("html, body").animate({
   scrollTop: blockOffset - 50
  }, 500);
 });

 $(".menu").on("click", function (event) {
  event.preventDefault();

  $(".menu__wrapper").css({
   visibility: 'visible'
  });
  $(".menu__container").toggleClass('active');

  setTimeout(() => {
   $(".menu__nav ul li:eq(0)").fadeTo('1000', 1, function () {
    $(this).next().fadeTo('1000', 1, arguments.callee);
   });
   $(".menu__footer").toggleClass('active');
   $(".menu__header").toggleClass('opacityheader');
  }, 1000);
 });

 $(".menu__nav ul li").on("click", function () {
  $(".menu__wrapper").css({
   visibility: 'hidden'
  });
  $(".menu__container").removeClass('active');
  $(".menu__nav ul li").css({
   opacity: '0'
  });
  $(".menu__footer").removeClass('active');
  $(".menu__header").removeClass('opacityheader');
 })

 $(".menu__nav-right").on("click", function () {
  $(".menu__wrapper").css({
   visibility: 'hidden'
  });
  $(".menu__container").removeClass('active');
  $(".menu__nav ul li").css({
   opacity: '0'
  });
  $(".menu__footer").removeClass('active');
  $(".menu__header").removeClass('opacityheader');
 })

 $('.apply__form').on('click', function (e) {
  e.preventDefault();
  $('.modal').fadeIn();
 })

 $('.modal__close').on('click', function (e) {
  $('.modal').hide();
 })

 let arrowFirst = $('.work__block-arrow');
 let arrowSecond = $('.contact__block-arrow');
 let counter = 0;

 $(window).scroll(function () {
  let scroll = $(window).scrollTop() + $(window).height();
  if (arrowFirst.length) {
   let offset = arrowFirst.offset().top;
   let offsetSecond = arrowSecond.offset().top;

   if (scroll > (offset + 250) && counter == 0) {
    $('.work__block-arrow').animate({
     textIndent: 0
    }, {
     step: function (now) {
      $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
     },
     duration: 'slow'
    }, 'linear');
   }

   if (scroll > (offsetSecond + 300) && counter == 0) {
    $('.contact__block-arrow').animate({
     textIndent: 0
    }, {
     step: function (now) {
      $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
     },
     duration: 'slow'
    }, 'linear');
   }

   let topOfElement = $(".opportunity").offset().top;
   let bottomOfElement = $(".opportunity").offset().top + $(".opportunity").outerHeight();
   let topOfScreen = $(window).scrollTop();

   if ((topOfScreen >= topOfElement) && (topOfScreen < bottomOfElement)) {
    $('.main__logo svg path').css({
     fill: '#FFDB01'
    })
    $('.main__logo-text').css({
     color: '#FFDB01'
    })
    $('.menu__text').css({
     color: '#FFDB01'
    })
    $('.arrow__down path').attr({
     stroke: '#FFDB01'
    })
   } else {
    $('.main__logo svg path').css({
     fill: '#232323'
    })
    $('.main__logo-text').css({
     color: '#000000'
    })
    $('.menu__text').css({
     color: '#000000'
    })
    $('.arrow__down path').attr({
     stroke: '#000000'
    })
   }
  }
 });
});