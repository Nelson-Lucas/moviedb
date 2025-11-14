export type Movie = {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string | null;
  backdrop_path?: string | null;
  release_date?: string;
  overview?: string;
  genre_ids?: number[];
  genres?: { id: number; name: string }[];
};

export type FavoritesState = {
  byId: Record<number, Movie>;
};

export type FavoritesAction =
  | { type: 'ADD_FAVORITE'; payload: Movie }
  | { type: 'REMOVE_FAVORITE'; payload: number }
  | { type: 'HYDRATE'; payload: FavoritesState };
