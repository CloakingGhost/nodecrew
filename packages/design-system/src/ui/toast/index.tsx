'use client';

import { Toaster } from 'sonner';

function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster
        className="toaster group"
        toastOptions={{
          unstyled: true,
          classNames: {
            default:
              'py-3 px-4 w-full rounded-lg border border-line-normal-normal bg-background-elevated-normal/70 shadow-heavy flex gap-1 items-center backdrop-blur',
            success:
              '[&_div[data-title]]:!text-status-positive [&_div[data-icon]]:!text-status-positive',
            info: '[&_div[data-title]]:!text-primary-normal [&_div[data-icon]]:!text-primary-normal',
            error:
              '[&_div[data-title]]:!text-status-negative [&_div[data-icon]]:!text-status-negative',
            warning:
              '[&_div[data-title]]:!text-status-cautionary [&_div[data-icon]]:!text-status-cautionary',
            loading:
              '[&_div[data-title]]:animate-pulse [data-title]:!text-label-normal-normal',
            title: 'typography-label1-normal-bold text-label-normal',
            description: 'typography-label2 !text-label-alternative',
            actionButton:
              'typography-label1-normal-medium text-primary-normal ml-auto -my-1 -mr-2 interaction-light cursor-pointer relative px-2 py-1 rounded-md',
            cancelButton:
              'typography-label1-normal-medium text-label-normal ml-auto -my-1 -mr-2 interaction-light cursor-pointer relative px-2 py-1 rounded-md',
            closeButton:
              'text-label-neutral !bg-background-normal-normal border-line-normal-normal',
          },
        }}
        gap={6}
        offset={16}
        visibleToasts={10}
        position="top-center"
      />
    </>
  );
}

export { ToastProvider };
