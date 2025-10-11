import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import PlaceholderIcon from '../../assets/placeholder/placeholder-icon.svg?react';

import { ButtonIcon } from './ButtonIcon';

const meta: Meta<typeof ButtonIcon> = {
  title: 'Design System/UI/ButtonIcon',
  component: ButtonIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['normal', 'background', 'solid', 'outlined'],
    },
    size: {
      control: { type: 'radio' },
      options: ['normal', 'medium', 'custom'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ButtonIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    variant: 'normal',
    size: 'custom',
    disabled: false,
    children: <PlaceholderIcon />,
    asChild: false,
  },
};

export const Background: Story = {
  args: {
    variant: 'background',
    size: 'custom',
    disabled: false,
    children: <PlaceholderIcon />,
    asChild: false,
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    size: 'custom',
    disabled: false,
    children: <PlaceholderIcon />,
    asChild: false,
  },
};

export const Solid: Story = {
  args: {
    variant: 'solid',
    size: 'custom',
    disabled: false,
    children: <PlaceholderIcon />,
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
      <ButtonIcon variant={'normal'} size={'custom'}>
        <PlaceholderIcon width={24} height={24} />
      </ButtonIcon>
      <ButtonIcon variant={'normal'} size={'custom'} disabled>
        <PlaceholderIcon />
      </ButtonIcon>
      <ButtonIcon variant={'background'} size={'custom'}>
        <PlaceholderIcon />
      </ButtonIcon>
      <ButtonIcon variant={'background'} size={'custom'} disabled>
        <PlaceholderIcon />
      </ButtonIcon>
      <ButtonIcon variant={'outlined'} size={'normal'}>
        <PlaceholderIcon />
      </ButtonIcon>
      <ButtonIcon variant={'outlined'} size={'normal'} disabled>
        <PlaceholderIcon />
      </ButtonIcon>
      <ButtonIcon variant={'outlined'} size={'small'}>
        <PlaceholderIcon />
      </ButtonIcon>
      <ButtonIcon variant={'outlined'} size={'custom'}>
        <PlaceholderIcon />
      </ButtonIcon>
      <ButtonIcon variant={'solid'} size={'normal'}>
        <PlaceholderIcon />
      </ButtonIcon>
      <ButtonIcon variant={'solid'} size={'normal'} disabled>
        <PlaceholderIcon />
      </ButtonIcon>
      <ButtonIcon variant={'solid'} size={'small'}>
        <PlaceholderIcon />
      </ButtonIcon>
      <ButtonIcon variant={'solid'} size={'custom'}>
        <PlaceholderIcon />
      </ButtonIcon>
    </div>
  ),
};
