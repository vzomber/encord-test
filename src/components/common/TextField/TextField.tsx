import MuiTextField, { TextFieldProps } from '@mui/material/TextField';
import { FC } from 'react';

export const TextField: FC<TextFieldProps> = ({
  variant = 'outlined',
  ...props
}) => <MuiTextField variant={variant} {...props} />;
