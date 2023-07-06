import { Button, Dialog, TextField } from 'components/common';
import { FC, useState } from 'react';
import { IPredictDialogProps, IPredictDialogData } from './types';

export const PredictDialog: FC<IPredictDialogProps> = ({ isOpen, onClose }) => {
  const [fieldsValues, setFieldsValues] = useState<IPredictDialogData>({
    title: '',
    description: '',
  });

  const closeHandler = () => onClose();

  const submitHandler = () => {
    onClose(fieldsValues);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFieldsValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog
      open={isOpen}
      onClose={closeHandler}
      PaperProps={{
        sx: { width: '40rem' },
      }}
    >
      <div className={'flex flex-col p-10'}>
        <TextField
          label={'Title'}
          sx={{ marginBottom: '0.5rem' }}
          onChange={changeHandler}
          inputProps={{ name: 'title' }}
        />
        <TextField
          label={'Description'}
          sx={{ marginBottom: '0.5rem' }}
          onChange={changeHandler}
          inputProps={{ name: 'description' }}
        />
        <div className={'flex w-full justify-between'}>
          <Button variant={'contained'} color={'error'} onClick={closeHandler}>
            Cancel
          </Button>
          <Button variant={'contained'} onClick={submitHandler}>
            Submit
          </Button>
        </div>
      </div>
    </Dialog>
  );
};
