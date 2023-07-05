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
import { IImagesTableProps, IPredictResponse } from './types';
import { PredictDialog } from 'components/PredictDialog';
import { IPredictDialogData } from 'components/PredictDialog/types';
import { predictApi } from 'api';

const COLUMNS_NUMBER = 4;

export const ImagesTable: FC<IImagesTableProps> = ({ files, setFiles }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [predictFileId, setPredictFileId] = useState<null | string>(null);

  const handleClose = async (data?: IPredictDialogData) => {
    setIsOpen(false);

    const timestamp = Date.now();
    const response: IPredictResponse = await predictApi.predict();

    if (response) {
      const updatedFiles = files.map((file) => {
        if (file.id === predictFileId) {
          return {
            ...file,
            predictions: response.predictions,
            title: data?.title,
            description: data?.description,
            timestamp,
          };
        }
        return file;
      });
      setFiles(updatedFiles);
    }

    setPredictFileId(null);
  };

  const handleOpen = (id: string) => {
    setPredictFileId(id);
    setIsOpen(true);
  };
  console.log(files);
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
            {files.map((fileData) => (
              <TableRow
                key={fileData.file.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {fileData.file.name}
                </TableCell>
                <TableCell align="right">{fileData.file.size}</TableCell>
                <TableCell align="right">
                  <Button
                    variant={'contained'}
                    onClick={() => handleOpen(fileData.id)}
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
