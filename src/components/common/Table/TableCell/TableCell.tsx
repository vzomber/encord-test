import { FC } from 'react';
import MuiTableCell, { TableCellProps } from '@mui/material/TableCell';

export const TableCell: FC<TableCellProps> = props => <MuiTableCell className={'py-2 px-1'} {...props} />;
