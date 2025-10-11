import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './index';

const meta: Meta<typeof Skeleton> = {
  title: 'Design System/UI/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};
