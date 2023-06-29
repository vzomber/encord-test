import { FC } from 'react';
import MuiTableBody from '@mui/material/TableBody';
import { ITableBodyProps } from './types';
import { CircularLoader } from 'components/common/CircularLoader';
import { TableCell } from '../TableCell';
import { TableRow } from '../TableRow';

const TWO_ROOT_CELLS = 2;

export const TableBody: FC<ITableBodyProps> = ({
  isLoading,
  columnsNumber,
  children,
  ...props
}) => (
  <MuiTableBody {...props}>
    {isLoading ? (
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={columnsNumber + TWO_ROOT_CELLS}
        >
          <div className={'flex w-full justify-center p-5'}>
            <CircularLoader />
          </div>
        </TableCell>
      </TableRow>
    ) : (
      children
    )}
  </MuiTableBody>
);
