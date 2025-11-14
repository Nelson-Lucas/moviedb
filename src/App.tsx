import { Outlet } from 'react-router-dom';
import { FavoritesProvider } from '../src/context/favoritesContext'
import Header from '../src/components/Header';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/styles/GlobalStyle';
import { theme } from '../src/styles/theme';

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
