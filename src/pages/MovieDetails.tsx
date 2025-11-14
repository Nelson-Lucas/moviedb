import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/tmdb';
import { useFavorites } from '../context/favoritesContext';
import {
  Wrapper,
  Backdrop,
  Title,
  Genres,
  Genre,
  Overview,
  Button,
} from '../styles/MovieDetails.styles';

const IMG = import.meta.env.VITE_TMDB_IMG_BASE;

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { state, add, remove } = useFavorites();

  useEffect(() => {
    setLoading(true);
    getMovieDetails(id!)
      .then(setMovie)
      .catch(() => setError('Falha ao carregar detalhes do filme.'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (error || !movie) return <div style={{ color: 'red' }}>{error || 'Filme não encontrado.'}</div>;

  const backdrop = movie.backdrop_path
    ? `${IMG}/original/${movie.backdrop_path}`
    : 'https://via.placeholder.com/1280x720?text=Sem+Imagem';
  const isFav = !!state.byId[movie.id];

  return (
    <Wrapper>
      <Backdrop src={backdrop} alt={movie.title} />
      <div>
        <Title>{movie.title}</Title>
        <div>Data de lançamento: {new Date(movie.release_date).toLocaleDateString('pt-BR')}</div>
        <div>Nota: {movie.vote_average?.toFixed(1)}/10</div>
        <Genres>
          {movie.genres?.map((g: any) => (
            <Genre key={g.id}>{g.name}</Genre>
          ))}
        </Genres>
        <Overview>{movie.overview}</Overview>
        <Button active={isFav} onClick={() => (isFav ? remove(movie.id) : add(movie))}>
          {isFav ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
        </Button>
      </div>
    </Wrapper>
  );
}
