import { FC } from 'react';
import MuiTableHead from '@mui/material/TableHead';
import { ITableHeadProps } from './types';

export const TableHead: FC<ITableHeadProps> = props => <MuiTableHead {...props} />;
