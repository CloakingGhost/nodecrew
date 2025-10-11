import type { Meta, StoryObj } from '@storybook/react';

import { toast } from 'sonner';

import { Button } from '../button';

import { ToastProvider } from './index';

const meta: Meta<typeof ToastProvider> = {
  title: 'Design System/UI/Toast',
  component: ToastProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ToastProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
  render: args => (
    <ToastProvider {...args}>
      <div className="flex size-full flex-col gap-2">
        <Button size="small" onClick={() => toast.success('Success')}>
          Success
        </Button>
        <Button size="small" onClick={() => toast.error('Error')}>
          Error
        </Button>
        <Button size="small" onClick={() => toast.info('Info')}>
          Info
        </Button>
        <Button size="small" onClick={() => toast.warning('Warning')}>
          Warning
        </Button>
        <Button size="small" onClick={() => toast.loading('Loading')}>
          Loading
        </Button>
        <Button size="small" onClick={() => toast.message('Message')}>
          Message
        </Button>
        <Button
          size="small"
          onClick={() => toast.custom(() => <div>Custom</div>)}
        >
          Custom
        </Button>
        <Button
          size="small"
          onClick={() =>
            toast.message('With Description', { description: 'Description' })
          }
        >
          With Description
        </Button>
        <Button
          size="small"
          onClick={() =>
            toast.message('With Action', {
              description: 'Description',
              action: { label: 'Action', onClick: () => {} },
            })
          }
        >
          With Action
        </Button>
        <Button
          size="small"
          onClick={() =>
            toast.message('With Action and Cancel', {
              description: 'Description',
              action: { label: 'Action', onClick: () => {} },
              cancel: { label: 'Cancel', onClick: () => {} },
            })
          }
        >
          With Action and Cancel
        </Button>
        <Button
          size="small"
          onClick={() => toast.message('With Icon', { icon: '🚀' })}
        >
          With Icon
        </Button>
        <Button
          size="small"
          onClick={() =>
            toast.message('With Close Button', { closeButton: true })
          }
        >
          With Close Button
        </Button>
        <Button
          size="small"
          onClick={() => toast.message('Rich Colors', { richColors: true })}
        >
          Invert
        </Button>
        <Button
          size="small"
          onClick={() => toast.success('Rich Colors', { richColors: true })}
        >
          Rich Colors
        </Button>
      </div>
    </ToastProvider>
  ),
};
