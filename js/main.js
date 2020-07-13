$(function () {

  //start counter
  var show = true;
  var countbox = "#counter";
  $(window).on("scroll load resize", function () {

    if (!show) return false;

    var w_top = $(window).scrollTop();
    var e_top = $(countbox).offset().top;

    var w_height = $(window).height();
    var d_height = $(document).height();

    var e_height = $(countbox).outerHeight();

    if (w_top + 400 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
      $(".timer").spincrement({
        thousandSeparator: "",
        from: 1,
        duration: 4000
      });
      show = false;
    }
  });

  //end counter

  //start tabs

  $('.questions__tabs-box').on('click', function () {
    $(this).find('.questions__tab-item').slideToggle();
    $(this).find('.questions__tab').toggleClass('active');
  })

  //end tabs

  //start gallery  

  $('.works__items').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    fixedContentPos: false,
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {

    }
  });
  //end gallery


  //start reviews-slider

  var mySwiper = new Swiper('.reviews__items', {
    slidesPerView: 1,
    spaceBetween: 1200,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  //end reviews-slider

  //start price-tab
  $('.price__inner .price__tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.price__inner').find('.price__tab-item').removeClass('price__tab-item--active').hide();
    $('.price__inner .price__tabs').find('.price__tab').removeClass('price__tab--active');
    $(this).addClass('price__tab--active');
    $('#' + id).addClass('price__tab-item--active').fadeIn();
    return false;
  });
  //end price-tab


  //start before-after plugin

  $(".twentytwenty-container").twentytwenty({
    before_label: 'До', // Set a custom before label
    after_label: 'После',
  });
  // end before-after plugin


  //start form styler

  $('.contacts__form-file').styler();

  //end form styler


  $(".burger").click(function () {
    $(".burger").toggleClass("open");
    $('.header__menu-wrapper').slideToggle();
    $('.header__menu-list').slideToggle();
  })
  $(".header__menu-list").on('click', function () {
    $(".burger").toggleClass("open", false);
    $('.header__menu-wrapper').slideToggle();
    $('.header__menu-list').slideToggle();
  });

  // var scrollbegin = $(".header").height();
  // $('.header').height()
  var headerHeight = $('.header').height();
  $(window).scroll(function () {
    if ($(this).scrollTop() >= headerHeight) {
      $(".header__top-wrapper").addClass("background");
    } else {
      $(".header__top-wrapper").removeClass("background");
    }
  });

  //for active menu item
  // var sections = $('section')
  //   , nav = $('.header__top-wrapper')
  //   , nav_height = nav.outerHeight();

  // $(window).on('scroll', function () {
  //   var cur_pos = $(this).scrollTop();

  //   sections.each(function () {
  //     var top = $(this).offset().top - nav_height,
  //       bottom = top + $(this).outerHeight();

  //     if (cur_pos >= top && cur_pos <= bottom) {
  //       nav.find('.header__menu-link').removeClass('active');
  //       sections.removeClass('active');
  //       $(this).addClass('active');
  //       nav.find('.header__menu-link[href="#' + $(this).attr('id') + '"]').addClass('active');
  //     }
  //     if (cur_pos <= $('.header').height()) {
  //       nav.find('.header__menu-link').removeClass('active');
  //       sections.removeClass('active');
  //     }
  //   });
  // });

  // nav.find('.header__menu-link').on('click', function () {
  //   var $el = $(this)
  //     , id = $el.attr('href');

  //   $('html, body').animate({
  //     scrollTop: $(id).offset().top - nav_height
  //   }, 500);

  //   return false;
  // });


  //wow.js
  new WOW().init();

});
