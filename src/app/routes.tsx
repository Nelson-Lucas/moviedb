import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import Home from '../pages/Home';
import MovieDetails from '../pages/MovieDetails';
import Favorites from '../pages/Favorites';
import Search from '../pages/Search';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/movie/popular" replace /> },
      { path: 'movie/popular', element: <Home /> },
      { path: 'movie/:id', element: <MovieDetails /> },
      { path: 'favorites', element: <Favorites /> },
      { path: 'search', element: <Search /> },
    ],
  },
]);
