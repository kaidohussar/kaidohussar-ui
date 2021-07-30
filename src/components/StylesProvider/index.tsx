import React, {Dispatch, SetStateAction, createContext, useEffect, useState} from 'react';
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import {defaultThemes} from 'theming/defaultTheme';
import {Theme} from 'theming/types';

export const StylesContext = createContext<{
   theme: string;
   setTheme: Dispatch<SetStateAction<string>>;
}>({
   theme: 'light',
   setTheme: () => {},
});

interface StylesProviderProps {
   themes?: Array<Theme>;
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
`;

export const StylesProvider: React.FC<StylesProviderProps> = ({children, themes}) => {
   const savedTheme = window.localStorage.getItem('kaido-ui-theme') as string | null;
   const defaultLightTheme = defaultThemes.find((defaultTheme) => defaultTheme.name === 'light') as Theme;

   const [themeName, setTheme] = useState<string>(savedTheme || defaultLightTheme.name);

   useEffect(() => {
      if (savedTheme !== themeName || savedTheme === null) {
         window.localStorage.setItem('kaido-ui-theme', themeName);
      }
   }, [savedTheme, themeName]);

   const findSelectedTheme = (themes: Theme[]) => themes.find((currentTheme) => currentTheme.name === themeName);
   const selectedTheme = findSelectedTheme(themes && themes.length > 0 ? themes : defaultThemes);

   return (
      <StylesContext.Provider
         value={{
            theme: themeName,
            setTheme,
         }}
      >
         <ThemeProvider theme={selectedTheme}>
            <GlobalStyle />
            {children}
         </ThemeProvider>
      </StylesContext.Provider>
   );
};
