"use strict";

$(document).ready(function () {
  /*--SCROLL--*/
  var headerScrolled = false;
  $(window).scroll(function () {
    var $logo = $('img.logo');

    if ($(window).scrollTop() > 100 && !headerScrolled) {
      $logo.attr('src', $logo.data('alt'));
      headerScrolled = true;
      $('.header-inner').addClass('scrolled');
    } else if ($(window).scrollTop() <= 100 && headerScrolled) {
      $logo.attr('src', 'assets/images/logo.png');
      headerScrolled = false;
      $('.header-inner').removeClass('scrolled');
    }
  });
  /*--LIGHTSLIDER*/

  $("#slider-hero").lightSlider({
    item: 1,
    loop: true,
    controls: false,
    vertical: true
  });
  var sliderProduct = $("#slider-news").lightSlider({
    item: 3,
    loop: true,
    slideMargin: 30,
    controls: false
  });
  $("#slider-prev").click(function () {
    return sliderProduct.goToPrevSlide();
  });
  $("#slider-next").click(function () {
    return sliderProduct.goToNextSlide();
  });
  /*--LIGHTGALLERY*/

  lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom, lgThumbnail],
    licenseKey: '',
    speed: 500
  });
});