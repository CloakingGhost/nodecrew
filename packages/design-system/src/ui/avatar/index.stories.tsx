import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import { Avatar, AvatarFallback, AvatarImage } from './index';

const sampleImageSrc = 'https://github.com/shadcn.png';

const meta: Meta<typeof Avatar> = {
  title: 'Design System/UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {},
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Image: Story = {
  args: {
    children: <AvatarImage src={sampleImageSrc} />,
  },
};

export const Fallback: Story = {
  args: {
    children: <AvatarFallback />,
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
      <Avatar />
    </div>
  ),
};
