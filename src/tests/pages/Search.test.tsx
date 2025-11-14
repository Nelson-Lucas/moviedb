import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Search from '../../pages/Search';
import { searchMovies } from '../../services/tmdb';
import { theme } from '../../styles/theme';

jest.mock('../../services/tmdb', () => ({
  searchMovies: jest.fn(),
}));

jest.mock('../../components/MovieCard', () => ({
  __esModule: true,
  default: ({ title }: { title: string }) => <div>{title}</div>,
}));


const mockResults = {
  results: [
    { id: 1, title: 'Matrix', vote_average: 8.7, poster_path: '/matrix.jpg' },
  ],
  total_pages: 1,
  total_results: 1,
};

test('exibe resultados de busca para termo válido', async () => {
  (searchMovies as jest.Mock).mockResolvedValue(mockResults);

  render(
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={['/search?q=matrix']}>
        <Routes>
          <Route path="/search" element={<Search />} />
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
  );

  expect(screen.getByText(/Resultados para/i)).toBeInTheDocument();

await waitFor(() => {
  expect(screen.getByText(/matrix/i)).toBeInTheDocument();
  expect(screen.getByText(/Encontrados 1 filmes/i)).toBeInTheDocument();
});

});
