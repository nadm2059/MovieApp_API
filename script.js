//script.js file
const genreFilter = document.getElementById('genre-filter');
const apiKey = '78ba16cae2513ade4a1e36a18e53b9c6';
//get references to input field, search fields and containers from HTML
const input_ = document.getElementById('moviesearch');
const search_button = document.getElementById('search-button');
const results_cont = document.getElementById('search-results');
const favorites_cont = document.getElementById('favs');
//load favorites from localStorage or initialize them using empty array
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
//save current favorites array to local storage and render updated list
function saveFavorites() {
    localStorage.setItem('favorites',JSON.stringify(favorites)) //save as JSON string
    renderFavorites(); //update UI
    
}

//returns list of favorite movies in fav movies container
function renderFavorites() {
    favorites_cont.innerHTML = ""; // Clear previous content

    // Loop through each favorite movie
    favorites.forEach((fav, index) => {
        const div = document.createElement('div'); // Create a new div for the movie
        div.textContent = ""; // Start with empty content to add elements manually

        // Create title element
        const title = document.createElement('h4'); // Create h4 element for title
        title.classList.add('movie-title'); // Add centering class (already defined in CSS)
        title.textContent = fav.title; // Set text of the title
        div.appendChild(title); // Add title to the div

        // Create Remove button
        const removeBtn = document.createElement('button'); // Create button
        removeBtn.textContent = "Remove from favorites"; // Button label
        removeBtn.addEventListener('click', () => {
            favorites.splice(index, 1); // Remove movie from favorites array
            renderFavorites(); // Re-render the favorites list
        });

        div.appendChild(removeBtn); // Add the button under the title
        favorites_cont.appendChild(div); // Add the complete div to the favorites container
    });
}


//function to fetch movie data from the TMDb API based on user's queury
function fetchMovies(query, genreId = 'all') {
    // Fetch movies from The Movie Database API using the search query and apiKey
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
        .then(res => res.json()) // Parse the response as JSON
        .then(data => {
            results_cont.innerHTML = ""; // Clear previous search results container

            // Initialize filteredResults with all movies from the API response
            let filteredResults = data.results;

            // If a specific genre is selected (not 'all'), filter the results by genreId
            if (genreId !== 'all') {
                filteredResults = data.results.filter(movie => 
                    movie.genre_ids && movie.genre_ids.includes(Number(genreId)) // Keep movies that include the genreId
                );
            }

            // Loop through each movie in the filtered results
            filteredResults.forEach((movie, index) => {
                const div = document.createElement('div'); // Create a new div element to hold the movie info
                div.classList.add(index % 2 === 0 ? 'even' : 'odd'); // Add 'even' or 'odd' class based on the index for styling

                // Create poster URL or use placeholder if no poster available
                const posterUrl = movie.poster_path 
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` 
                    : 'https://via.placeholder.com/200x300?text=No+Image';

                // Set the inner HTML of the div to show poster, title, release date, and a button
                div.innerHTML = `
                    <img src="${posterUrl}" alt="${movie.title} poster" style="width: 200px; border-radius: 10px;"><br>
                    <h4>${movie.title}</h4>
                    <p>${movie.release_date}</p>
                    <div style="max-height: 100px; overflow-y: auto; font-size: 0.9em; color: #555; margin-bottom: 10px;">
                        ${movie.overview}
                    </div>
                    <button>Add to favorites</button>
                `;

                // Add click event listener to the "Add to favorites" button
                div.querySelector('button').onclick = () => {
                    // If the movie is not already in favorites, add it and save favorites
                    if (!favorites.find(fav => fav.id === movie.id)) {
                        favorites.push(movie);
                        saveFavorites();
                    }
                };

                // Append the movie div to the results container in the DOM
                results_cont.appendChild(div);
            });
        });
}

// Fetch the list of movie genres from TMDb API and populate the dropdown
function fetchGenres() {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
        .then(res => res.json())
        .then(data => {
            // Clear existing options except 'All Genres'
            genreFilter.innerHTML = '<option value="all">All Genres</option>';

            // Loop through each genre and create an option element
            data.genres.forEach(genre => {
                const option = document.createElement('option');
                option.value = genre.id;  // Use genre ID for filtering
                option.textContent = genre.name; // Display genre name
                genreFilter.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error fetching genres:', error);
        });
}

//add an event handler for when user clicks search button
search_button.onclick = () => {
    const query = input_.value.trim();
    const selectedGenre = genreFilter.value;  // Get selected genre ID or 'all'
    if (query) {
        fetchMovies(query, selectedGenre);
    }
};
fetchGenres();
renderFavorites(); //on page load store favorites




