import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from '../../components/Header';
import { theme } from '../../styles/theme';

function LocationDisplay() {
  const location = useLocation();
  return <div data-testid="location">{location.pathname + location.search}</div>;
}

test('renderiza logo e links de navegação', () => {
  render(
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </ThemeProvider>
  );

  expect(screen.getByText('MovieDB')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Favoritos/i })).toBeInTheDocument();
});

test('submete busca e navega para rota de pesquisa', () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route
            path="*"
            element={
              <>
                <Header />
                <LocationDisplay />
              </>
            }
          />
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
  );

  const input = screen.getByPlaceholderText(/Buscar filme/i);
  fireEvent.change(input, { target: { value: 'Matrix' } });
  fireEvent.submit(container.querySelector('form')!);

  expect(screen.getByTestId('location')).toHaveTextContent('/search?q=Matrix');
});
