import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const Select = styled.select`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem;
  border-radius: 6px;
`;
