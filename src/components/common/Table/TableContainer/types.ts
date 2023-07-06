import { PaperTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { ICommonStyles } from '../../types';

export interface ITableContainerProps extends ICommonStyles {
  component: OverridableComponent<PaperTypeMap<unknown, 'div'>>;
}
