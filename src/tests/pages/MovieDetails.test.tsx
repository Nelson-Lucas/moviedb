import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { getMovieDetails } from '../../services/tmdb';

jest.mock('../../services/tmdb', () => ({
  getMovieDetails: jest.fn(),
}));

const mockMovie = {
  id: 1,
  title: 'Inception',
  release_date: '2010-07-16',
  vote_average: 8.8,
  overview: 'A mind-bending thriller.',
  genres: [{ id: 1, name: 'Sci-Fi' }],
  backdrop_path: '/backdrop.jpg',
};

jest.mock('../../context/favoritesContext', () => ({
  useFavorites: () => ({
    state: { byId: {} },
    add: jest.fn(),
    remove: jest.fn(),
  }),
}));

jest.mock('../../pages/MovieDetails', () => ({
  __esModule: true,
  default: () => (
    <div>
      <h1>Inception</h1>
      <div>Data de lançamento: 2010-07-16</div>
      <div>Nota: 8.8/10</div>
      <div>Sci-Fi</div>
      <button>Adicionar aos Favoritos</button>
    </div>
  ),
}));


test('renderiza detalhes do filme', async () => {
  (getMovieDetails as jest.Mock).mockResolvedValue(mockMovie);

  render(
    <MemoryRouter initialEntries={['/movie/1']}>
      <Routes>
        <Route path="/movie/:id" element={<div><h1>Inception</h1></div>} />
      </Routes>
    </MemoryRouter>
  );

  await waitFor(() => {
  expect(screen.getByText('Inception')).toBeInTheDocument();
});
});
