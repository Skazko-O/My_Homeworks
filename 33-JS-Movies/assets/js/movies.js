const API_KEY = '395e2453';
const API_KEY_TMDB = '38b45ed5fa06954a0aeefd258bb8860c';
const baseURL = 'https://api.themoviedb.org/3/search';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGI0NWVkNWZhMDY5NTRhMGFlZWZkMjU4YmI4ODYwYyIsIm5iZiI6MTc1NTk0OTY2Ny4zNDIwMDAyLCJzdWIiOiI2OGE5YWE2M2I1YTFiMThhMTk2NmZjZWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Amay3DD7G_Ot0fU-05P3xEE1EqH8MTjnclXRIBFFvUE'
  }
};

async function searchMovie(search, type = '', year = '') {
    const response =
        await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&${year}&${type}&page=1`, options)
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
            <img src="${movie.poster_path}" class="card-img-top" alt="${movie.title}" onerror="this.src = 'assets/images/no-img.png'">
            <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="card-text"><b>Year: </b>${movie.release_date}</p>
                <button href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" data-imdb-id=${movie.id}>Detailed</button>
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

function updateModalContent(titleText, overviewText, releaseDate = 'N/A') {
    const modalTitle = document.getElementById('modalLabel');
    const modalBody = document.getElementById('modal-body');
    modalTitle.innerText = titleText; 
    modalBody.innerHTML = `
    <p>${overviewText}</p>
    <p><b>Release date:</b> ${releaseDate}</p>
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
