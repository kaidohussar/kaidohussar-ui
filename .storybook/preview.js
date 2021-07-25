import {addDecorator} from '@storybook/react';

import StylesProvider from '../src/components/StylesProvider';
import {withThemesProvider} from '../src/panels/ThemeSelector/withThemeSelector';
import {defaultThemes} from '../src/theming/defaultTheme';

export const parameters = {
   actions: {argTypesRegex: '^on[A-Z].*'},
   controls: {
      matchers: {
         color: /(background|color)$/i,
         date: /Date$/,
      },
   },
};

addDecorator(withThemesProvider(defaultThemes, StylesProvider));
