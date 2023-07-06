import { Dialog as MuiDialog, DialogProps } from '@mui/material';
import { FC } from 'react';

export const Dialog: FC<DialogProps> = (props) => {
  return <MuiDialog {...props} />;
};
