import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;
