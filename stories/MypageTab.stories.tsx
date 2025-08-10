import { Meta, StoryObj } from '@storybook/react';
import MypageTab from '../src/components/MypageTab';
import { MainPageTabType } from '../src/types/MyTabType';

const meta: Meta<typeof MypageTab> = {
    title: 'Components/MypageTab',
    tags: ['autodocs'],
    component: MypageTab,
    argTypes: {
        activeTab: {
            control: 'select',
            options: ['myPosts', 'savedPosts', 'commentedPosts'] as MainPageTabType[],
        },
        onTabChange: { action: 'tab changed' },
    },
};

export default meta;

type Story = StoryObj<typeof MypageTab>;

export const Default: Story = {
    args: {
        activeTab: 'myPosts',
        onTabChange: (tab: MainPageTabType) => {
            console.log('Selected tab:', tab);
        },
    },
};
