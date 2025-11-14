import { useMemo, useState } from 'react';
import { useFavorites } from '../context/favoritesContext';
import Grid from '../components/Grid';
import MovieCard from '../components/MovieCard';
import EmptyState from '../components/EmptyState';
import { Header, Title, Select } from '../styles/Favorites.styles';

type SortKey = 'title-asc' | 'title-desc' | 'vote-asc' | 'vote-desc';

export default function Favorites() {
  const { state } = useFavorites();
  const [sort, setSort] = useState<SortKey>('title-asc');
  const list = Object.values(state.byId);

  const sorted = useMemo(() => {
    const arr = [...list];
    switch (sort) {
      case 'title-asc':
        arr.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title-desc':
        arr.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'vote-asc':
        arr.sort((a, b) => a.vote_average - b.vote_average);
        break;
      case 'vote-desc':
        arr.sort((a, b) => b.vote_average - a.vote_average);
        break;
    }
    return arr;
  }, [list, sort]);

  if (sorted.length === 0) return <EmptyState />;

  return (
    <>
      <Header>
        <Title>Meus Filmes Favoritos</Title>
        <Select value={sort} onChange={e => setSort(e.target.value as SortKey)}>
          <option value="title-asc">Título (A-Z)</option>
          <option value="title-desc">Título (Z-A)</option>
          <option value="vote-desc">Nota (maior-menor)</option>
          <option value="vote-asc">Nota (menor-maior)</option>
        </Select>
      </Header>
      <Grid>
        {sorted.map(m => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </Grid>
    </>
  );
}
