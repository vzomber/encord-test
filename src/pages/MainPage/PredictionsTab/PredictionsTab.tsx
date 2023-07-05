import { PredictionsTable } from 'components/PredictionsTable';
import { FC } from 'react';
import { IPredictionsTabProps } from './types';

export const PredictionsTab: FC<IPredictionsTabProps> = ({ files }) => {
  const predictions = files.map((file) => file.predictions);

  return (
    <div className={'mt-10'}>
      {predictions.length ? (
        <div className={'px-24'}>
          <PredictionsTable files={files} />
        </div>
      ) : (
        <div className={'flex justify-center'}>
          <p className={'text-2xl font-semibold text-gray-500'}>
            No predictions provided
          </p>
        </div>
      )}
    </div>
  );
};
