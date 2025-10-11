import type { Meta, StoryObj } from '@storybook/react';

import { cn } from '../../lib';

import { RiAccountBox2Fill, RiHeartFill } from '@remixicon/react';

import { Logo } from '../logo';

import { Result } from './index';

const meta: Meta<typeof Result> = {
  title: 'Design System/UI/Result',
  component: Result,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {},
  },
  args: {
    title: 'Title',
    description: 'Description',
  },
} satisfies Meta<typeof Result>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    title: 'Title',
    description: 'Description',
    icon: <RiHeartFill className="size-full" />,
    action: () => {},
    cancel: () => {},
    children: <div>Children</div>,
  },
  render: args => (
    <div className={cn('w-96')}>
      <Result {...args} />
    </div>
  ),
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success Title',
    description: 'Success Description',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error Title',
    description: 'Error Description',
  },
};

export const Icon: Story = {
  args: {
    title: 'Icon Title',
    description: 'Icon Description',
    icon: <RiAccountBox2Fill className="size-full" />,
  },
};

export const LogoIcon: Story = {
  args: {
    title: 'Logo Title',
    description: 'Logo Description',
    icon: <Logo className="text-label-neutral size-10" />,
  },
};

export const NoIcon: Story = {
  args: {
    title: 'I am just title',
    description: 'I am just description',
  },
};
