import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import { Checkbox } from './index';

const meta: Meta<typeof Checkbox> = {
  title: 'Design System/UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium'],
    },
    checked: {
      control: 'boolean',
    },
    rounded: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
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
      <Checkbox />
      <Checkbox checked />
      <Checkbox size="medium" />
      <Checkbox checked size="medium" />
      <Checkbox disabled />
      <Checkbox checked disabled />
      <Checkbox size="medium" disabled />
      <Checkbox checked size="medium" disabled />
      <Checkbox rounded />
      <Checkbox checked rounded />
      <Checkbox size="medium" rounded />
      <Checkbox checked size="medium" rounded />
      <Checkbox disabled rounded />
      <Checkbox checked disabled rounded />
      <Checkbox size="medium" disabled rounded />
      <Checkbox checked size="medium" disabled rounded />
      <Checkbox background={false} />
      <Checkbox checked background={false} />
      <Checkbox size="medium" background={false} />
      <Checkbox checked size="medium" background={false} />
      <Checkbox disabled background={false} />
      <Checkbox checked disabled background={false} />
      <Checkbox size="medium" disabled background={false} />
      <Checkbox checked size="medium" disabled background={false} />
    </div>
  ),
};
