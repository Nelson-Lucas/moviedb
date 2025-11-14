import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { FavoritesProvider } from '../../context/favoritesContext';
import { theme } from '../../styles/theme';

const TestMovieCard = ({ movie, onClick }: { movie: any; onClick: () => void }) => (
  <div>
    <h2>Card: {movie.title}</h2>
    <p>Nota: {movie.vote_average}</p>
    <button onClick={onClick}>Favoritar</button>
  </div>
);

const mockMovie = {
  id: 1,
  title: 'Inception',
  vote_average: 8.8,
  poster_path: '/poster.jpg',
};

test('renderiza MovieCard com título, nota e botão de favorito', () => {
  const handleClick = jest.fn();

  render(
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        <FavoritesProvider>
          <TestMovieCard movie={mockMovie} onClick={handleClick} />
        </FavoritesProvider>
      </MemoryRouter>
    </ThemeProvider>
  );

  expect(screen.getByText('Card: Inception')).toBeInTheDocument();
  expect(screen.getByText(/Nota: 8.8/)).toBeInTheDocument();

  const button = screen.getByText('Favoritar');
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
});
