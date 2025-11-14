import { type FormEvent, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  HeaderWrapper,
  Container,
  Logo,
  Form,
  Input,
  Nav,
  NavLink,
} from '../styles/Header.styles';

export default function Header() {
  const nav = useNavigate();
  const { search } = useLocation();
  const qParam = new URLSearchParams(search).get('q') || '';
  const [q, setQ] = useState(qParam);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    nav(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <HeaderWrapper>
      <Container>
        <Logo to="/">MovieDB</Logo>
        <Form onSubmit={onSubmit}>
          <Input
            placeholder="Buscar filme..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </Form>
        <Nav>
          <NavLink to="/movie/popular">Home</NavLink>
          <NavLink to="/favorites">Favoritos</NavLink>
        </Nav>
      </Container>
    </HeaderWrapper>
  );
}
