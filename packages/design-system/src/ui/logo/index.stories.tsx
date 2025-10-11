import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import { Logo } from './index';

const meta: Meta<typeof Logo> = {
  title: 'Design System/UI/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [undefined, 'horizontal', 'vertical'],
    },
    color: {
      control: { type: 'radio' },
      options: [undefined, 'black', 'white'],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};

export const Horizontal: Story = {
  args: { variant: 'horizontal' },
};

export const Vertical: Story = {
  args: { variant: 'vertical' },
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
      <Logo />
      <Logo color="black" />
      <Logo color="white" />
      <Logo variant="horizontal" />
      <Logo variant="horizontal" color="black" />
      <Logo variant="horizontal" color="white" />
      <Logo variant="vertical" />
      <Logo variant="vertical" color="black" />
      <Logo variant="vertical" color="white" />
    </div>
  ),
};
