const path = require('path');

module.exports = {
   stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
   resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
   },
   addons: ['@storybook/addon-links', '@storybook/addon-essentials', '../src/register.tsx'],
   babel: (options) => ({
      ...options,
      plugins: ['babel-plugin-styled-components'],
   }),
};
