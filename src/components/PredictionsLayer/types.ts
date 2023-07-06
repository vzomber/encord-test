import { IPrediction } from 'pages/MainPage/types';

export interface IPredictionsLayerProps {
  prediction: IPrediction;
  imageParams: {
    naturalWidth: number;
    naturalHeight: number;
    width: number;
    height: number;
  };
}
