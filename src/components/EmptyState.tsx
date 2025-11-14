import { Wrapper, Title, Text, Button } from '../styles/EmptyState.styles';

export default function EmptyState() {
  return (
    <Wrapper>
      <Title>Nenhum filme favorito ainda.</Title>
      <Text>Comece explorando filmes populares e adicione seus favoritos!</Text>
      <Button to="/">Explorar Filmes</Button>
    </Wrapper>
  );
}
