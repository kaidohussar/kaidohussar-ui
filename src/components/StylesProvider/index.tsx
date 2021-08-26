import React, {Dispatch, SetStateAction, createContext, useEffect, useState} from 'react';
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import {defaultThemes} from 'theming';
import {Theme} from 'theming/types';
import {DeepPartial} from 'types/misc';

export const StylesContext = createContext<{
   theme: string;
   setTheme: Dispatch<SetStateAction<string>>;
}>({
   theme: 'light',
   setTheme: () => {},
});

interface StylesProviderProps {
   customThemes?: DeepPartial<Theme>[];
   selectedTheme?: string;
}

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
     margin: 0;
     -webkit-font-smoothing: antialiased;
     text-rendering: optimizeLegibility;
  }
  
  h1, h2, h3, h4, h5, p {
     margin: 0;
  }
`;

export const StylesProvider: React.FC<StylesProviderProps> = ({children, customThemes = [], selectedTheme}) => {
   const themesToUse = [...defaultThemes];

   if (customThemes?.length) {
      customThemes.forEach((customTheme, i) => {
         // @ts-ignore
         Object.entries(customTheme).forEach(([customThemeKey, customThemeValue]: [keyof Theme, Theme[unknown]]) => {
            const t = themesToUse[i] as Theme;
            const themeItem = t[customThemeKey];

            if (typeof themeItem === 'string') {
               t[customThemeKey] = customThemeValue;
            }

            if (typeof themeItem === 'object') {
               t[customThemeKey] = {
                  ...themeItem,
                  ...customThemeValue,
               };
            }
         });
      });
   }

   const savedTheme = window.localStorage.getItem('kaido-ui-theme') as string | null;
   const [themeName, setTheme] = useState<string>(savedTheme || selectedTheme || themesToUse[0].name);

   useEffect(() => {
      if (savedTheme !== themeName || savedTheme === null) {
         window.localStorage.setItem('kaido-ui-theme', themeName);
      }
   }, [savedTheme, themeName]);

   const findSelectedTheme = (themes: Theme[]) => themes.find((currentTheme) => currentTheme.name === themeName);
   const activeTheme = findSelectedTheme(themesToUse);

   return (
      <StylesContext.Provider
         value={{
            theme: themeName,
            setTheme,
         }}
      >
         <ThemeProvider theme={activeTheme}>
            <GlobalStyle />
            {children}
         </ThemeProvider>
      </StylesContext.Provider>
   );
};
