import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import EmptyState from '../../components/EmptyState';
import { theme } from '../../styles/theme';

test('exibe mensagem de estado vazio', () => {
  render(
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        <EmptyState />
      </MemoryRouter>
    </ThemeProvider>
  );

  expect(screen.getByText(/Nenhum filme favorito/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Explorar Filmes/i })).toBeInTheDocument();
});
