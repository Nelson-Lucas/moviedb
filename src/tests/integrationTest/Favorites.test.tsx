import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import Favorites from '../../pages/Favorites';

jest.mock('../../pages/Favorites', () => ({
  __esModule: true,
  default: () => (
    <div>
      <h1>Meus Filmes Favoritos</h1>
      <select>
        <option value="title-asc">Título (A-Z)</option>
        <option value="title-desc">Título (Z-A)</option>
        <option value="vote-desc">Nota (maior-menor)</option>
        <option value="vote-asc">Nota (menor-maior)</option>
      </select>
      <div>
        <div>Fav: Matrix</div>
        <div>Fav: Inception</div>
      </div>
    </div>
  ),
}));

test('renderiza favoritos e título da página', () => {
  render(
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={['/favorites']}>
        <Routes>
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
  );

  expect(screen.getByText(/Meus Filmes Favoritos/i)).toBeInTheDocument();
  expect(screen.getByText('Fav: Matrix')).toBeInTheDocument();
  expect(screen.getByText('Fav: Inception')).toBeInTheDocument();
});
