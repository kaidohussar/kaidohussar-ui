import React from 'react';

import {Theme} from '../../theming/types';
import {ThemesProvider} from '.';

export const withThemesProvider =
   (themes: Theme[], ThemeProvider: any) =>
   (story: any): JSX.Element =>
      (
         <ThemesProvider themes={themes} ThemeProvider={ThemeProvider as any}>
            {story()}
         </ThemesProvider>
      );
