"use strict";

var API_KEY = '395e2453';
var API_KEY_TMDB = '38b45ed5fa06954a0aeefd258bb8860c';

function searchMovie(search) {
  var type,
      year,
      response,
      data,
      _args = arguments;
  return regeneratorRuntime.async(function searchMovie$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          type = _args.length > 1 && _args[1] !== undefined ? _args[1] : '';
          year = _args.length > 2 && _args[2] !== undefined ? _args[2] : '';
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch("https://www.omdbapi.com/?apikey=".concat(API_KEY, "&s=").concat(search, "&type=").concat(type, "&y=").concat(year)));

        case 4:
          response = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context.sent;
          console.log(data);

          if (!(data.Response === "False")) {
            _context.next = 12;
            break;
          }

          alert("".concat(data.Error));
          return _context.abrupt("return");

        case 12:
          showMoviesList(data.Search);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
}

function showMoviesList(movies) {
  var list = '';
  movies.forEach(function (movie) {
    list += "\n        <div class=\"card\">\n            <img src=\"".concat(movie.Poster, "\" class=\"card-img-top\" alt=\"").concat(movie.Title, "\" onerror=\"this.src = 'assets/images/no-img.png'\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">").concat(movie.Title, "</h5>\n                <p class=\"card-text\"><b>Year: </b>").concat(movie.Year, "</p>\n                <button href=\"#\" class=\"btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#myModal\" data-imdb-id=").concat(movie.imdbID, ">Detailed</button>\n            </div>\n            </div>\n        ");
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
    return alert('Enter movie name for search');
  }

  searchMovie(search, type, year);
});
document.getElementById('year').setAttribute('max', new Date().getFullYear());
/*Модальне вікно*/

function getDetailed(imdbID) {
  var response, data, movie;
  return regeneratorRuntime.async(function getDetailed$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch("https://api.themoviedb.org/3/find/".concat(imdbID, "?external_source=imdb_id&api_key=").concat(API_KEY_TMDB)));

        case 2:
          response = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          data = _context2.sent;
          console.log(data);

          if (data.movie_results && data.movie_results.length > 0) {
            movie = data.movie_results[0];
            updateModalContent(movie.title, movie.overview, movie.release_date);
          } else updateModalContent('Unknown title', 'Movie description not found!');

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
}

var modalElement = document.getElementById('myModal');
modalElement.addEventListener('show.bs.modal', function (e) {
  var button = e.relatedTarget;
  var imdbID = button.getAttribute('data-imdb-id');

  if (imdbID) {
    getDetailed(imdbID);
  }
});
var myModal = new bootstrap.Modal(modalElement, {
  keyboard: true,
  backdrop: 'static'
});

function updateModalContent(titleText, overviewText, releaseDate) {
  var modalTitle = document.getElementById('modalLabel');
  var modalBody = document.getElementById('modal-body');
  modalTitle.innerText = titleText;
  modalBody.innerHTML = "\n    <p>".concat(overviewText, "</p>\n    <p><b>Release date:</b> ").concat(releaseDate, "</p>\n    ");
}