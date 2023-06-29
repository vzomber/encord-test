import { AppBar, Button, Toolbar } from 'components/common';

export const AppHeader = () => {
  return (
    <div className={'grow'}>
      <AppBar position="static">
        <Toolbar className={'flex justify-center'}>
          <Button color={'inherit'}>Images</Button>
          <Button color={'inherit'}>Predictions</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
