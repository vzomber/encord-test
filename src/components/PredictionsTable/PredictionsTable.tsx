import { FC } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from 'components/common';
import Paper from '@mui/material/Paper';
import { IPredictionsTableProps } from './types';

const COLUMNS_NUMBER = 4;

export const PredictionsTable: FC<IPredictionsTableProps> = ({ files }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="predictions table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Title</TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="right">
                Description
              </TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="right">
                Timestamp
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody columnsNumber={COLUMNS_NUMBER}>
            {files.map((fileData) => (
              <TableRow
                key={fileData.title}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {fileData.title}
                </TableCell>
                <TableCell align="right">{fileData.description}</TableCell>
                <TableCell align="right">{fileData.timestamp}</TableCell>
                <TableCell align="right">
                  <Button
                    variant={'contained'}
                    // onClick={() => setCurrentTab(TabsIndexesEnum.ImageView)}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
