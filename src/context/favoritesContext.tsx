import React, { createContext, useContext, useEffect, useReducer } from 'react';
import type { Movie, FavoritesState, FavoritesAction } from './types';

const FavoritesContext = createContext<{
  state: FavoritesState;
  add: (m: Movie) => void;
  remove: (id: number) => void;
} | null>(null);

const initialState: FavoritesState = { byId: {} };

function reducer(state: FavoritesState, action: FavoritesAction): FavoritesState {
  switch (action.type) {
    case 'ADD_FAVORITE': {
      const m = action.payload;
      return { byId: { ...state.byId, [m.id]: m } };
    }
    case 'REMOVE_FAVORITE': {
      const { [action.payload]: _, ...rest } = state.byId;
      return { byId: rest };
    }
    case 'HYDRATE':
      return action.payload;
    default:
      return state;
  }
}

const STORAGE_KEY = 'moviedb:favorites';

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      dispatch({ type: 'HYDRATE', payload: JSON.parse(raw) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const add = (m: Movie) => dispatch({ type: 'ADD_FAVORITE', payload: m });
  const remove = (id: number) => dispatch({ type: 'REMOVE_FAVORITE', payload: id });

  return (
    <FavoritesContext.Provider value={{ state, add, remove }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error('useFavorites deve ser usado dentro de FavoritesProvider');
  return ctx;
};
