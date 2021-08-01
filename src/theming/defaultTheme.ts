import baseStyled, {ThemedStyledInterface} from 'styled-components';

import {Theme} from './types';

export const styled = baseStyled as ThemedStyledInterface<Theme>;

const baseUnit = 8;

const misc = {
   buttonBorderRadius: '4px',
};

const colorLightAndDark = {
   colorDarkBg: '#FFFFFF',
   colorLightBg: '#1A1A1A',
};

const spacing = {
   gridunit: baseUnit,
   xxs: `${baseUnit / 4}px`,
   xs: `${baseUnit / 2}px`,
   sm: `${baseUnit}px`,
   md: `${baseUnit * 2}px`,
   lg: `${baseUnit * 4}px`,
   xl: `${baseUnit * 8}px`,
   xxl: `${baseUnit * 16}px`,
};

const fontSizes = {
   xs: '12px',
   sm: '14px',
   md: '16px',
   lg: '18px',
   xl: '24px',
   xxl: '32px',
   xxxl: '48px',
};

const fontWeights = {
   thin: 100,
   extralight: 200,
   light: 300,
   regular: 400,
   medium: 500,
   semibold: 600,
   bold: 700,
   extrabold: 800,
};

export const defaultThemes: Theme[] = [
   {
      name: 'light',

      colors: {
         ...colorLightAndDark,
         accentColor: '#1A1A1A',
         backgroundColor: '#FCFCFD',

         dangerColor: '#FF3F00',

         linkColor: 'blue',
         linkFocusedColor: 'darkblue',
      },

      fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',

      fontWeights,
      fontSizes,
      spacing,
      ...misc,
   },
   {
      name: 'dark',

      colors: {
         ...colorLightAndDark,
         accentColor: '#FFFFFF',
         backgroundColor: '#1A1A1A',

         dangerColor: '#FF3F00',

         linkColor: '#FFFFFF',
         linkFocusedColor: '#FFFFFF',
      },

      fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',

      fontWeights,
      fontSizes,
      spacing,
      ...misc,
   },
];
