import { Button, Tab, Tabs } from 'components/common';
import { useRef, useState } from 'react';
import { fileClonesChecker, TabsIndexes } from './helpers';

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

export const AppTabs = () => {
  const [currentTab, setCurrentTab] = useState(TabsIndexes.Images);
  const uploadInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);

  const handleChange = (event: React.SyntheticEvent, newTabIndex: number) =>
    setCurrentTab(newTabIndex);

  const uploadFileOnClickHandler = () => uploadInputRef.current?.click();

  const apiCallHandler = () => {
    if (!uploadInputRef.current || !uploadInputRef.current.files?.length)
      return;

    const { files: newlyUploadedFilesList } = uploadInputRef.current;
    const newFiles = fileClonesChecker(
      files,
      Array.from(newlyUploadedFilesList)
    );
    console.log({ newFiles });

    if (newFiles.length) setFiles((prev) => [...prev, ...newFiles]);

    // uploadInputRef.current.value = '';
  };

  console.log({ files });

  return (
    <div className={'grow'}>
      <div
        className={
          'flex justify-between border border-x-0 border-solid border-gray-200'
        }
      >
        <Tabs value={currentTab} onChange={handleChange} aria-label={'tabs'}>
          <Tab label={'Images'} {...a11yProps(0)} />
          <Tab label={'Predictions'} {...a11yProps(1)} />
        </Tabs>
        {currentTab === TabsIndexes.Images && (
          <>
            <div className={'mx-5 flex'}>
              <Button onClick={uploadFileOnClickHandler}>Upload image</Button>
            </div>
            <input
              hidden
              ref={uploadInputRef}
              multiple
              type="file"
              id={'file-upload'}
              onChange={apiCallHandler}
            />
          </>
        )}
      </div>
    </div>
  );
};
