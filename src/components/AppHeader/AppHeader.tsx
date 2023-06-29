import { FC } from 'react';
import { Tab, Tabs } from 'components/common';
import { IAppHeaderProps } from './types';

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

export const AppHeader: FC<IAppHeaderProps> = ({
  currentTab,
  setCurrentTab,
}) => {
  const handleChange = (event: React.SyntheticEvent, newTabIndex: number) =>
    setCurrentTab(newTabIndex);

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
      </div>
    </div>
  );
};
