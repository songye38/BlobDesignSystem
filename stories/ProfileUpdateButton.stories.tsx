import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ProfileUpdateButton from '../src/components/ProfileUpdateButton';
import { TypeOptions, StatusOptions } from '../src/types/ProfileUpdateButtonType';

const meta: Meta<typeof ProfileUpdateButton> = {
    title: 'components/Button/ProfileUpdateButton',
    tags: ['autodocs'],
    component: ProfileUpdateButton,
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

type Story = StoryObj<typeof ProfileUpdateButton>;

export const Default: Story = {
    args: {
        type: 'profileEdit',
        status: 'default',
    },
};

export const Hover: Story = {
    args: {
        type: 'gotoMypage',
        status: 'hover',
    },
};

export const Active: Story = {
    args: {
        type: 'logout',
        status: 'active',
    },
};
