const apiKey = '61a17b1a'; 
const searchInput = document.getElementById('searchInput');
const movieList = document.getElementById('movieList');
const movieDetails = document.getElementById('movieDetails');

let debounceTimeout;

// Debounce function
function debounce(func, delay) {
    return function(...args) {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// Fetch movies from the OMDB API
async function fetchMovies(query) {
    if (!query) {
        movieList.style.display = 'none'; // Hide the movie list if no query
        return;
    }

    const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
    const data = await response.json();

    if (data.Response === 'True') {
        displayMovieTitles(data.Search);
    } else {
        movieList.style.display = 'none'; // Hide if no movies found
    }
}

// Display movie titles
function displayMovieTitles(movies) {
    movieList.innerHTML = ''; // Clear previous results
    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item';
        movieItem.innerText = movie.Title;
        movieItem.addEventListener('click', () => showMovieDetails(movie.imdbID));
        movieList.appendChild(movieItem);
    });
    movieList.style.display = 'block'; // Show movie list
}

// Fetch and display movie details
async function showMovieDetails(imdbID) {
    const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`);
    const data = await response.json();

    if (data.Response === 'True') {
        movieDetails.innerHTML = `
            <h2>${data.Title} (${data.Year})</h2>
            <p><strong>Plot:</strong> ${data.Plot}</p>
            <p><strong>Director:</strong> ${data.Director}</p>
            <p><strong>Actors:</strong> ${data.Actors}</p>
            <p><strong>Rating:</strong> ${data.imdbRating}</p>
            <img src="${data.Poster}" alt="${data.Title}" style="width:200px;">
        `;
        movieDetails.style.display = 'block'; // Show movie details
    }
}

// Attach debounced input event listener
searchInput.addEventListener('input', debounce(function() {
    fetchMovies(this.value); // Fetch movies on input
}, 300)); // Adjust the debounce delay as needed
