import type { Meta, StoryObj } from '@storybook/react';

import { Tag } from './index';

const meta: Meta<typeof Tag> = {
  title: 'Design System/UI/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'primary',
        'positive',
        'negative',
        'cautionary',
        'outlined',
      ],
    },
    children: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Label',
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
      <Tag variant="default">Default</Tag>
      <Tag variant="primary">Primary</Tag>
      <Tag variant="positive">Positive</Tag>
      <Tag variant="negative">Negative</Tag>
      <Tag variant="cautionary">Cautionary</Tag>
      <Tag variant="outlined">Outlined</Tag>
    </div>
  ),
};
