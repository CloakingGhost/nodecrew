import type { Meta, StoryObj } from '@storybook/react';

import { cn } from '../../lib';

import { fn } from '@storybook/test';

import { Separator } from './index';

const meta: Meta<typeof Separator> = {
  title: 'Design System/UI/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {},
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: (
      <div className={cn('w-96')}>
        <Separator />
      </div>
    ),
  },
};
