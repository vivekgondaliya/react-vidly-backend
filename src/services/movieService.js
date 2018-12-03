import http from "./httpService";

//get Movies
export function getMovies() {
  return http.get("http://localhost:3900/api/movies");
}

//get a Movie

//delete a movie
export function deleteMovie(movieId) {
  return http.delete(`http://localhost:3900/api/movies/${movieId}`);
}

//save a movie
