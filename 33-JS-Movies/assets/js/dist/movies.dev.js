"use strict";

var API_KEY = '395e2453';

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
    list += "\n        <div class=\"card\">\n            <img src=\"".concat(movie.Poster, "\" class=\"card-img-top\" alt=\"").concat(movie.Title, "\" onerror=\"this.src = 'assets/images/no-img.png'\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">").concat(movie.Title, "</h5>\n                <p class=\"card-text\"><b>Year: </b>").concat(movie.Year, "</p>\n                <button href=\"#\" class=\"btn btn-primary\">Detailed</button>\n            </div>\n            </div>\n        ");
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