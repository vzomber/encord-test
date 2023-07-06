import { Box } from 'components/common';
import { FC } from 'react';
import { IPredictionsLayerProps } from './types';

export const PredictionsLayer: FC<IPredictionsLayerProps> = ({
  prediction,
  imageParams,
}) => {
  const { label, score, bbox } = prediction;
  const { naturalHeight, naturalWidth, width, height } = imageParams;
  const formattedScore = (Number(score) * 100).toFixed(2);

  const calculatedX1 = bbox.x1 * (width / naturalWidth);
  const calculatedY1 = bbox.y1 * (height / naturalHeight);
  const calculatedX2 = bbox.x2 * (width / naturalWidth);
  const calculatedY2 = bbox.y2 * (height / naturalHeight);

  const x1 = calculatedX1 < 0 ? 0 : calculatedX1;
  const y1 = calculatedY1 < 0 ? 0 : calculatedY1;
  const x2 = calculatedX2 > width ? 0 : width - calculatedX2;
  const y2 = calculatedY2 > height ? 0 : height - calculatedY2;

  const layerStyles = {
    position: 'absolute',
    top: `${y1}px`,
    left: `${x1}px`,
    right: `${x2}px`,
    bottom: `${y2}px`,
    backgroundColor: 'rgba(73, 48, 97, 0.2)',
    zIndex: 1,
    fontSize: '14px',
    color: '#493061',
    border: '2px solid #493061',
  };

  return (
    <Box sx={layerStyles}>
      <p className={'absolute bottom-0 right-1'}>
        {`${label} ${formattedScore}%`}
      </p>
    </Box>
  );
};
