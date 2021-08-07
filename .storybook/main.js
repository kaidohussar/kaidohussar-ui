const path = require('path');

module.exports = {
   stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
   resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
         src: path.resolve(__dirname, '../src/*'),
         stories: path.resolve(__dirname, '../src/stories'),
         components: path.resolve(__dirname, '../src/components'),
         theming: path.resolve(__dirname, '../src/theming'),
      },
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.mdx'],
   },
   addons: [
      '@storybook/addon-links',
      '@storybook/addon-essentials',
      'storybook-addon-styled-component-theme/dist/preset',
      '@storybook/addon-knobs',
   ],
   babel: (options) => ({
      ...options,
      plugins: ['babel-plugin-styled-components'],
   }),
};
