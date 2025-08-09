import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import BasicButton from '../src/components/BasicButton';
import { Status, Type } from '../src/types/BasicButtonType';

const meta: Meta<typeof BasicButton> = {
  title: 'components/Button/BasicButton',
  component: BasicButton,
  argTypes: {
    status: {
      control: 'select',
      options: ['default', 'hover', 'pressed', 'disabled', 'cancel'] as Status[],
    },
    type: {
      control: 'radio',
      options: ['primary', 'secondary'] as Type[],
    },
    label: {
      control: 'text',
      defaultValue: '버튼',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof BasicButton>;

export const Default: Story = {
  args: {
    status: 'default',
    type: 'primary',
    label: '기본 버튼',
  },
};

export const Hover: Story = {
  args: {
    status: 'hover',
    type: 'primary',
    label: '호버 상태',
  },
};

export const Pressed: Story = {
  args: {
    status: 'pressed',
    type: 'primary',
    label: '눌림 상태',
  },
};

export const Disabled: Story = {
  args: {
    status: 'disabled',
    type: 'primary',
    label: '비활성화',
  },
};

export const Cancel: Story = {
  args: {
    status: 'cancel',
    type: 'primary',
    label: '취소 상태',
  },
};

export const SecondaryDefault: Story = {
  args: {
    status: 'default',
    type: 'secondary',
    label: '세컨더리 버튼',
  },
};

export const SecondaryDisabled: Story = {
  args: {
    status: 'disabled',
    type: 'secondary',
    label: '세컨더리 비활성화',
  },
};
