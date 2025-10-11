import type { Meta, StoryObj } from '@storybook/react';

import { cn } from '../../lib';

import { fn } from '@storybook/test';

import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './index';

const meta: Meta<typeof ResizablePanelGroup> = {
  title: 'Design System/UI/Resizable',
  component: ResizablePanelGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {},
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: (
      <ResizablePanelGroup direction={'horizontal'} className={cn('')}>
        <ResizablePanel className="border-line-normal-alternative flex h-96 w-64 items-center justify-center border border-dashed">
          Section1
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className="border-line-normal-alternative flex h-96 w-64 items-center justify-center border border-dashed">
          Section2
        </ResizablePanel>
      </ResizablePanelGroup>
    ),
  },
};
