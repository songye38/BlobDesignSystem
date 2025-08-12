// DefaultInput.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DefaultInput from '../src/components/DefaultInput';
import { Status, statusOptions } from '../src/types/DefaultInputType'

const meta: Meta<typeof DefaultInput> = {
  title: 'Components/Input/DefaultInput',
  component: DefaultInput,
  argTypes: {
    status: {
      control: { type: 'radio' },
      options: statusOptions,
    },
    placeholder: { control: 'text' },
    content: { control: 'text' },
    currentLength: { control: { type: 'number', min: 0 } },
    maxLength: { control: { type: 'number', min: 1 } },
  },
};

export default meta;

type Story = StoryObj<typeof DefaultInput>;

export const Default: Story = {
  args: {
    status: 'default',
    placeholder: '플레이스 홀더',
  },
};

export const Disabled: Story = {
  args: {
    status: 'disabled',
    placeholder: '플레이스 홀더',
  },
};

export const Focused: Story = {
  args: {
    status: 'focused',
    content: '클릭함',
  },
};

export const WritingSingleLine: Story = {
  args: {
    status: 'writingSingleLine',
    content: '한줄',
    currentLength: 5,
    maxLength: 10,
  },
};

export const WritingMultiLine: Story = {
  args: {
    status: 'writingMultiLine',
    content: '안녕하세요 잘 될까요? 여러줄이 들어갑니다. 아래에 붙어요. 글자수를 세어요.하하하하하하하하하하하하하하하하하ㅏ',
    currentLength: 5,
    maxLength: 10,
  },
};

export const CommentWriting: Story = {
  args: {
    status: 'commentWriting',
    content: 'ㅇㄹㄴㄹㅇㄹㅇㄴㄹㄴㅇㄹㄴㅇㅇㄹㄴ',
  },
};
