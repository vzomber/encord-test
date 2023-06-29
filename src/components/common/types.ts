import { SxProps } from '@mui/material';
import { ReactNode } from 'react';

export interface ICommonStyles {
  sx?: SxProps;
  children?: ReactNode;
  className?: string;
}
