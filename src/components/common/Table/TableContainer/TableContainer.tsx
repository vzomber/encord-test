import { FC } from 'react';
import MuiTableContainer from '@mui/material/TableContainer';
import { ITableContainerProps } from './types';

export const TableContainer: FC<ITableContainerProps> = props => <MuiTableContainer {...props} />;
