import { Meta, StoryFn, StoryObj } from '@storybook/react';
import CTAButton, { CTAButtonProps } from '../src/components/CTAButton/index';
import { PurposeOptions, CTATypeOptions, StatusOptions } from '../src/types/CTAButtontypes';

const meta: Meta<CTAButtonProps> = {
  title: 'Components/CTAButton',
  component: CTAButton,
  argTypes: {
    purpose: {
      control: { type: 'radio' },
      options: PurposeOptions,
    },
    ctatype: {
      control: { type: 'select' },
      options: CTATypeOptions,
    },
    status: {
      control: { type: 'radio' },
      options: StatusOptions,
    },
  },
};
export default meta;

const Template: StoryFn<CTAButtonProps> = (args) => <CTAButton {...args} />;

export const DesktopDefault: StoryObj<CTAButtonProps> = {
  render: Template,
  args: {
    purpose: 'desktop',
    ctatype: 'writing',
    status: 'default',
  },
};

export const DesktopHover: StoryObj<CTAButtonProps> = {
  render: Template,
  args: {
    purpose: 'desktop',
    ctatype: 'writing',
    status: 'hover',
  },
};

export const MobileDefault: StoryObj<CTAButtonProps> = {
  render: Template,
  args: {
    purpose: 'mobile',
    ctatype: 'writing',
    status: 'default',
  },
};

export const MobileHover: StoryObj<CTAButtonProps> = {
  render: Template,
  args: {
    purpose: 'mobile',
    ctatype: 'writing',
    status: 'hover',
  },
};

