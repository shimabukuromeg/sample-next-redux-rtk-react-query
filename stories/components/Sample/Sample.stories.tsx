import { Story, Meta } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Sample, SampleProps } from '../../../src/components/Sample';

export default {
  title: 'Sample/Sample',
  component: Sample,
} as Meta;

const Template: Story<SampleProps> = (args) => (
  <ChakraProvider>
    <Sample {...args} />
  </ChakraProvider>
);

export const Default = Template.bind({});
Default.args = {
  name: 'This is the Box',
};
