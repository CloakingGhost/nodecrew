import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import { Label } from './index';

const meta: Meta<typeof Label> = {
  title: 'Design System/UI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn(), onInput: fn(), onFocus: fn(), onBlur: fn() },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
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
      <Label>Label</Label>
    </div>
  ),
};
