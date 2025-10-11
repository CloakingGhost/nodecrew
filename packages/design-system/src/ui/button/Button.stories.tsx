import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import PlaceholderIcon from '../../assets/placeholder/placeholder-icon.svg?react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Design System/UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'solid/primary',
        'outlined/primary',
        'outlined/secondary',
        'outlined/assistive',
        'text/primary',
        'text/assistive',
      ],
    },
    size: {
      control: { type: 'radio' },
      options: ['large', 'medium', 'small'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    iconLeft: {
      control: { type: 'boolean' },
      mapping: {
        true: <PlaceholderIcon />,
        false: null,
      },
    },
    iconRight: {
      control: { type: 'boolean' },
      mapping: {
        true: <PlaceholderIcon />,
        false: null,
      },
    },
    children: {
      control: { type: 'text' },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SolidPrimary: Story = {
  args: {
    variant: 'solid/primary',
    size: 'large',
    iconLeft: false,
    iconRight: false,
    disabled: false,
    children: 'Label',
    asChild: false,
  },
};

export const OutlinedPrimary: Story = {
  args: {
    variant: 'outlined/primary',
    size: 'large',
    iconLeft: false,
    iconRight: false,
    disabled: false,
    children: 'Label',
    asChild: false,
  },
};

export const OutlineSecondary: Story = {
  args: {
    variant: 'outlined/secondary',
    size: 'large',
    iconLeft: false,
    iconRight: false,
    disabled: false,
    children: 'Label',
    asChild: false,
  },
};

export const OutlinedAssistive: Story = {
  args: {
    variant: 'outlined/assistive',
    size: 'large',
    iconLeft: false,
    iconRight: false,
    disabled: false,
    children: 'Label',
    asChild: false,
  },
};

export const TextPrimary: Story = {
  args: {
    variant: 'text/primary',
    size: 'large',
    iconLeft: false,
    iconRight: false,
    disabled: false,
    children: 'Label',
    asChild: false,
  },
};

export const TextAssistive: Story = {
  args: {
    variant: 'text/assistive',
    size: 'large',
    iconLeft: false,
    iconRight: false,
    disabled: false,
    children: 'Label',
    asChild: false,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'solid/primary',
    size: 'large',
    iconLeft: false,
    iconRight: false,
    disabled: true,
    children: 'Label',
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
      <Button variant="solid/primary" size="large">
        Solid Primary
      </Button>
      <Button variant="solid/primary" size="large" disabled>
        Solid Primary Disabled
      </Button>
      <Button variant="solid/primary" size="medium">
        Solid Primary
      </Button>
      <Button variant="solid/primary" size="small">
        Solid Primary
      </Button>

      <Button variant="outlined/primary" size="large">
        Outlined Primary
      </Button>
      <Button variant="outlined/primary" size="large" disabled>
        Outlined Primary Disabled
      </Button>
      <Button variant="outlined/primary" size="medium">
        Outlined Primary
      </Button>
      <Button variant="outlined/primary" size="small">
        Outlined Primary
      </Button>
      <Button variant="outlined/secondary" size="large">
        Outlined Secondary
      </Button>
      <Button variant="outlined/secondary" size="large" disabled>
        Outlined Secondary Disabled
      </Button>
      <Button variant="outlined/secondary" size="medium">
        Outlined Secondary
      </Button>
      <Button variant="outlined/secondary" size="small">
        Outlined Secondary
      </Button>
      <Button variant="outlined/assistive" size="large">
        Outlined Secondary
      </Button>
      <Button variant="outlined/assistive" size="large" disabled>
        Outlined Secondary Disabled
      </Button>
      <Button variant="outlined/assistive" size="medium">
        Outlined Secondary
      </Button>
      <Button variant="outlined/assistive" size="small">
        Outlined Secondary
      </Button>
      <Button variant="text/primary" size="small">
        Text Primary
      </Button>
      <Button variant="text/primary" size="small" disabled>
        Text Primary Disabled
      </Button>
      <Button variant="text/assistive" size="small">
        Text Assistive
      </Button>
      <Button variant="text/assistive" size="small" disabled>
        Text Assistive Disabled
      </Button>
    </div>
  ),
};
