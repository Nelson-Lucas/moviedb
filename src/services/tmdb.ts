import api from './api';

export const getPopularMovies = (page = 1) =>
  api
    .get('/movie/popular', { params: { page } })
    .then((res) => res.data);

export const searchMovies = (query: string, page = 1) =>
  api
    .get('/search/movie', {
      params: { query, page, include_adult: false },
    })
    .then((res) => res.data);

export const getMovieDetails = (id: string | number) =>
  api.get(`/movie/${id}`).then((res) => res.data);

export const getGenres = () =>
  api.get('/genre/movie/list').then((res) => res.data.genres);
