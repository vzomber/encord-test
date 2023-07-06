import { FC, useState } from 'react';
import { Dialog } from 'components/common';
import { IImageDialogProps, IImageParams } from './types';
import { PredictionsLayer } from 'components/PredictionsLayer';

export const ImageDialog: FC<IImageDialogProps> = ({
  isOpen,
  onClose,
  fileData,
  predictions,
}) => {
  const [imageParams, setImageParams] = useState<IImageParams | null>(null);

  const closeHandler = () => onClose();

  const imageLoadHandler = (event: React.SyntheticEvent) => {
    if (!imageParams) {
      const image = event.target as HTMLImageElement;

      setImageParams({
        width: image.width,
        height: image.height,
        naturalWidth: image.naturalWidth,
        naturalHeight: image.naturalHeight,
      });
    }
  };

  return (
    <Dialog open={isOpen} onClose={closeHandler}>
      <div className={'relative'}>
        <img
          src={URL.createObjectURL(fileData.file)}
          alt={fileData.title}
          onLoad={imageLoadHandler}
        />
        {imageParams &&
          predictions.map((prediction) => (
            <PredictionsLayer
              key={prediction.label}
              prediction={prediction}
              imageParams={imageParams}
            />
          ))}
      </div>
    </Dialog>
  );
};
