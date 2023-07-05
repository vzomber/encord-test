import { IPredictedFile } from './types';

export const TabsIndexes = {
  Images: 0,
  Predictions: 1,
};

export const fileClonesChecker = (
  uploadedFiles: IPredictedFile[],
  newFiles: File[]
) => {
  const filesWithoutClones = newFiles.filter((newFile) => {
    return uploadedFiles.some(
      (uploadedFile) =>
        uploadedFile.file.name === newFile.name &&
        uploadedFile.file.size === newFile.size
    )
      ? false
      : true;
  });

  return filesWithoutClones;
};
