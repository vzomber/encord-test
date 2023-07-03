export interface IPredictDialogProps {
  isOpen: boolean;
  onClose: (fieldsValues?: IPredictDialogData) => void;
}

export interface IPredictDialogData {
  title: string;
  description: string;
}
