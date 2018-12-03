import http from "./httpService";
import { apiUrl } from "../config.json";

//get Movies
export function getMovies() {
  return http.get(`${apiUrl}/movies`);
}

//get a Movie

//delete a movie
export function deleteMovie(movieId) {
  return http.delete(`${apiUrl}/movies/${movieId}`);
}

//save a movie
