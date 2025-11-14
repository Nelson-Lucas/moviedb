import { useEffect, useState } from 'react';
import { searchMovies } from '../services/tmdb';
import Grid from '../components/Grid';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';
import useQueryParam from '../hooks/useQueryParam';
import { Title, Subtitle, Message } from '../styles/Search.styles';

export default function Search() {
  const q = useQueryParam('q') || '';
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setPage(1);
    setItems([]);
    setTotalPages(1);
    setTotalResults(null);
    setError(null);
  }, [q]);

  useEffect(() => {
    if (!q.trim()) {
      setItems([]);
      setTotalPages(1);
      setTotalResults(0);
      return;
    }

    setLoading(true);
    setError(null);

    searchMovies(q, page)
      .then((data) => {
        setItems(data.results || []);
        setTotalPages(data.total_pages || 1);
        setTotalResults(data.total_results || 0);
      })
      .catch(() => setError('Falha ao carregar resultados de busca.'))
      .finally(() => setLoading(false));
  }, [q, page]);

  const hasQuery = q.trim().length > 0;

  return (
    <>
      <Title>
        Resultados para: <span style={{ color: '#f59e0b' }}>“{q || '—'}”</span>
      </Title>

      {hasQuery && totalResults !== null && (
        <Subtitle>Encontrados {totalResults} filmes</Subtitle>
      )}

      {!hasQuery && (
        <Subtitle>Digite um termo na barra de busca para ver resultados.</Subtitle>
      )}

      {error && <Message kind="error">{error}</Message>}

      <Grid>
        {items.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </Grid>

      {loading && <Message kind="info">Carregando...</Message>}

      {hasQuery && !loading && items.length === 0 && !error && (
        <Message kind="info">Nenhum resultado encontrado para “{q}”.</Message>
      )}

      {hasQuery && totalPages > 1 && (
        <Pagination page={page} totalPages={Math.min(totalPages, 500)} onChange={setPage} />
      )}
    </>
  );
}
