const API_KEY = '395e2453';
const API_KEY_TMDB = '38b45ed5fa06954a0aeefd258bb8860c';
const baseURL = 'https://api.themoviedb.org/3/';
const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGI0NWVkNWZhMDY5NTRhMGFlZWZkMjU4YmI4ODYwYyIsIm5iZiI6MTc1NTk0OTY2Ny4zNDIwMDAyLCJzdWIiOiI2OGE5YWE2M2I1YTFiMThhMTk2NmZjZWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Amay3DD7G_Ot0fU-05P3xEE1EqH8MTjnclXRIBFFvUE'
    }
};

async function searchMovie(search, type = "movie", year = '', language = 'en-US') {
    const baseURL = `https://api.themoviedb.org/3/search/${type}`;

    const params = new URLSearchParams({
        query: encodeURIComponent(search),
        include_adult: 'false',
        page: '1',
        language: language
    });

    if (year) {
        params.append('year', year);
    }

    const response = await fetch(`${baseURL}?${params.toString()}`, options);
    const data = await response.json();

    console.log(data);

    if (!data.results || data.results.length === 0) {
        showToast('Нічого не знайдено');
        return;
    }

    showMoviesList(data.results);
}

function showMoviesList(movies) {
    let list = ''
    movies.forEach(movie => {
        const title = movie.title || movie.name || "No title";
        const year = (movie.release_date || movie.first_air_date || "").slice(0, 4);
        const poster = movie.poster_path;
        const id = movie.id;
        const type = movie.media_type;
        list += `
        <div class="card">
            <img src="${IMAGE_BASE}${poster}" class="card-img-top" alt="${title}" onerror="this.src = 'assets/images/no-img.png'">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text"><b>Year: </b>${year}</p>
                <button href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" data-tmdb-id=${id} data-tmdb-type=${type}>Detailed</button>
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
        return showToast('Enter movie name for search')
    }

    searchMovie(search, type, year)
})

document.getElementById('year').setAttribute('max', new Date().getFullYear())

/*Модальне вікно*/

async function getDetailed(tmdbID, type) {
    const response =
        await fetch(`${baseURL}${type}/${tmdbID}?api_key=${API_KEY_TMDB}`)
    const data = await response.json()
    console.log(data);
    const title = data.title || data.name || "Unknown title";
    const overview = data.overview || "Опис недоступний";
    const date = data.release_date || data.first_air_date || "Дата невідома";
    updateModalContent(title, overview, date);
}

const modalElement = document.getElementById('myModal');

modalElement.addEventListener('show.bs.modal', e => {
    const button = e.relatedTarget;
    const tmdbID = button.getAttribute('data-tmdb-id');
    const type = button.getAttribute('data-tmdb-type');
    if (tmdbID) {
        getDetailed(tmdbID, type);
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
