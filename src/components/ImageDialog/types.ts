import { IPredictedFile } from 'pages/MainPage/types';

export interface IImageDialogProps {
  isOpen: boolean;
  onClose: () => void;
  fileData: IPredictedFile;
}
