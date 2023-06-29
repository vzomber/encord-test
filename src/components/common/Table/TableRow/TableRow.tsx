import { FC } from 'react';
import MuiTableRow from '@mui/material/TableRow';
import { ITableRowProps } from './types';

export const TableRow: FC<ITableRowProps> = props => <MuiTableRow {...props} />;
