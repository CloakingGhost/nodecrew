import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import { Separator } from '../separator';

import { ScrollArea } from './index';

const meta: Meta<typeof ScrollArea> = {
  title: 'Design System/UI/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {},
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: (
      <ScrollArea className="h-96 w-64">
        {[...Array(100)].map((_, index) => (
          <>
            <div
              key={`scroll-area-item-${index}`}
              className="text-label-alternative flex h-10 w-full items-center justify-center"
            >
              {index}
            </div>
            <Separator />
          </>
        ))}
      </ScrollArea>
    ),
  },
};
