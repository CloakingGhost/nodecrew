import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import { Label } from '../label';

import { RadioGroup, RadioGroupItem } from './index';

const meta: Meta<typeof RadioGroup> = {
  title: 'Design System/UI/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {},
  },
  args: { onClick: fn() },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const radioGroupItems = [
  { value: 'Apple', label: 'Apple' },
  { value: 'Banana', label: 'Banana' },
  { value: 'Cherry', label: 'Cherry' },
];

export const Normal: Story = {
  args: {
    children: radioGroupItems.map(item => (
      <div key={item.value} className="flex items-center gap-2">
        <RadioGroupItem value={item.value} onClick={fn()}>
          {item.label}
        </RadioGroupItem>
        <Label htmlFor={item.value}>{item.label}</Label>
      </div>
    )),
  },
};
