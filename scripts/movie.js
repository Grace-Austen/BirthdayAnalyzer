function getMovies(birthday) {
  API_KEY = "62085b90245a8e5a373a704691e96365";
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_date.gte=${birthday}&primary_release_date.lte=${birthday}&sort_by=revenue.desc`;
  // Fetch the data from the API and return a promise that resolves to the top 3 movies
  return fetch(url)
    .then(response => response.json())
}