"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  var sections = document.querySelectorAll('section');
  var navLinks = document.querySelectorAll('.nav-menu a');
  console.log(navLinks);
  window.addEventListener('scroll', function () {
    var current = '';
    sections.forEach(function (section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(function (link) {
      var circle = link.querySelector('.circle');
      if (circle) circle.classList.remove('active-header');

      if (link.getAttribute('href') === "#".concat(current)) {
        if (circle) circle.classList.add('active-header');
      }
    });
  });
  /*--LIGHTSLIDER-HERO--*/

  $("#slider-hero").lightSlider({
    item: 1,
    loop: true,
    controls: false,
    vertical: true,
    slideMargin: 0,
    responsive: [{
      breakpoint: 960,
      settings: {
        auto: true,
        enableTouch: false,
        enableDrag: false
      }
    }],
    onSliderLoad: function onSliderLoad(el) {
      var showActiveSlides = function showActiveSlides(entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
          }
        });
      };

      var imageWidth = el.find("li").outerWidth() + "px";
      var observer = new window.IntersectionObserver(showActiveSlides, {
        root: el.parent()[0],
        rootMargin: "0px " + imageWidth + " 0px " + imageWidth
      });
      el.find("li img").each(function () {
        observer.observe(this);
      });
    }
  });
  /*--LIGHTSLIDER-NEWS--*/

  fetch('assets/js/data/news.json') //викликає асинхронний запит до файлу. Повертає проміс
  .then(function (response) {
    return response.json();
  }) //перетворення відповіді у json масив
  .then(function (data) {
    //data - масив
    console.log(data);
    var container = document.querySelector('.slider-news');
    data.forEach(function (item) {
      var formattedDate = formatDate(item.date);
      var maxChars = 90;
      var summaryText = item.summary.trim();
      var truncatedSummary = summaryText.length <= maxChars ? summaryText + '...' : summaryText.slice(0, maxChars) + '...';
      var card = document.createElement('li');
      card.className = 'news-card';
      card.innerHTML = "\n                <a href=\"#\">\n                 <div class=\"img-wrapper-news\">\n                  <img class=\"lazy\"\n                  src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=\"\n                  data-src=\"".concat(item.image, "\" alt=\"").concat(item.alt, "\">\n                </div>\n                <div class=\"content-news\">\n                  <h4>").concat(item.title, "</h4>\n                  <p class=\"summary\">").concat(truncatedSummary, "\n                  </p>\n                  <div class=\"news-content-footer\">\n                    <div class=\"avatar-wrapper\">\n                      <img class=\"lazy\" \n                      src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=\"\n                      data-src=\"").concat(item.avatar, "\">\n                    </div>\n                    <div class=\"author-date\">\n                      <p class=\"ful-name\">\n                        ").concat(item.author, "\n                      </p>\n                      <time datetime=\"").concat(item.date, "\">").concat(formattedDate, "</time>                      \n                    </div>\n                  </div>\n                </div>\n                </a>");
      container.appendChild(card);
    });
    var sliderProduct = $("#slider-news").lightSlider({
      item: 3,
      loop: true,
      slideMargin: 40,
      controls: false,
      auto: true,
      pause: 4000,
      speed: 600,
      pauseOnHover: true,
      responsive: [{
        breakpoint: 1400,
        settings: {
          item: 2,
          slideMove: 1,
          slideMargin: 20
        }
      }, {
        breakpoint: 960,
        settings: {
          item: 1,
          slideMove: 1
        }
      }],
      onSliderLoad: function onSliderLoad(el) {
        var showActiveSlides = function showActiveSlides(entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.src = entry.target.dataset.src;
              observer.unobserve(entry.target);
            }
          });
        };

        var imageWidth = el.find("li").outerWidth() + "px";
        var observer = new window.IntersectionObserver(showActiveSlides, {
          root: el.parent()[0],
          rootMargin: "0px " + imageWidth + " 0px " + imageWidth
        });
        el.find("li img").each(function () {
          observer.observe(this);
        });
      }
    });
    $("#slider-prev").click(function () {
      return sliderProduct.goToPrevSlide();
    });
    $("#slider-next").click(function () {
      return sliderProduct.goToNextSlide();
    });
  })["catch"](function (error) {
    return console.error('Помилка завантаження JSON:', error);
  });
  /*--FORMAT DATE--*/

  function formatDate(dateStr) {
    var _dateStr$split = dateStr.split('.'),
        _dateStr$split2 = _slicedToArray(_dateStr$split, 3),
        day = _dateStr$split2[0],
        month = _dateStr$split2[1],
        year = _dateStr$split2[2];

    var dateObj = new Date("".concat(year, "-").concat(month, "-").concat(day));
    var options = {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    };
    return dateObj.toLocaleDateString('en-GB', options);
  }
  /*--LIGHTGALLERY*/


  fetch('assets/js/data/gallery.json').then(function (res) {
    return res.json();
  }).then(function (images) {
    var gallery = document.getElementById('lightgallery');
    images.forEach(function (item, index) {
      var a = document.createElement('a');
      a.href = item.src;
      a.classList.add("grid-pos-".concat(index + 1), 'gallery-item');
      var img = document.createElement('img');
      img.src = item.thumb;
      img.alt = item.alt;
      var overlay = document.createElement('div');
      var zoomIcon = document.createElement('div');
      overlay.className = 'overlay';
      zoomIcon.className = 'zoom-icon';
      zoomIcon.innerHTML = "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"70\" height=\"70\" viewBox=\"0 0 70 70\" fill=\"none\">\n     <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M28.4375 52.5C31.5974 52.5 34.7264 51.8776 37.6458 50.6684C40.5652 49.4591 43.2178 47.6867 45.4523 45.4523C47.6867 43.2178 49.4591 40.5652 50.6684 37.6458C51.8776 34.7264 52.5 31.5974 52.5 28.4375C52.5 25.2776 51.8776 22.1486 50.6684 19.2292C49.4591 16.3098 47.6867 13.6572 45.4523 11.4227C43.2178 9.18833 40.5652 7.4159 37.6458 6.20665C34.7264 4.9974 31.5974 4.375 28.4375 4.375C22.0557 4.375 15.9353 6.91015 11.4227 11.4227C6.91015 15.9353 4.375 22.0557 4.375 28.4375C4.375 34.8193 6.91015 40.9397 11.4227 45.4523C15.9353 49.9649 22.0557 52.5 28.4375 52.5ZM56.875 28.4375C56.875 35.9796 53.8789 43.2128 48.5458 48.5458C43.2128 53.8789 35.9796 56.875 28.4375 56.875C20.8954 56.875 13.6622 53.8789 8.32915 48.5458C2.99609 43.2128 0 35.9796 0 28.4375C0 20.8954 2.99609 13.6622 8.32915 8.32915C13.6622 2.99609 20.8954 0 28.4375 0C35.9796 0 43.2128 2.99609 48.5458 8.32915C53.8789 13.6622 56.875 20.8954 56.875 28.4375Z\" fill=\"white\"/>\n      <path d=\"M45.255 51.3714C45.3863 51.5464 45.5263 51.7126 45.6838 51.8745L62.5275 68.7182C63.3479 69.5392 64.4607 70.0006 65.6213 70.001C66.7818 70.0014 67.895 69.5408 68.7159 68.7204C69.5369 67.9001 69.9983 66.7872 69.9987 65.6267C69.9991 64.4661 69.5385 63.3529 68.7181 62.532L51.8744 45.6882C51.718 45.5299 51.5498 45.3836 51.3713 45.2507C49.655 47.5908 47.5927 49.6561 45.255 51.3757V51.3714Z\" fill=\"white\"/>\n    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M28.4375 13.125C29.0177 13.125 29.5741 13.3555 29.9843 13.7657C30.3945 14.1759 30.625 14.7323 30.625 15.3125V26.25H41.5625C42.1427 26.25 42.6991 26.4805 43.1093 26.8907C43.5195 27.3009 43.75 27.8573 43.75 28.4375C43.75 29.0177 43.5195 29.5741 43.1093 29.9843C42.6991 30.3945 42.1427 30.625 41.5625 30.625H30.625V41.5625C30.625 42.1427 30.3945 42.6991 29.9843 43.1093C29.5741 43.5195 29.0177 43.75 28.4375 43.75C27.8573 43.75 27.3009 43.5195 26.8907 43.1093C26.4805 42.6991 26.25 42.1427 26.25 41.5625V30.625H15.3125C14.7323 30.625 14.1759 30.3945 13.7657 29.9843C13.3555 29.5741 13.125 29.0177 13.125 28.4375C13.125 27.8573 13.3555 27.3009 13.7657 26.8907C14.1759 26.4805 14.7323 26.25 15.3125 26.25H26.25V15.3125C26.25 14.7323 26.4805 14.1759 26.8907 13.7657C27.3009 13.3555 27.8573 13.125 28.4375 13.125Z\" fill=\"white\"/>\n    </svg>\n  ";
      a.appendChild(img);
      a.appendChild(overlay);
      a.appendChild(zoomIcon);
      gallery.appendChild(a);
    });
    var lgInstance = lightGallery(gallery, {
      plugins: [lgZoom, lgThumbnail],
      licenseKey: '',
      speed: 500
    });
    document.getElementById('open-gallery').addEventListener('click', function () {
      lgInstance.openGallery(0);
    });
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
/*--HAMBURGER--*/

var toggleMenu = function toggleMenu() {
  document.body.classList.toggle('open-menu');
  document.body.classList.toggle('no-scroll');
};

window.addEventListener('resize', function (event) {
  console.log(event.target.outerWidth);

  if (event.target.outerWidth >= 980 && document.body.classList.contains('open-menu')) {
    document.body.classList.remove('open-menu');
  }
});
document.querySelectorAll('.menu-item').forEach(function (item) {
  item.addEventListener('click', function () {
    document.body.classList.remove('open-menu');
    document.body.classList.remove('no-scroll');
  });
});
/*--SEND TELEGRAM--*/

var form = document.getElementById('subscr');
var formInProgress = false;

form.onsubmit = function _callee(e) {
  var v_name, v_email, validateEmail, BOT_TOKEN, CHAT_ID, name, email, msg, resp, answer;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          e.preventDefault();

          if (!formInProgress) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return");

        case 3:
          // Validation
          v_name = document.getElementById("name").value;
          v_email = document.getElementById("email").value;

          if (!(v_name.trim() === "" || v_email.trim() === "")) {
            _context.next = 8;
            break;
          }

          toast.warning('Please fill out both Name and Email fields');
          return _context.abrupt("return");

        case 8:
          if (!(v_name === "")) {
            _context.next = 11;
            break;
          }

          toast.warning('Name field is required');
          return _context.abrupt("return");

        case 11:
          if (!(v_email === "")) {
            _context.next = 14;
            break;
          }

          toast.warning('Email field is required');
          return _context.abrupt("return");

        case 14:
          validateEmail = function validateEmail(v_email) {
            return String(v_email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
          };

          if (validateEmail(v_email)) {
            _context.next = 18;
            break;
          }

          toast.error('Please enter a valid email adress');
          return _context.abrupt("return");

        case 18:
          formInProgress = true;
          BOT_TOKEN = '8084021249:AAHeZSko2YVe8hZr49BgDMM0IXEOUn_Wt7o';
          CHAT_ID = '-4844723150';
          name = document.getElementById("name").value;
          email = document.getElementById("email").value;
          msg = "<b>Name: </b>".concat(name, "%0a") + "<b>Email :</b>".concat(email);
          _context.next = 26;
          return regeneratorRuntime.awrap(fetch("https://api.telegram.org/bot".concat(BOT_TOKEN, "/sendMessage?chat_id=").concat(CHAT_ID, "&parse_mode=html&text=").concat(msg)));

        case 26:
          resp = _context.sent;
          _context.next = 29;
          return regeneratorRuntime.awrap(resp.json());

        case 29:
          answer = _context.sent;

          if (answer.ok) {
            toast.success('You successfully subscribe');
            form.reset();
          } else {
            toast.error('Some error occurred');
          }

          formInProgress = false;

        case 32:
        case "end":
          return _context.stop();
      }
    }
  });
};
/*--LazyLoading--*/


var lazyLoadInstance = new LazyLoad();