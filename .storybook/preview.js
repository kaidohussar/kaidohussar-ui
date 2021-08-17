import {addDecorator, addParameters} from '@storybook/react';
import {withThemesProvider} from 'storybook-addon-styled-component-theme';
import {withTableOfContents} from 'storybook-docs-toc';
import {ThemeProvider} from 'styled-components';

import {defaultThemes} from '../src/theming';

export const parameters = {
   actions: {argTypesRegex: '^on[A-Z].*'},
   controls: {
      matchers: {
         color: /(background|color)$/i,
         date: /Date$/,
      },
   },
   options: {
      storySort: {
         order: ['Overview', 'Guidelines', 'Components'],
      },
   },
   backgrounds: {
      default: 'lightgrey',
      values: [
         {
            name: 'lightgrey',
            value: 'lightgrey',
         },
      ],
   },
};

addDecorator(withThemesProvider(defaultThemes, ThemeProvider));
addParameters(withTableOfContents());
