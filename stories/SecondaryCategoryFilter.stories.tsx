import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SecondaryCategoryFilter from '../src/components/SecondaryCategoryFilter/index';
import { Category } from '../src/types/CategoryType';  // 경로 맞게 조정

const categoryOptions: Category[] = ['recommend', 'caution', 'tip', 'question', 'help'];

const meta: Meta<typeof SecondaryCategoryFilter> = {
  title: 'components/Filtering/SecondaryCategoryFilter',
  component: SecondaryCategoryFilter,
  argTypes: {
    label: { control: 'text' },
    status: {
      control: { type: 'radio' },
      options: ['default', 'selected'],
    },
    category: {
      control: {
        type: 'select',
        options: categoryOptions,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SecondaryCategoryFilter>;

export const Default: Story = {
  args: {
    label: '음식점',
    status: 'default',
    category: 'recommend',
  },
};

export const Selected: Story = {
  args: {
    label: '숙소',
    status: 'selected',
    category: 'caution',
  },
};
