import { FC } from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { IAppBarProps } from './types';

export const AppBar: FC<IAppBarProps> = (props) => <MuiAppBar {...props} />;
