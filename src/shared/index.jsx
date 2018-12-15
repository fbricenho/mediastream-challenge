/**
 * Shared interactions
 * @author Francisco Briceno <fbricenho@gmail.com>
 */
import { MOVIE_DB_API_KEY, MOVIE_DB_API_MOVIE_URL, MOVIE_DB_API_POPULAR_URL, MOVIE_DB_API_URL_VIDEO, MOVIE_DB_API_URL_REVIEW } from '../const';

/**
 * Const states
*/
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const GET_MOVIES_LOCAL_STORAGE = 'GET_MOVIES_LOCAL_STORAGE';
export const GET_MOVIES_LOCAL_STORAGE_SUCCESS = 'GET_MOVIES_LOCAL_STORAGE_SUCCESS';
export const GET_MOVIES_LOCAL_STORAGE_FAILURE = 'GET_MOVIES_LOCAL_STORAGE_FAILURE';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE';
export const FETCH_TRAILERS = 'FETCH_TRAILERS';
export const FETCH_TRAILERS_SUCCESS = 'FETCH_TRAILERS_SUCCESS';
export const FETCH_TRAILERS_FAILURE = 'FETCH_TRAILERS_FAILURE';
export const FETCH_REVIEWS = 'FETCH_REVIEWS';
export const FETCH_REVIEWS_SUCCESS = 'FETCH_REVIEWS_SUCCESS';
export const FETCH_REVIEWS_FAILURE = 'FETCH_REVIEWS_FAILURE';


/**
 * Set default states
*/
function fetchMovies() {
  return {
    type: FETCH_MOVIES
  };
}

function fetchMoviesSuccess(data) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    data
  };
}

function fetchMoviesFail(error) {
  return {
    type: FETCH_MOVIES_FAILURE,
    error
  };
}

function fetchMovie() {
  return {
    type: FETCH_MOVIE
  };
}

function fetchMovieSuccess(data) {
  return {
    type: FETCH_MOVIE_SUCCESS,
    data
  };
}

function fetchMovieFail(error) {
  return {
    type: FETCH_MOVIE_FAILURE,
    error
  };
}

function fetchTrailers() {
  return {
    type: FETCH_TRAILERS
  };
}

function fetchTrailersSuccess(data) {
  return {
    type: FETCH_TRAILERS_SUCCESS,
    data
  };
}

function fetchTrailersFail(error) {
  return {
    type: FETCH_TRAILERS_FAILURE,
    error
  };
}

function fetchReviews() {
  return {
    type: FETCH_REVIEWS
  };
}

function fetchReviewsSuccess(data) {
  return {
    type: FETCH_REVIEWS_SUCCESS,
    data
  };
}

function fetchReviewsFail(error) {
  return {
    type: FETCH_REVIEWS_FAILURE,
    error
  };
}

/**
 * Available calls
 * 
 * Fetch list of popular movies
 */
export function fetchMovieList(){
  return dispatch => {
    dispatch(fetchMovies());
    return fetch(MOVIE_DB_API_POPULAR_URL + MOVIE_DB_API_KEY)
      .then(response => response.json())
      .then(json => json.results)
      .then(data => dispatch(fetchMoviesSuccess(data)))
      .catch(error => dispatch(fetchMoviesFail(error)));
  }
}

/**
 * Get specific movie details from localStorage
*/
export function getMovieListFromLocalStorage() {
  // TODO: MISSING SAVE TO FAVORITES
}

/**
 * Get specific movie details from localStorage
 * @param {String} id
*/
export function setMovieToFavorites(id) {
  // TODO: MISSING SAVE TO FAVORITES
}

/**
 * Fetch specific movie details from id
 * @param {String} movie_id 
*/
export function fetchMovieDetail(movie_id){
  return dispatch => {
    dispatch(fetchMovie());
    return fetch(MOVIE_DB_API_MOVIE_URL + movie_id + MOVIE_DB_API_KEY)
      .then(response => response.json())
      .then(data => dispatch(fetchMovieSuccess(data)))
      .catch(error => dispatch(fetchMovieFail(error)));
  }
}

/**
 * Fetch specific movie trailers from id
 * @param {String} movie_id 
*/
export function fetchTrailerList(movie_id){
  return dispatch => {
    dispatch(fetchTrailers());
    return fetch(MOVIE_DB_API_MOVIE_URL + movie_id + MOVIE_DB_API_URL_VIDEO + MOVIE_DB_API_KEY)
      .then(response => response.json())
      .then(json => json.results)
      .then(data => {
        let youtubeTrailers = data.filter(trailer => {return trailer.site === 'YouTube';});
        dispatch(fetchTrailersSuccess(youtubeTrailers));
      }).catch(error => dispatch(fetchTrailersFail(error)));
  }
}


/**
 * Fetch specific movie reviews from id
 * @param {String} movie_id 
*/
export function fetchReviewList(movie_id){
  return dispatch => {
    dispatch(fetchReviews());
    return fetch(MOVIE_DB_API_MOVIE_URL + movie_id + MOVIE_DB_API_URL_REVIEW + MOVIE_DB_API_KEY)
      .then(response => response.json())
      .then(json => json.results)
      .then(data => dispatch(fetchReviewsSuccess(data)))
      .catch(error => dispatch(fetchReviewsFail(error)));
  }
}
