import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import { Textarea } from './index';

const meta: Meta<typeof Textarea> = {
  title: 'Design System/UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    placeholder: 'Placeholder',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Placeholder',
    disabled: true,
  },
};

export const Filled: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'filled',
  },
};
