import { Link, useLocation } from 'react-router-dom';
import { useFavorites } from '../context/favoritesContext';
import type { Movie } from '../context/types';
import { FaTrash } from 'react-icons/fa';
import {
  Card,
  Poster,
  Info,
  Title,
  Rating,
  FavoriteButton,
  RemoveButton,
} from '../styles/MovieCard.styles';

const IMG = import.meta.env.VITE_TMDB_IMG_BASE;

export default function MovieCard({ movie }: { movie: Movie }) {
  const { state, add, remove } = useFavorites();
  const isFav = !!state.byId[movie.id];
  const location = useLocation();
  const isFavoritesPage = location.pathname === '/favorites';

  const poster = movie.poster_path
    ? `${IMG}/w300/${movie.poster_path}`
    : 'https://via.placeholder.com/300x450?text=Sem+Poster';

  return (
    <Card>
      {isFavoritesPage && (
        <RemoveButton onClick={() => remove(movie.id)} title="Remover dos favoritos">
          <FaTrash />
        </RemoveButton>
      )}
      <Link to={`/movie/${movie.id}`}>
        <Poster src={poster} alt={movie.title} />
      </Link>
      <Info>
        <div>
          <Title to={`/movie/${movie.id}`}>{movie.title}</Title>
          <Rating>Nota TMDB: {movie.vote_average?.toFixed(1)}</Rating>
        </div>
        <FavoriteButton
          active={isFav}
          onClick={() => (isFav ? remove(movie.id) : add(movie))}
        >
          {isFav ? '♥' : '♡'}
        </FavoriteButton>
      </Info>
    </Card>
  );
}
