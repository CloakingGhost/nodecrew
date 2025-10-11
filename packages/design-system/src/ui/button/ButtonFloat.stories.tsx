import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import PlaceholderIcon from '../../assets/placeholder/placeholder-icon.svg?react';

import { ButtonFloat } from './ButtonFloat';

const meta: Meta<typeof ButtonFloat> = {
  title: 'Design System/UI/ButtonFloat',
  component: ButtonFloat,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disable: {
      control: { type: 'boolean' },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ButtonFloat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    disable: false,
    children: <PlaceholderIcon />,
    asChild: false,
  },
};

export const Disabled: Story = {
  args: {
    disable: true,
    children: <PlaceholderIcon />,
    asChild: false,
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
      <ButtonFloat>
        <PlaceholderIcon width={24} height={24} />
      </ButtonFloat>
      <ButtonFloat disable>
        <PlaceholderIcon width={24} height={24} />
      </ButtonFloat>
    </div>
  ),
};
