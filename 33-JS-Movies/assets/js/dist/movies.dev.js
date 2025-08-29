"use strict";

var API_KEY = '395e2453';
var API_KEY_TMDB = '38b45ed5fa06954a0aeefd258bb8860c';
var baseURL = 'https://api.themoviedb.org/3/';
var IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';
var options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGI0NWVkNWZhMDY5NTRhMGFlZWZkMjU4YmI4ODYwYyIsIm5iZiI6MTc1NTk0OTY2Ny4zNDIwMDAyLCJzdWIiOiI2OGE5YWE2M2I1YTFiMThhMTk2NmZjZWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Amay3DD7G_Ot0fU-05P3xEE1EqH8MTjnclXRIBFFvUE'
  }
};

function searchMovie(search) {
  var type,
      year,
      language,
      baseURL,
      params,
      response,
      data,
      _args = arguments;
  return regeneratorRuntime.async(function searchMovie$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          type = _args.length > 1 && _args[1] !== undefined ? _args[1] : "movie";
          year = _args.length > 2 && _args[2] !== undefined ? _args[2] : '';
          language = _args.length > 3 && _args[3] !== undefined ? _args[3] : 'en-US';
          baseURL = "https://api.themoviedb.org/3/search/".concat(type);
          params = new URLSearchParams({
            query: encodeURIComponent(search),
            include_adult: 'false',
            page: '1',
            language: language
          });

          if (year) {
            params.append('year', year);
          }

          _context.next = 8;
          return regeneratorRuntime.awrap(fetch("".concat(baseURL, "?").concat(params.toString()), options));

        case 8:
          response = _context.sent;
          _context.next = 11;
          return regeneratorRuntime.awrap(response.json());

        case 11:
          data = _context.sent;
          console.log(data);

          if (!(!data.results || data.results.length === 0)) {
            _context.next = 16;
            break;
          }

          showToast('Нічого не знайдено');
          return _context.abrupt("return");

        case 16:
          showMoviesList(data.results);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  });
}

function showMoviesList(movies) {
  var list = '';
  movies.forEach(function (movie) {
    var title = movie.title || movie.name || "No title";
    var year = (movie.release_date || movie.first_air_date || "").slice(0, 4);
    var poster = movie.poster_path;
    var id = movie.id;
    var type = movie.media_type;
    list += "\n        <div class=\"card\">\n            <img src=\"".concat(IMAGE_BASE).concat(poster, "\" class=\"card-img-top\" alt=\"").concat(title, "\" onerror=\"this.src = 'assets/images/no-img.png'\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">").concat(title, "</h5>\n                <p class=\"card-text\"><b>Year: </b>").concat(year, "</p>\n                <button href=\"#\" class=\"btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#myModal\" data-tmdb-id=").concat(id, " data-tmdb-type=").concat(type, ">Detailed</button>\n            </div>\n            </div>\n        ");
  });
  document.getElementById('movies-list').innerHTML = list;
}

var form = document.getElementById('search-form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var search = document.getElementById('search-inp').value.trim();
  var type = document.getElementById('type').value;
  var year = document.getElementById('year').value;

  if (search === '') {
    return showToast('Enter movie name for search');
  }

  searchMovie(search, type, year);
});
document.getElementById('year').setAttribute('max', new Date().getFullYear());
/*Модальне вікно*/

function getDetailed(tmdbID, type) {
  var response, data, title, overview, date;
  return regeneratorRuntime.async(function getDetailed$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch("".concat(baseURL).concat(type, "/").concat(tmdbID, "?api_key=").concat(API_KEY_TMDB)));

        case 2:
          response = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          data = _context2.sent;
          console.log(data);
          title = data.title || data.name || "Unknown title";
          overview = data.overview || "Опис недоступний";
          date = data.release_date || data.first_air_date || "Дата невідома";
          updateModalContent(title, overview, date);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  });
}

var modalElement = document.getElementById('myModal');
modalElement.addEventListener('show.bs.modal', function (e) {
  var button = e.relatedTarget;
  var tmdbID = button.getAttribute('data-tmdb-id');
  var type = button.getAttribute('data-tmdb-type');

  if (tmdbID) {
    getDetailed(tmdbID, type);
  }
});
var myModal = new bootstrap.Modal(modalElement, {
  keyboard: true,
  backdrop: 'static'
});

function updateModalContent(titleText, overviewText) {
  var releaseDate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'N/A';
  var modalTitle = document.getElementById('modalLabel');
  var modalBody = document.getElementById('modal-body');
  modalTitle.innerText = titleText;
  modalBody.innerHTML = "\n    <p>".concat(overviewText, "</p>\n    <p><b>Release date:</b> ").concat(releaseDate, "</p>\n    ");
}
/*Toasts*/


function showToast(message) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;
  var toastEl = document.getElementById('movieToast');
  var toastBody = toastEl.querySelector('.toast-body');
  toastBody.textContent = message;
  var toast = bootstrap.Toast.getOrCreateInstance(toastEl, {
    delay: delay,
    autohide: true
  });
  toast.show();
}