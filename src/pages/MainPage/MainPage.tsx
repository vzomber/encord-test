import { useState } from 'react';
import { AppHeader } from 'components/AppHeader';
import { TabsIndexes } from './helpers';
import { ImagesTab } from './ImagesTab';
import { PredictionsTab } from './PredictionsTab';

export const MainPage = () => {
  const [currentTab, setCurrentTab] = useState(TabsIndexes.Images);
  const [files, setFiles] = useState<File[]>([]);

  const activeTabSwitchHandler = () => {
    switch (currentTab) {
      case TabsIndexes.Images:
        return <ImagesTab files={files} setFiles={setFiles} />;
      case TabsIndexes.Predictions:
        return <PredictionsTab />;
      default:
        return null;
    }
  };
  console.log(files);
  return (
    <>
      <AppHeader currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {activeTabSwitchHandler()}
    </>
  );
};
