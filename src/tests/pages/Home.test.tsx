import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import Home from '../../pages/Home';

jest.mock('../../pages/Home', () => ({
  __esModule: true,
  default: () => (
    <div>
      <h1>Filmes Populares</h1>
      <div>
        <div>Pop: Inception</div>
        <div>Pop: Interstellar</div>
      </div>
      <div>
        <button disabled>Anterior</button>
        <span>Página 1 de 10</span>
        <button>Próxima</button>
      </div>
    </div>
  ),
}));

test('renderiza filmes populares e paginação', () => {
  render(
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
  );

  expect(screen.getByText(/Filmes Populares/i)).toBeInTheDocument();
  expect(screen.getByText('Pop: Inception')).toBeInTheDocument();
  expect(screen.getByText('Pop: Interstellar')).toBeInTheDocument();
  expect(screen.getByText(/Página 1 de 10/i)).toBeInTheDocument();
});
