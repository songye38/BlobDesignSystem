import type { Meta, StoryObj } from '@storybook/react';
import MarkerDetail from '../src/components/MarkerDetail/index';
import { Category } from '../src/types/CategoryType';

const meta: Meta<typeof MarkerDetail> = {
  title: 'Components/MarkerDetail',
  component: MarkerDetail,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['help', 'tip', 'question', 'recommend', 'caution'] satisfies Category[],
    },
    prefix: { control: 'text' },
    timeAgo: { control: 'number' },
    title: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof MarkerDetail>;

export const Default: Story = {
  args: {
    type: 'recommend',
    prefix: '호텔',
    timeAgo: 17,
    title: '간단한 제목이 들어갑니다. 들어갑니다.ㅇㅇㅇㅇ',
  },
};

export const HelpType: Story = {
  args: {
    type: 'help',
    prefix: '음식점',
    timeAgo: 3,
    title: '여기 맛집인가요?',
  },
};

export const CautionType: Story = {
  args: {
    type: 'caution',
    prefix: '관광지',
    timeAgo: 12,
    title: '주의해야 할 사항이 있습니다.',
  },
};
