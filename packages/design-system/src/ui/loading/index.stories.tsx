import type { Meta, StoryObj } from '@storybook/react';

import { Loading } from './index';

const meta: Meta<typeof Loading> = {
  title: 'Design System/UI/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
  render: args => (
    <div className="h-screen w-screen">
      <Loading {...args} />
    </div>
  ),
};

export const Background: Story = {
  args: {
    background: true,
  },
  render: args => (
    <div className="h-screen w-screen">
      <Loading {...args} />
    </div>
  ),
};
