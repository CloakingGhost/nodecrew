import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import { Badge } from './index';

const meta: Meta<typeof Badge> = {
  title: 'Design System/UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'negative', 'positive', 'cautionary'],
    },
    children: {
      control: { type: 'text' },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Label',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      <Badge variant="default">123</Badge>
      <Badge variant="secondary">123</Badge>
      <Badge variant="negative">123</Badge>
      <Badge variant="positive">123</Badge>
      <Badge variant="cautionary">123</Badge>
      <Badge variant="outlined">123</Badge>
    </div>
  ),
};
