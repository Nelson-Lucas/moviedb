import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
`;

export const Button = styled.button<{ disabled?: boolean }>`
  background: ${({ disabled, theme }) =>
    disabled ? theme.colors.border : theme.colors.primary};
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    background: ${({ disabled, theme }) =>
      disabled ? theme.colors.border : theme.colors.primary};
  }
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.text};
`;
