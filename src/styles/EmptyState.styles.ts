import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  text-align: center;
  padding: 5rem 1rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 1.5rem;
`;

export const Button = styled(Link)`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  &:hover {
    background: #2563eb;
  }
`;
