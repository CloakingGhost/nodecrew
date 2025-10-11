import type { Meta, StoryObj } from '@storybook/react';

import { cn } from '../../lib';

import { ResultFullScreen } from './index';

const meta: Meta<typeof ResultFullScreen> = {
  title: 'Design System/UI/ResultFullScreen',
  component: ResultFullScreen,
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
} satisfies Meta<typeof ResultFullScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    title: 'Title',
    description: 'Description',
    children: <div>Children</div>,
  },
  render: args => (
    <div className={cn('w-96')}>
      <ResultFullScreen {...args} />
    </div>
  ),
};
