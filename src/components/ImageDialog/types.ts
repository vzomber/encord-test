import { IPredictedFile, IPrediction } from 'pages/MainPage/types';

export interface IImageDialogProps {
  isOpen: boolean;
  onClose: () => void;
  fileData: IPredictedFile;
  predictions: IPrediction[];
}

export interface IImageParams {
  width: number;
  height: number;
  naturalWidth: number;
  naturalHeight: number;
}
