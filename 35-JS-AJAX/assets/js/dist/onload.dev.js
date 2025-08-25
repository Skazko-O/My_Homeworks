"use strict";

var DEV_MODE = true;
/*function loadPage(page) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'pages/' + page)
    xhr.send()
    xhr.onload = function () {
        if (xhr.status === 200) {
            document.getElementById('main-content').innerHTML = xhr.response
        } else {
            document.getElementById('main-content').innerHTML = errorHandler(xhr.status)
            throw new Error(xhr.status)
        }
    }
    xhr.onerror = function (err) {
        console.log(...err);
    }
}
*/

var errorHandler = function errorHandler(status) {
  if (status === 404) return "\n    <div class=\"container\">\n    <h1>Error 404</h1>\n    <p>Page not found, go to the <a href=\"#\" onclick=\"loadPage('main.html')\">main page<a/></p>\n    </div>\n    ";
  if (status >= 500) return "\n    <div class=\"container\">\n    <h1>Server error</h1>\n    <p>Please try again<a/></p>\n    </div>\n";
};
/*
function loadPage(page) {
    fetch('pages/' + page)
        .then((resp) => {
            console.log(resp);
            if (resp.ok)
                return resp.text()
            else {
                document.getElementById('main-content').innerHTML = errorHandler(resp.status)
                throw new Error (resp.status)            
            }
        })
        .then((html) => {
            document.getElementById('main-content').innerHTML = html
        })
        .catch((err) => {
            console.log(err);            
        })
        .finally(() => {
            console.log('Finished');
        })
} */


function loadPage(page) {
  var resp, html;
  return regeneratorRuntime.async(function loadPage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch('pages/' + page));

        case 3:
          resp = _context.sent;
          console.log('Finished');

          if (resp.ok) {
            _context.next = 9;
            break;
          }

          document.getElementById('main-content').innerHTML = errorHandler(resp.status);
          throw new Error(resp.status);

        case 9:
          _context.next = 11;
          return regeneratorRuntime.awrap(resp.text());

        case 11:
          html = _context.sent;
          document.getElementById('main-content').innerHTML = html;
          _context.next = 18;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 15]]);
}
/* // Перевірка чи сторінка завантажилась (пробували)
async function checkPageLoad(){
    await loadPage('main.html')
    console.log('Loaded')
}*/


var menu = document.querySelector('.main-menu');
menu.addEventListener('click', function (e) {
  if (e.target.nodeName === 'A') {
    e.preventDefault();
    loadPage(e.target.getAttribute('href'));
  }
}); // loadPage('main.html')

var loadUsers = function loadUsers() {
  var usersList, storedUsers, url;
  return regeneratorRuntime.async(function loadUsers$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          usersList = [];
          storedUsers = localStorage.getItem('users');
          /* if (storedUsers) {
               usersList = JSON.parse(storedUsers)
           } else { */

          url = DEV_MODE ? 'assets/mocks/users.json' : 'http://jsonplaceholder.typicode.com/users';
          /*Використання JQuery */

          $.get(url, function (usersList) {
            console.log(usersList);
            var list = '<ul>';
            usersList.forEach(function (user) {
              list += "<li>\n                     <b>".concat(user.name, ":</b> ").concat(user.email, "\n                  </li>");
            });
            list += '</ul>';
            document.getElementById('main-content').innerHTML = list;
          }).fail(function () {
            console.log('Some error occurred');
          });
          /*Альтернативний варіант*/
          // $.ajax({
          //     url: url,
          //     method: 'get',
          //     dataType: 'json',
          //     success: function (usersList) {
          //         console.log(usersList);
          //         let list = '<ul>'
          //         usersList.forEach((user) => {
          //             list += `<li>
          //                  <b>${user.name}:</b> ${user.email}
          //               </li>`
          //         })
          //         list += '</ul>'
          //         document.getElementById('main-content').innerHTML = list
          //     }        
          // })

          /*
          const resp = await fetch(url)
          usersList = await resp.json()
          localStorage.setItem('users', JSON.stringify(usersList))
          }
          
          console.log(usersList);
          let list = '<ul>'
          usersList.forEach((user) => {
              list += `<li>
              <b>${user.name}:</b> ${user.email}
              </li>`
          })
          list += '</ul>'
          document.getElementById('main-content').innerHTML = list*/

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};

loadUsers();
/*
const promise = new Promise((resolve, reject) => {
    try {   
    setTimeout(() => resolve(1), 5000)
    // throw new Error('Some error here')
    } catch (err){
        reject(err)
    }
})

promise.finally(() => {
    console.log('Finished');
}).then((rez) => {
    console.log(rez)    
}).catch((err) => {
    console.log(err)
})*/