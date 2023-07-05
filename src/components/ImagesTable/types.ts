import { IPredictedFile, IPrediction } from 'pages/MainPage/types';

export interface IImagesTableProps {
  files: IPredictedFile[];
  setFiles: React.Dispatch<React.SetStateAction<IPredictedFile[]>>;
}

export interface IPredictResponse {
  description: string;
  predictions: IPrediction[];
}
