import http from "./httpService";
import { apiUrl } from "../config.json";

//get Movies
export function getMovies() {
  return http.get(`${apiUrl}/movies`);
}

//get a Movie
export function getMovie(movieId) {
  return http.get(`${apiUrl}/movies/${movieId}`);
}

//delete a movie
export function deleteMovie(movieId) {
  return http.delete(`${apiUrl}/movies/${movieId}`);
}

//save a movie
export async function saveMovie(movie) {
  // const { data: movies } = await getMovies();
  // let movieInDb = movies.find(m => m._id === movie._id) || {};
  // movieInDb.title = movie.title;
  // movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  // movieInDb.numberInStock = movie.numberInStock;
  // movieInDb.dailyRentalRate = movie.dailyRentalRate;
  // if (!movieInDb._id) {
  //   movieInDb._id = Date.now().toString();
  //   movies.push(movieInDb);
  // }
  // return movieInDb;
}
