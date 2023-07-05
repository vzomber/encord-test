import { useState } from 'react';
import { AppHeader } from 'components/AppHeader';
import { TabsIndexes } from './helpers';
import { ImagesTab } from './ImagesTab';
import { PredictionsTab } from './PredictionsTab';
import { IPredictedFile } from './types';

export const MainPage = () => {
  const [currentTab, setCurrentTab] = useState(TabsIndexes.Images);
  const [files, setFiles] = useState<IPredictedFile[]>([]);

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

  return (
    <>
      <AppHeader currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {activeTabSwitchHandler()}
    </>
  );
};
