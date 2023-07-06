import { IPredictedFile } from '../types';

export interface IImagesTabProps {
  files: IPredictedFile[];
  setFiles: React.Dispatch<React.SetStateAction<IPredictedFile[]>>;
}
