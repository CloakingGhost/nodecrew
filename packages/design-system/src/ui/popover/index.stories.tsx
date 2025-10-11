import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import PlaceholderIcon from '../../assets/placeholder/placeholder-icon.svg?react';

import { Popover, PopoverTrigger, PopoverContent } from './index';

const meta: Meta<typeof Popover> = {
  title: 'Design System/UI/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    onOpenChange: fn(),
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
  render: args => (
    <Popover {...args}>
      <PopoverTrigger>
        <PlaceholderIcon />
      </PopoverTrigger>
      <PopoverContent>
        <p>Tooltip content</p>
      </PopoverContent>
    </Popover>
  ),
};
