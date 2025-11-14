import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1rem;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Logo = styled(Link)`
  font-weight: bold;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.highlight};
  text-decoration: none;
`;

export const Form = styled.form`
  flex: 1;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
