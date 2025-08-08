import { Meta, StoryObj } from '@storybook/react';
import Chip, { ChipProps } from '../src/components/Chip/index';
import { Category } from '../src/types/CategoryType';

const meta: Meta<ChipProps> = {
  title: 'Components/Chip',
  component: Chip,
  argTypes: {
    category: {
      control: 'select',
      options: ['recommend', 'caution', 'tip', 'question', 'help'] as Category[],
    },
    prefix: {
      control: 'text',
      defaultValue: '숙소',
    },
  },
};

export default meta;

type Story = StoryObj<ChipProps>;

export const Default: Story = {
  args: {
    category: 'recommend',
    prefix: '숙소',
  },
};
