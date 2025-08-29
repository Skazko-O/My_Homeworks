const DEV_MODE = true

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
const errorHandler = (status) => {
    if (status === 404) return `
    <div class="container">
    <h1>Error 404</h1>
    <p>Page not found, go to the <a href="#" onclick="loadPage('main.html')">main page<a/></p>
    </div>
    `
    if (status >= 500) return `
    <div class="container">
    <h1>Server error</h1>
    <p>Please try again<a/></p>
    </div>
`
}
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

async function loadPage(page) {
    try {
        const resp = await fetch('pages/' + page)
        console.log('Finished');
        if (!resp.ok) {
            document.getElementById('main-content').innerHTML = errorHandler(resp.status)
            throw new Error(resp.status)
            return
        }
        const html = await resp.text()
        document.getElementById('main-content').innerHTML = html
    } catch (err) {
        console.log(err);
    }
}
/* // Перевірка чи сторінка завантажилась (пробували)
async function checkPageLoad(){
    await loadPage('main.html')
    console.log('Loaded')
}*/

const menu = document.querySelector('.main-menu')
menu.addEventListener('click', function (e) {
    if (e.target.nodeName === 'A') {
        e.preventDefault()
        loadPage(e.target.getAttribute('href'))
    }
})

// loadPage('main.html')

const loadUsers = async () => {
    let usersList = []
    const storedUsers = localStorage.getItem('users')
    /* if (storedUsers) {
         usersList = JSON.parse(storedUsers)
     } else { */
    const url = DEV_MODE ? 'assets/mocks/users.json' : 'http://jsonplaceholder.typicode.com/users'

    /*Використання JQuery */
    $.get(url, function(usersList) {
        console.log(usersList);
            let list = '<ul>'
            usersList.forEach((user) => {
                list += `<li>
                     <b>${user.name}:</b> ${user.email}
                  </li>`
            })
            list += '</ul>'
            document.getElementById('main-content').innerHTML = list
    }).fail(()=>{
        console.log('Some error occurred');
    })

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
}
loadUsers()




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


/*COOCKIES*/
function setCookie(name,value, seconds, path='/') {
    const expires = "";
    if (seconds) {
        var date = new Date();
        date.setTime(date.getTime() + (seconds*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/"+path;
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function deleteCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    // альтернативний варіант setCookie(name, '', -1)
}