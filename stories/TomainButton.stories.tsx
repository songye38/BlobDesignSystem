import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TomainButton from '../src/components/ToMainButton';

const meta: Meta<typeof TomainButton> = {
  title: 'components/Button/TomainButton',
  component: TomainButton,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'radio',
      options: ['default', 'hover'],
      defaultValue: 'default',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TomainButton>;

export const Default: Story = {
  args: {
    status: 'default',
  },
};

export const Hover: Story = {
  args: {
    status: 'hover',
  },
};
