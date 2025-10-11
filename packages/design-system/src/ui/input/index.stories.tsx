import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import PlaceholderIcon from '../../assets/placeholder/placeholder-icon.svg?react';
import { Button } from '../button';
import { Label } from '../label';

import { Input } from './index';

const meta: Meta<typeof Input> = {
  title: 'Design System/UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    rounded: {
      control: { type: 'boolean', default: false },
    },
    status: {
      control: { type: 'select', default: 'default' },
      options: ['default', 'error', 'success'],
    },
    variant: {
      control: { type: 'select', default: 'outlined' },
      options: ['outlined', 'filled'],
    },
    disabled: {
      control: { type: 'boolean', default: false },
    },
  },
  args: { onClick: fn(), onInput: fn(), onFocus: fn(), onBlur: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    placeholder: 'Placeholder',
  },
};

export const Filled: Story = {
  args: { variant: 'filled', placeholder: 'Placeholder' },
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: 'Placeholder' },
};

export const File: Story = {
  args: {},
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="file">Label</Label>
      <Input id="file" type="file" />
    </div>
  ),
};

export const Number: Story = {
  args: {},
  render: () => <Input type="number" />,
};

export const Password: Story = {
  args: {},
  render: () => <Input type="password" />,
};

export const Search: Story = {
  args: {},
  render: () => <Input type="search" />,
};

export const DatetimeLocal: Story = {
  args: {},
  render: () => <Input type="datetime-local" />,
};

export const Time: Story = {
  args: {},
  render: () => <Input type="time" />,
};

export const WithLabel: Story = {
  args: {
    placeholder: 'Placeholder',
  },
  render: () => (
    <div className="flex flex-col gap-2">
      <Label>Label</Label>
      <Input placeholder="Placeholder" />
    </div>
  ),
};

export const WithButton: Story = {
  args: {
    placeholder: 'Placeholder',
  },
  render: () => (
    <div className="flex items-center gap-2">
      <Input placeholder="Placeholder" />
      <Button variant="solid/primary" size="medium">
        Button
      </Button>
    </div>
  ),
};

export const Rounded: Story = {
  args: { rounded: true, placeholder: 'Placeholder' },
};

export const Success: Story = {
  args: { status: 'success', placeholder: 'Placeholder' },
};

export const Error: Story = {
  args: { status: 'error', placeholder: 'Placeholder' },
};

export const WithPrefixIcon: Story = {
  args: {
    prefix: <PlaceholderIcon />,
    placeholder: 'Placeholder',
  },
};

export const WithPrefixText: Story = {
  args: {
    prefix: 'Prefix',
    placeholder: 'Placeholder',
  },
};

export const WithSuffixIcon: Story = {
  args: { suffix: <PlaceholderIcon />, placeholder: 'Placeholder' },
};

export const WithSuffixText: Story = {
  args: { suffix: 'Suffix', placeholder: 'Placeholder', type: 'number' },
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
      <Input placeholder="Placeholder" />
      <Input variant="filled" placeholder="Placeholder" />
      <Input disabled placeholder="Placeholder" />
      <Input rounded placeholder="Placeholder" />
      <Input variant="filled" rounded placeholder="Placeholder" />
      <Input disabled rounded placeholder="Placeholder" />
      <Input status="success" placeholder="Placeholder" />
      <Input variant="filled" status="success" placeholder="Placeholder" />
      <Input disabled status="success" placeholder="Placeholder" />
      <Input status="error" placeholder="Placeholder" />
      <Input variant="filled" status="error" placeholder="Placeholder" />
      <Input disabled status="error" placeholder="Placeholder" />
    </div>
  ),
};
