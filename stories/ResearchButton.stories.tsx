import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ResearchButton from '../src/components/ResearchButton';
import { TypeOptions, StatusOptions } from '../src/types/ResearchButtonType';

const meta: Meta<typeof ResearchButton> = {
    title: 'components/Button/ResearchButton',
    tags: ['autodocs'],
    component: ResearchButton,
    argTypes: {
        type: {
            control: 'select',
            options: TypeOptions,
        },
        status: {
            control: 'select',
            options: StatusOptions,
        },
    },
};

export default meta;

type Story = StoryObj<typeof ResearchButton>;

export const DefaultDesktop: Story = {
    args: {
        type: 'desktop',
        status: 'default',
    },
};

export const HoverDesktop: Story = {
    args: {
        type: 'desktop',
        status: 'hover',
    },
};

export const DefaultMobile: Story = {
    args: {
        type: 'mobile',
        status: 'default',
    },
};

export const HoverMobile: Story = {
    args: {
        type: 'mobile',
        status: 'hover',
    },
};
