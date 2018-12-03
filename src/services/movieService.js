import http from "./httpService";
import config from "../config.json";

//get Movies
export function getMovies() {
  return http.get(`${config.apiUrl}/movies`);
}

//get a Movie

//delete a movie
export function deleteMovie(movieId) {
  return http.delete(`${config.apiUrl}/movies/${movieId}`);
}

//save a movie
