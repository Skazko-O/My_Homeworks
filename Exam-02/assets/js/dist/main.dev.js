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
  /*--MAP--*/

  var mapLink = document.getElementById("load-map-link");

  mapLink.onclick = function (e) {
    e.preventDefault();
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'assets/js/plugins/leaflet/leaflet.css');
    document.head.append(link);
    var script = document.createElement('script');
    script.src = 'assets/js/plugins/leaflet/leaflet.js';
    script.onload = initMap;
    document.body.append(script);
  };

  var initMap = function initMap() {
    mapLink.remove();
    var map = L.map('map').setView([40.680713598195986, -73.90616447480521], 13);
    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
    }).addTo(map);
    var customIcon = L.icon({
      iconUrl: 'assets/images/pin.svg',
      iconSize: [106, 106],
      iconAncor: [53, 106]
    });
    L.marker([40.680713598195986, -73.90616447480521], {
      icon: customIcon
    }).addTo(map).bindPopup('Get in Touch!');
  };
});