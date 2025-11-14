import type { ReactNode } from 'react';
import { GridWrapper } from '../styles/Grid.styles';

export default function Grid({ children }: { children: ReactNode }) {
  return <GridWrapper>{children}</GridWrapper>;
}
