import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import PlaceholderIcon from '../../assets/placeholder/placeholder-icon.svg?react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './index';

const meta: Meta<typeof Tooltip> = {
  title: 'Design System/UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    defaultOpen: {
      control: { type: 'boolean' },
    },
    delayDuration: {
      control: { type: 'number' },
    },
    open: {
      control: { type: 'boolean' },
    },
  },
  args: {
    onOpenChange: fn(),
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: { delayDuration: 0 },
  render: args => (
    <TooltipProvider>
      <Tooltip {...args}>
        <TooltipTrigger>
          <PlaceholderIcon />
        </TooltipTrigger>
        <TooltipContent>
          <p>Tooltip content</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
