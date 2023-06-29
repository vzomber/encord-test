import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from 'components/common';
import Paper from '@mui/material/Paper';
import { FC } from 'react';
import { IImagesTableProps } from './types';

const COLUMNS_NUMBER = 4;

export const ImagesTable: FC<IImagesTableProps> = ({ files }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="images table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 600 }}>Filename</TableCell>
            <TableCell sx={{ fontWeight: 600 }} align="right">
              File size
            </TableCell>
            {/* <TableCell align="right">Time of upload</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody columnsNumber={COLUMNS_NUMBER}>
          {files.map((file) => (
            <TableRow
              key={file.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {file.name}
              </TableCell>
              <TableCell align="right">{file.size}</TableCell>
              {/* <TableCell align="right">{file.fat}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
