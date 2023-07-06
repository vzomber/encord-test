export interface IPredictedFile {
  title?: string;
  description?: string;
  timestamp?: number;
  predictions: IPrediction[];
  id: string;
  file: File;
}

export interface IPrediction {
  bbox: {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
  };
  label: string;
  score: string;
}
