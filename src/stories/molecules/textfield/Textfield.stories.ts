import type { Meta, StoryObj } from '@storybook/react';

import { TextFieldFunction } from './Textfield';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'moleculs/Textfield',
  component: TextFieldFunction,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     width: '20%'
//   },
} satisfies Meta<typeof TextFieldFunction>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Outlined: Story = {
  args: {
    isRequired: false,
    textLabel: 'Label',
    textVariant: 'outlined',
    size: 'small',
    width: '20%',
    multiline:false,
    maxRows: 3,
    minRows: 4,
    value: ''
    
  },
};

export const Secondary: Story = {
  args: {
    isRequired: false,
    textLabel: 'Label',
    textVariant: 'filled',
    size: 'small',
    width: '20%',
    multiline:false,
    maxRows: 3,
    minRows: 4,
    value: ''
  },
};

export const Large: Story = {
  args: {
    isRequired: false,
    textLabel: 'Label',
    textVariant: 'standard',
    size: 'small',
    width: '20%',
    multiline:false,
    maxRows: 3,
    minRows: 4,
    value: ''
  },
};
