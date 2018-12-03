import http from "./httpService";
import { apiUrl } from "../config.json";

const API_ENDPOINT = `${apiUrl}/movies`;

function movieUrl(id) {
  return `${API_ENDPOINT}/${id}`;
}

export function getMovies() {
  return http.get(API_ENDPOINT);
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}

export function saveMovie(movie) {
  //update existing movie in DB
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }

  //if it's a new movie
  return http.post(API_ENDPOINT, movie);
}
