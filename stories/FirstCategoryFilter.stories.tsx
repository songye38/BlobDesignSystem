import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import FirstCategoryFilter from '../src/components/FirstCategoryFilter';
import { Category } from '../src/types/CategoryType';

const meta: Meta<typeof FirstCategoryFilter> = {
  title: 'components/FirstCategoryFilter',
  component: FirstCategoryFilter,
  tags: ['autodocs'],
  argTypes: {
    category: {
      control: 'select',
      options: ['recommend', 'caution', 'tip', 'question', 'help'] as Category[],
    },
    status: {
      control: 'radio',
      options: ['default', 'selected'],
      defaultValue: 'default',
    },
  },
};

export default meta;

type Story = StoryObj<typeof FirstCategoryFilter>;

export const Default: Story = {
  args: {
    category: 'recommend',
    status: 'default',
  },
};

export const Selected: Story = {
  args: {
    category: 'recommend',
    status: 'selected',
  },
};

