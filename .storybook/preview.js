import {addDecorator} from '@storybook/react';
import {withThemesProvider} from 'storybook-addon-styled-component-theme';
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
   backgrounds: {
      default: 'grey',
      values: [
         {
            name: 'grey',
            value: 'grey',
         },
      ],
   },
};

addDecorator(withThemesProvider(defaultThemes), ThemeProvider);
