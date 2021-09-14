import { FC, memo } from 'react';
import { Stack, Select } from '@chakra-ui/react';

export type SampleProps = {
  name: string;
};

export const Sample: FC<SampleProps> = memo(({ name }) => (
  <Stack spacing={4} direction="row" align="center">
    <div>{name}</div>
    <Select placeholder="Select option">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  </Stack>
));
