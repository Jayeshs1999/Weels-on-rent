import type { Meta, StoryObj } from '@storybook/react';

import { ZSnackbar } from './Snackbar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'moleculs/Snackbar',
  component: ZSnackbar,
  parameters: {
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ZSnackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sucess: Story = {
  args: {
    severity: 'success',
    position: {
        vertical: 'top',
        horizontal: 'right'
    },
    snackbarMsg: 'Message here'
  },
};

export const Warning: Story = {
  args: {
    severity: 'warning',
    position: {
        vertical: 'top',
        horizontal: 'right'
    },
    snackbarMsg: 'Message here'
  },
};

export const Info: Story = {
  args: {
    severity: 'info',
    position: {
        vertical: 'top',
        horizontal: 'right'
    },
    snackbarMsg: 'Message here'
   
  },
};
export const Error: Story = {
    args: {
      severity: 'error',
      position: {
        vertical: 'top',
        horizontal: 'right'
    },
    snackbarMsg: 'Message here'
     
},
};
