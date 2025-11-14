import { useEffect, useState } from 'react';
import { getPopularMovies } from '../services/tmdb';
import MovieCard from '../components/MovieCard';
import Grid from '../components/Grid';
import Pagination from '../components/Pagination';
import { Title, ErrorMessage, LoadingText } from '../styles/Home.styles';

export default function Home() {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    getPopularMovies(page)
      .then(data => {
        console.log('API response:', data);
        setItems(data.results);
        setTotalPages(data.total_pages);
      })
      .catch(() => setError('Falha ao carregar filmes populares.'))
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <>
      <Title>Filmes Populares</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Grid>
        {Array.isArray(items) && items.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </Grid>
      {loading && <LoadingText>Carregando...</LoadingText>}
      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </>
  );
}
