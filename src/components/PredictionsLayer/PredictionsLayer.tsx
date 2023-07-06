import { Box } from 'components/common';
import { FC } from 'react';
import { IPredictionsLayerProps } from './types';

export const PredictionsLayer: FC<IPredictionsLayerProps> = ({
  prediction,
  imageParams,
}) => {
  const { label, score } = prediction;
  const { naturalHeight, naturalWidth, width, height } = imageParams;
  console.log(imageParams);
  const formattedScore = (Number(score) * 100).toFixed(2);
  const { x1, x2, y1, y2 } = prediction.bbox;

  const newX1 = (x1 * width) / naturalWidth;
  const newY1 = (y1 * height) / naturalHeight;
  const newX2 = (x2 * width) / naturalWidth;
  const newY2 = (y2 * height) / naturalHeight;

  const layerStyles = {
    position: 'absolute',
    top: `${newY1}px`,
    left: `${newX1}px`,
    bottom: `${newY2}px`,
    right: `${newX2}px`,
    border: '2px solid #7C1492',
    color: '#7C1492',
    backgroundColor: 'rgba(124, 18, 132, 0.2)',
    fontSize: '12px',
    zIndex: 1,
  };

  return (
    <Box sx={layerStyles}>
      <p className={'absolute bottom-0 right-1'}>
        {label} ({formattedScore}%)
      </p>
    </Box>
  );
};
