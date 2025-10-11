import type { Meta, StoryObj } from '@storybook/react';

import { cn } from '../../lib';

import { Alert, AlertTitle, AlertDescription } from './index';

const meta: Meta<typeof Alert> = {
  title: 'Design System/UI/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {},
  },
  args: {},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: <AlertDescription>Description</AlertDescription>,
  },
  render: args => (
    <div className={cn('w-96')}>
      <Alert {...args} />
    </div>
  ),
};

export const Success: Story = {
  args: {
    children: <AlertDescription>Description</AlertDescription>,
    variant: 'success',
  },
  render: args => (
    <div className={cn('w-96')}>
      <Alert {...args} />
    </div>
  ),
};

export const Error: Story = {
  args: {
    children: <AlertDescription>Description</AlertDescription>,
    variant: 'error',
  },
  render: args => (
    <div className={cn('w-96')}>
      <Alert {...args} />
    </div>
  ),
};

export const Info: Story = {
  args: {
    children: <AlertDescription>Description</AlertDescription>,
    variant: 'info',
  },
  render: args => (
    <div className={cn('w-96')}>
      <Alert {...args} />
    </div>
  ),
};

export const WithTitle: Story = {
  args: {
    children: (
      <>
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </>
    ),
  },
  render: args => (
    <div className={cn('w-96')}>
      <Alert {...args} />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        width: '300px',
      }}
    >
      <Alert>
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </Alert>
      <Alert variant="success">
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </Alert>
      <Alert variant="error">
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </Alert>
      <Alert variant="info">
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </Alert>
    </div>
  ),
};
