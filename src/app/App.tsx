import { Outlet } from 'react-router-dom';
import { FavoritesProvider } from '../context/favoritesContext';
import Header from '../components/Header';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle';
import { theme } from '../styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <FavoritesProvider>
        <GlobalStyle />
        <Header />
        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
          <Outlet />
        </main>
      </FavoritesProvider>
    </ThemeProvider>
  );
}
