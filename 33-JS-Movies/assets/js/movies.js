const API_KEY = '395e2453'

async function searchMovie(search, type='', year='') {
    const response =
        await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=${type}&y=${year}`)
    const data = await response.json()
    console.log(data);
    if (data.Response === "False") {
        alert(`${data.Error}`)
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
                <button href="#" class="btn btn-primary">Detailed</button>
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
        return alert('Enter movie name for search')
    }

    searchMovie(search, type, year)
})

document.getElementById('year').setAttribute('max', new Date().getFullYear())