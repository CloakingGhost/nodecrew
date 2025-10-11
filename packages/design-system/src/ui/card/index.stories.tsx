import type { Meta, StoryObj } from '@storybook/react';

import { cn } from '../../lib';

import { fn } from '@storybook/test';

import {
  Card,
  CardHeader,
  CardSeparator,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from './index';

const meta: Meta<typeof Card> = {
  title: 'Design System/UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {},
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: (
      <Card className={cn('h-full w-96')}>
        <CardHeader className={cn('flex flex-col p-5 pb-4')}>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardSeparator className={cn('px-5')} />
        <CardContent className={cn('p-5 pt-4')}>Content</CardContent>
        <CardFooter className={cn('flex p-5 pt-4')}>Footer</CardFooter>
      </Card>
    ),
  },
};
