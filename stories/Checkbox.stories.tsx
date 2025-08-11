import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../src/components/Checkbox/index';
import { Status } from '../src/types/CheckboxType';

const meta: Meta<typeof Checkbox> = {
  title: 'components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['unselected', 'disabled', 'intermeditate', 'selected', 'alreaySelected'] as Status[],
    },
    onChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Unselected: Story = {
  args: {
    status: 'unselected',
  },
};

export const Disabled: Story = {
  args: {
    status: 'disabled',
  },
};

export const Intermeditate: Story = {
  args: {
    status: 'intermeditate',
  },
};

export const Selected: Story = {
  args: {
    status: 'selected',
  },
};

export const AlreadySelected: Story = {
  args: {
    status: 'alreaySelected',
  },
};
