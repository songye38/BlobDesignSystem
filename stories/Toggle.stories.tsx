import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Toggle from '../src/components/Toggle'; // 경로는 상황에 맞게 조정
import { Status } from '../src/types/ToggleType'; // Status 타입 분리해놨다면 임포트

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
