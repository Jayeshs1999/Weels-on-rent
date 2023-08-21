import type { Meta, StoryObj } from '@storybook/react';

import { ZButton } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'moleculs/ZButton',
  component: ZButton,
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
} satisfies Meta<typeof ZButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const textButton: Story = {
  args: {
    textLabel: 'Submit',
    variant: 'text',
    width: '20%',
    isDisabled: false
  },
};

export const submitButton: Story = {
  args: {
    textLabel: 'Submit',
    variant: 'contained',
    width: '20%',
    isDisabled: false
  },
};

export const outlineButton: Story = {
  args: {
    textLabel: 'Submit',
    variant: 'outlined',
    width: '20%',
    isDisabled: false
  },
};
