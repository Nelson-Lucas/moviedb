import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

export const Poster = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const Title = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Rating = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.muted};
  margin-top: 0.25rem;
`;

export const FavoriteButton = styled.button<{ active: boolean }>`
  background: ${({ active, theme }) =>
    active ? theme.colors.danger : theme.colors.border};
  color: #fff;
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  z-index: 1;
`;
