import { ICommonStyles } from '../../types';

export interface ITableBodyProps extends ICommonStyles {
  isLoading?: boolean;
  columnsNumber: number;
}
