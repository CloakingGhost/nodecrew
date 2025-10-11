import type { Meta, StoryObj } from '@storybook/react';

import { RiArrowDownSFill } from '@remixicon/react';
import { fn } from '@storybook/test';

import { Button } from '../button';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from './index';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Design System/UI/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {},
  },
  args: {},
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={'outlined/assistive'} size={'small'}>
            Open
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Label</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>Item 1</span>
            <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span>Sub Menu</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <span>Sub Menu Item 1</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sub Menu Item 2</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span>Sub Menu Item 3</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
};

export const DropdownCheckbox: Story = {
  args: {
    children: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={'outlined/assistive'}
            size={'small'}
            iconRight={<RiArrowDownSFill />}
          >
            value
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem checked={true}>
            Item 1
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem disabled={true}>
            Item 2
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Item 3</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
};

export const DropdownRadio: Story = {
  args: {
    children: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={'outlined/assistive'}
            size={'small'}
            iconRight={<RiArrowDownSFill />}
          >
            value
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Label</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={'top'} onValueChange={fn()}>
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
};
