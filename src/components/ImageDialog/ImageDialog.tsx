import { FC } from 'react';
import { Dialog } from 'components/common';
import { IImageDialogProps } from './types';

export const ImageDialog: FC<IImageDialogProps> = ({
  isOpen,
  onClose,
  fileData,
}) => {
  const closeHandler = () => onClose();

  return (
    <Dialog
      open={isOpen}
      onClose={closeHandler}
      PaperProps={{
        sx: { width: '40rem' },
      }}
    >
      <img src={URL.createObjectURL(fileData.file)} alt={fileData.title} />
    </Dialog>
  );
};
