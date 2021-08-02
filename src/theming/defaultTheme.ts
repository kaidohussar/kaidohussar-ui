import baseStyled, {ThemedStyledInterface} from 'styled-components';

import {SpacingOptions, Theme} from './types';

export const styled = baseStyled as ThemedStyledInterface<Theme>;

const baseUnit = 8;

const misc = {
   defaultBorderRadius: '4px',
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

const uiSpeed = '0.2s';
const BASE = 4;

const breakpoints = {
   xs: '0px',
   sm: `${BASE * 144}px`,
   md: `${BASE * 192}px`,
   lg: `${BASE * 248}px`,
   xl: `${BASE * 300}px`,
   xxl: `${BASE * 348}px`,
};

export const deviceBreakpoints: {[key in SpacingOptions]: string} = {
   xs: `(min-width: ${breakpoints.xs})`,
   sm: `(min-width: ${breakpoints.sm})`,
   md: `(min-width: ${breakpoints.md})`,
   lg: `(min-width: ${breakpoints.lg})`,
   xl: `(min-width: ${breakpoints.xl})`,
   xxl: `(min-width: ${breakpoints.xxl})`,
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

      uiSpeed,

      breakpoints,
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

      uiSpeed,

      breakpoints,
      fontWeights,
      fontSizes,
      spacing,
      ...misc,
   },
];
