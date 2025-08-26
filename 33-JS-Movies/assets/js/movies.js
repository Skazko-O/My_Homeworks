const API_KEY = '395e2453'
const API_KEY_TMDB = '38b45ed5fa06954a0aeefd258bb8860c'

async function searchMovie(search, type = '', year = '') {
    const response =
        await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=${type}&y=${year}`)
    const data = await response.json()
    console.log(data);
    if (data.Response === "False") {        
        showToast(`${data.Error}`)
        return
    }

    showMoviesList(data.Search)
}

function showMoviesList(movies) {
    let list = ''
    movies.forEach(movie => {
        list += `
        <div class="card">
            <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}" onerror="this.src = 'assets/images/no-img.png'">
            <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <p class="card-text"><b>Year: </b>${movie.Year}</p>
                <button href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" data-imdb-id=${movie.imdbID}>Detailed</button>
            </div>
            </div>
        `
    })
    document.getElementById('movies-list').innerHTML = list
}

const form = document.getElementById('search-form')
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const search = document.getElementById('search-inp').value.trim()
    const type = document.getElementById('type').value
    const year = document.getElementById('year').value

    if (search === '') {       
        return showToast ('Enter movie name for search')
    }

    searchMovie(search, type, year)
})

document.getElementById('year').setAttribute('max', new Date().getFullYear())

/*Модальне вікно*/

async function getDetailed(imdbID) {
    const response =
        await fetch(`https://api.themoviedb.org/3/find/${imdbID}?external_source=imdb_id&api_key=${API_KEY_TMDB}`)
    const data = await response.json()
    console.log(data);
    if (data.movie_results && data.movie_results.length > 0) {
        const movie = data.movie_results[0];
        updateModalContent(movie.title, movie.overview, movie.release_date);
    } else
        updateModalContent('Unknown title', 'Movie description not found!');
}

const modalElement = document.getElementById('myModal');

modalElement.addEventListener('show.bs.modal', e => {
    const button = e.relatedTarget;
    const imdbID = button.getAttribute('data-imdb-id');
    if (imdbID) {
        getDetailed(imdbID);
    }
})
const myModal = new bootstrap.Modal(modalElement, {
    keyboard: true,
    backdrop: 'static'
});

function updateModalContent(titleText, overviewText, releaseDate) {
    const modalTitle = document.getElementById('modalLabel');
    const modalBody = document.getElementById('modal-body');
    modalTitle.innerText = titleText;
    const releaseCheck = (typeof releaseDate !== 'undefined')
    ? `<p><b>Release date:</b> ${releaseDate}</p>`
    : `<p><b>Release date:</b> <i>Not available</i></p>`;
    modalBody.innerHTML = `
    <p>${overviewText}</p>
    ${releaseCheck}
    `;
}

/*Toasts*/

function showToast(message, delay = 3000) {
  const toastEl = document.getElementById('movieToast');
  const toastBody = toastEl.querySelector('.toast-body');
  toastBody.textContent = message;

  const toast = bootstrap.Toast.getOrCreateInstance(toastEl, {
    delay: delay,
    autohide: true
  });

  toast.show();
}
