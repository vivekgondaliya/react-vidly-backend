import http from "./httpService";
import { apiUrl } from "../config.json";

const API_ENDPOINT = `${apiUrl}/movies`;
//get Movies
export function getMovies() {
  return http.get(`${API_ENDPOINT}`);
}

//get a Movie
export function getMovie(movieId) {
  return http.get(`${API_ENDPOINT}/${movieId}`);
}

//delete a movie
export function deleteMovie(movieId) {
  return http.delete(`${API_ENDPOINT}/${movieId}`);
}

//save a movie
export function saveMovie(movie) {
  //update existing movie in DB
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(`${API_ENDPOINT}/${movie._id}`, body);
  }

  //if it's a new movie
  return http.post(API_ENDPOINT, movie);
}
