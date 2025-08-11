import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Toggle, {Status} from '../src/components/Toggle'; // 경로는 상황에 맞게 조정

const meta: Meta<typeof Toggle> = {
  title: 'components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: { type: 'radio' },
      options: ['toggled', 'untoggled'] as Status[],
    },
    onChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: (args) => {
    const [status, setStatus] = useState(args.status);

    return (
      <Toggle
        status={status}
        onChange={(newStatus) => {
          setStatus(newStatus);
          args.onChange?.(newStatus);
        }}
      />
    );
  },
  args: {
    status: 'untoggled',
  },
};

export const Toggled: Story = {
  render: (args) => {
    const [status, setStatus] = useState(args.status);

    return (
      <Toggle
        status={status}
        onChange={(newStatus) => {
          setStatus(newStatus);
          args.onChange?.(newStatus);
        }}
      />
    );
  },
  args: {
    status: 'toggled',
  },
};
