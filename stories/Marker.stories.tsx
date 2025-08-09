import type { Meta, StoryObj } from '@storybook/react';
import Marker from '../src/components/Marker/index'
import { Category } from '../src/types/CategoryType';

const meta: Meta<typeof Marker> = {
  title: 'Components/Marker',
  component: Marker,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['help', 'tip', 'question', 'recommend', 'caution'] satisfies Category[],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Marker>;

// 기본 스토리 (control로 type 변경 가능)
export const Default: Story = {
  args: {
    type: 'help',
  },
};

// 타입별 Showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Marker type="help" />
      <Marker type="tip" />
      <Marker type="question" />
      <Marker type="recommend" />
      <Marker type="caution" />
    </div>
  ),
};
