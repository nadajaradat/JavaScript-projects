const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=';

const container = document.querySelector('.container');
const form = document.querySelector('.form');
const search = document.querySelector('.search');

// Fetch results from API
fetchData(API_URL);

async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    showContent(data.results);
}

function showContent(results) {
    container.innerHTML = '';
    results.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <div class="pic" style="background-image: url(${IMG_PATH}${movie.poster_path});"></div>
        <div class="card-body">
            <h4 class="original_title">${movie.original_title}</h4>
            <div class="vote_average" style="color: ${getClassByRate(movie.vote_average)}">${(movie.vote_average == Number(movie.vote_average) ? movie.vote_average : movie.vote_average.toFixed(1))}</div>
        </div>
        <div class="overview">
            <h4>overview</h4>
            ${movie.overview}
        </div>
        `;
        container.appendChild(card);
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if (searchTerm && searchTerm !== '') {
        fetchData(SEARCH_API + searchTerm);
        search.value = '';
    } else {
        window.location.reload();
    }
});
