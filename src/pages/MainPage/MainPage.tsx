import { useRef, useState } from 'react';
import { AppHeader } from 'components/AppHeader';
import { fileClonesChecker, TabsIndexes } from './helpers';
import { Button } from 'components/common';

export const MainPage = () => {
  const [currentTab, setCurrentTab] = useState(TabsIndexes.Images);
  const [files, setFiles] = useState<File[]>([]);
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

    if (newFiles.length) setFiles((prev) => [...prev, ...newFiles]);
    // uploadInputRef.current.value = '';
  };

  return (
    <>
      <AppHeader currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <div className={'my-10 flex w-full justify-center'}>
        <Button variant={'contained'} onClick={uploadFileTriggerHandler}>
          Upload image
        </Button>
      </div>
      <input
        hidden
        ref={uploadInputRef}
        multiple
        type="file"
        id={'file-upload'}
        onChange={uploadFileHandler}
      />
    </>
  );
};
