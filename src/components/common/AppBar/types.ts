import { ICommonStyles } from '../types';

export interface IAppBarProps extends ICommonStyles {
  position?: 'fixed' | 'absolute' | 'relative' | 'static' | 'sticky';
}
