import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.div`
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 1rem;
`;

export const Message = styled.div<{ kind?: 'error' | 'info' }>`
  margin-top: 1rem;
  color: ${({ kind }) => (kind === 'error' ? '#ef4444' : '#94a3b8')};
`;
