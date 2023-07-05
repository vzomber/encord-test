import { useState } from 'react';
import { AppHeader } from 'components/AppHeader';
import { TabsIndexesEnum } from './helpers';
import { ImagesTab } from './ImagesTab';
import { PredictionsTab } from './PredictionsTab';
import { IPredictedFile } from './types';

export const MainPage = () => {
  const [currentTab, setCurrentTab] = useState(TabsIndexesEnum.Images);
  const [files, setFiles] = useState<IPredictedFile[]>([]);

  const activeTabSwitchHandler = () => {
    switch (currentTab) {
      case TabsIndexesEnum.Images:
        return <ImagesTab files={files} setFiles={setFiles} />;
      case TabsIndexesEnum.Predictions:
        return <PredictionsTab files={files} />;
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
