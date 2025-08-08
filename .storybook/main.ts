import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },


  async viteFinal(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(svgrPlugin({
      svgrOptions: {
        icon: true, // 아이콘 용도로 최적화 옵션
      }
    }));
    return config;
  }
};

export default config;
