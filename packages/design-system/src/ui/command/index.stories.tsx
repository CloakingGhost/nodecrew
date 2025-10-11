import type { Meta, StoryObj } from '@storybook/react';

import { useEffect, useState } from 'react';

import {
  RiBankCardLine,
  RiCalculatorLine,
  RiCalendar2Line,
  RiCalendarLine,
  RiSettings4Line,
  RiSparkling2Fill,
  RiUserLine,
  RiUserSmileLine,
} from '@remixicon/react';
import { fn } from '@storybook/test';

import { Input } from '../input';
import { Label } from '../label';

import {
  Command,
  CommandList,
  CommandEmpty,
  CommandDialog,
  CommandInput,
  CommandItem,
  CommandGroup,
  CommandSeparator,
  CommandShortcut,
} from './index';

const meta: Meta<typeof Command> = {
  title: 'Design System/UI/Command',
  component: Command,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {},
  },
  args: {},
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  render: () => (
    <Command className="border-line-normal-neutral shadow-emphasize rounded-lg border md:min-w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <RiCalendarLine />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <RiUserSmileLine />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem disabled>
            <RiCalculatorLine />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <RiUserLine />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <RiBankCardLine />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <RiSettings4Line />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
