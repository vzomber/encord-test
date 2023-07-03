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
import { FC, useState } from 'react';
import { IImagesTableProps } from './types';
import { PredictDialog } from 'components/PredictDialog';
import { IPredictDialogData } from 'components/PredictDialog/types';

const COLUMNS_NUMBER = 4;

export const ImagesTable: FC<IImagesTableProps> = ({ files }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = (data?: IPredictDialogData) => {
    setIsOpen(false);
    console.log({ data });
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="images table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Filename</TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="right">
                File size
              </TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="right">
                Predict
              </TableCell>
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
                <TableCell align="right">
                  <Button
                    variant={'contained'}
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    Predict
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PredictDialog isOpen={isOpen} onClose={handleClose} />
    </>
  );
};
