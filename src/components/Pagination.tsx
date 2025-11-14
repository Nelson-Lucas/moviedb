import { Wrapper, Button, Text } from '../styles/Pagination.styles';

export default function Pagination({
  page,
  totalPages,
  onChange,
}: {
  page: number;
  totalPages: number;
  onChange: (p: number) => void;
}) {
  return (
    <Wrapper>
      <Button disabled={page === 1} onClick={() => onChange(page - 1)}>
        Anterior
      </Button>
      <Text>
        Página {page} de {totalPages}
      </Text>
      <Button disabled={page === totalPages} onClick={() => onChange(page + 1)}>
        Próxima
      </Button>
    </Wrapper>
  );
}
