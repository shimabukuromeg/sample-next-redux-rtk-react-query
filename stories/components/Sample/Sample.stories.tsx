import { Story, Meta } from '@storybook/react';
import { Sample, SampleProps } from '../../../src/components/Sample';

export default {
  title: 'Sample/Sample',
  component: Sample,
} as Meta;

const Template: Story<SampleProps> = (args) => (
  <Sample {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: "sample name",
};
