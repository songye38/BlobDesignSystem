import { Meta, StoryObj } from '@storybook/react';
import Chip, { ChipProps } from '../src/components/Chip/index';
import { Category } from '../src/types/CategoryType';

const categories: Category[] = ['recommend', 'caution', 'tip', 'question', 'help'];

const meta: Meta<ChipProps> = {
  title: 'Components/Chip',
  tags: ['autodocs'],
  component: Chip,
  argTypes: {
    category: {
      control: 'select',
      options: categories,
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

export const AllVariants: Story = {
  render: (args) => (
    <>
      {categories.map((category) => (
        <Chip key={category} {...args} category={category} />
      ))}
    </>
  ),
  args: {
    prefix: '숙소',
  },
};
