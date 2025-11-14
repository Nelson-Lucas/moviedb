import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Pagination from '../../components/Pagination';
import { theme } from '../../styles/theme';

test('botões de navegação funcionam corretamente', () => {
  const onChange = jest.fn();

  render(
    <ThemeProvider theme={theme}>
      <Pagination page={2} totalPages={5} onChange={onChange} />
    </ThemeProvider>
  );

  expect(screen.getByText('Anterior')).toBeInTheDocument();
  expect(screen.getByText('Próxima')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Anterior'));
  expect(onChange).toHaveBeenCalledWith(1);

  fireEvent.click(screen.getByText('Próxima'));
  expect(onChange).toHaveBeenCalledWith(3);
});
