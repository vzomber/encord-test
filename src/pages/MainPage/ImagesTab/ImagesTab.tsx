import { Button } from 'components/common';
import { ImagesTable } from 'components/ImagesTable/';
import { FC, useRef } from 'react';
import { fileClonesChecker } from '../helpers';
import { IPredictedFile } from '../types';
import { IImagesTabProps } from './types';
import { v4 as uuidv4 } from 'uuid';

export const ImagesTab: FC<IImagesTabProps> = ({ files, setFiles }) => {
  const uploadInputRef = useRef<HTMLInputElement>(null);

  const uploadFileTriggerHandler = () => uploadInputRef.current?.click();

  const uploadFileHandler = () => {
    if (!uploadInputRef.current || !uploadInputRef.current.files?.length)
      return;

    const { files: newlyUploadedFilesList } = uploadInputRef.current;
    const newFiles = fileClonesChecker(
      files,
      Array.from(newlyUploadedFilesList)
    );

    if (newFiles.length) {
      const filesForPrediction: IPredictedFile[] = newFiles.map((file) => ({
        id: uuidv4(),
        file,
        predictions: [],
      }));
      setFiles((prev) => [...prev, ...filesForPrediction]);
    }
    uploadInputRef.current.value = '';
  };

  return (
    <div>
      <div className={'my-10 flex w-full justify-center'}>
        <Button variant={'contained'} onClick={uploadFileTriggerHandler}>
          Upload image
        </Button>
      </div>
      <input
        hidden
        multiple
        type={'file'}
        id={'file-upload'}
        accept={'image/*'}
        ref={uploadInputRef}
        onChange={uploadFileHandler}
      />

      {files.length ? (
        <div className={'px-24'}>
          <ImagesTable files={files} setFiles={setFiles} />
        </div>
      ) : (
        <div className={'flex justify-center'}>
          <span className={'text-2xl font-semibold text-gray-500'}>
            No images uploaded
          </span>
        </div>
      )}
    </div>
  );
};
