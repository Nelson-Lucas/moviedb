import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  gap: 1.5rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Backdrop = styled.img`
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Genres = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Genre = styled.span`
  font-size: 0.75rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

export const Overview = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Button = styled.button<{ active: boolean }>`
  margin-top: 1.5rem;
  background: ${({ active, theme }) =>
    active ? theme.colors.danger : theme.colors.primary};
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
`;
