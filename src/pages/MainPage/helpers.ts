export const TabsIndexes = {
  Images: 0,
  Predictions: 1,
};

export const fileClonesChecker = (uploadedFiles: File[], newFiles: File[]) => {
  const filesWithoutClones = newFiles.filter((newFile) => {
    return uploadedFiles.some(
      (uploadedFile) =>
        uploadedFile.name === newFile.name && uploadedFile.size === newFile.size
    )
      ? false
      : true;
  });

  return filesWithoutClones;
};
