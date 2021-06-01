import { FC, memo } from 'react';

export type SampleProps = {
  name: string;
};

export const Sample: FC<SampleProps> = memo(({ name }) => (
  <>
    <h1>Sample</h1>
    <div>{ name }</div>
  </>
));
