import type { Meta, StoryObj } from '@storybook/react';

import { cn } from '../../lib';

import { fn } from '@storybook/test';

import PlaceholderIcon from '../../assets/placeholder/placeholder-icon.svg?react';
import { Card, CardContent, CardSeparator, CardHeader } from '../card';

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  CardTabButton,
} from './index';

const meta: Meta<typeof Tabs> = {
  title: 'Design System/UI/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {},
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: (
      <Tabs defaultValue="Tab1" className="w-[400px]">
        <TabsList className="flex gap-2">
          <TabsTrigger
            value="Tab1"
            className="data-[state=active]:text-primary-normal"
          >
            Tab1
          </TabsTrigger>
          <TabsTrigger
            value="Tab2"
            className="data-[state=active]:text-primary-normal"
          >
            Tab2
          </TabsTrigger>
          <TabsTrigger
            value="Tab3"
            className="data-[state=active]:text-primary-normal"
          >
            Tab3
          </TabsTrigger>
        </TabsList>
        <CardSeparator className={cn('py-2')} />
        <TabsContent value="Tab1">Tab1</TabsContent>
        <TabsContent value="Tab2">Tab2</TabsContent>
        <TabsContent value="Tab3">Tab3</TabsContent>
      </Tabs>
    ),
  },
};

export const TabWithCard: Story = {
  args: {
    children: (
      <Card className={cn('flex h-full w-[400px] flex-col')}>
        <Tabs defaultValue="Tab1">
          <TabsList asChild>
            <CardHeader className="flex gap-1 px-5 pb-2 pt-3">
              <TabsTrigger value="Tab1" asChild>
                <CardTabButton iconLeft={<PlaceholderIcon />}>
                  Tab1
                </CardTabButton>
              </TabsTrigger>
              <TabsTrigger value="Tab2" asChild>
                <CardTabButton iconLeft={<PlaceholderIcon />}>
                  Tab2
                </CardTabButton>
              </TabsTrigger>
              <TabsTrigger value="Tab3" asChild>
                <CardTabButton iconLeft={<PlaceholderIcon />}>
                  Tab3
                </CardTabButton>
              </TabsTrigger>
            </CardHeader>
          </TabsList>
          <CardSeparator className={cn('px-5')} />
          <TabsContent value="Tab1">
            <CardContent>
              <div className="flex h-[200px] flex-col items-center justify-center gap-2">
                <div className="typography-title2-bold-bold text-label-assistive">
                  <div>Tab1</div>
                </div>
              </div>
            </CardContent>
          </TabsContent>
          <TabsContent value="Tab2">
            <CardContent>
              <div className="flex h-[200px] flex-col items-center justify-center gap-2">
                <div className="typography-title2-bold-bold text-label-assistive">
                  <div>Tab2</div>
                </div>
              </div>
            </CardContent>
          </TabsContent>
          <TabsContent value="Tab3">
            <CardContent>
              <div className="flex h-[200px] flex-col items-center justify-center gap-2">
                <div className="typography-title2-bold-bold text-label-assistive">
                  <div>Tab3</div>
                </div>
              </div>
            </CardContent>
          </TabsContent>
        </Tabs>
      </Card>
    ),
  },
};
