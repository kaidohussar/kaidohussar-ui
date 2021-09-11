import baseStyled, {css as StyledCss, ThemedCssFunction, ThemedStyledInterface} from 'styled-components';

import {SpacingOptions, Theme} from './types';

export const styled = baseStyled as ThemedStyledInterface<Theme>;
export const css = StyledCss as ThemedCssFunction<Theme>;

export const baseUnit = 8;

const misc = {
   defaultBorderRadius: '4px',
};

const colorLightAndDark = {
   textColorDarkBg: '#FFFFFF',
   textColorLightBg: '#1A1A1A',
};

const spacing = {
   gridunit: baseUnit,
   xxs: `${baseUnit / 4}px`,
   xs: `${baseUnit / 2}px`,
   sm: `${baseUnit}px`,
   md: `${baseUnit * 3}px`,
   lg: `${baseUnit * 4}px`,
   xl: `${baseUnit * 8}px`,
   xxl: `${baseUnit * 16}px`,
   xxxl: `${baseUnit * 24}px`,
};

const fontSizes = {
   xs: '12px',
   sm: '14px',
   md: '18px',
   lg: '24px',
   xl: '32px',
   xxl: '48px',
   xxxl: '64px',
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

export const breakpoints = {
   xs: '0px',
   sm: `${BASE * 144}px`,
   md: `${BASE * 192}px`,
   lg: `${BASE * 248}px`,
   xl: `${BASE * 300}px`,
   xxl: `${BASE * 348}px`,
   xxxl: `${BASE * 400}px`,
};

const lineHeights = {
   sm: 1.4,
   md: 1.6,
   lg: 1.8,
};

export const deviceBreakpoints: {[key in SpacingOptions]: string} = {
   xs: `(min-width: ${breakpoints.xs})`,
   sm: `(min-width: ${breakpoints.sm})`,
   md: `(min-width: ${breakpoints.md})`,
   lg: `(min-width: ${breakpoints.lg})`,
   xl: `(min-width: ${breakpoints.xl})`,
   xxl: `(min-width: ${breakpoints.xxl})`,
   xxxl: `(min-width: ${breakpoints.xxxl})`,
};

const greyColors = {
   grey100: 'grey',
   grey200: 'grey',
   grey300: 'grey',
   grey400: 'grey',
   grey500: 'grey',
};

const themeLight = {
   name: 'light',

   colors: {
      ...colorLightAndDark,
      accentColor: '#1A1A1A',
      backgroundColor: '#FCFCFD',

      textColor: '#1A1A1A',

      dangerColor: '#FF3F00',

      linkColor: 'blue',
      linkFocusedColor: 'darkblue',
      ...greyColors,
   },

   fontFamily: 'arponasans, sans-serif;',

   uiSpeed,

   lineHeights,
   breakpoints,
   fontWeights,
   fontSizes,
   spacing,
   ...misc,
};

const themeDark = {
   name: 'dark',

   colors: {
      ...colorLightAndDark,
      accentColor: '#FFFFFF',
      backgroundColor: '#1A1A1A',

      textColor: '#FFFFFF',

      dangerColor: '#FF3F00',

      linkColor: '#FFFFFF',
      linkFocusedColor: '#FFFFFF',
      ...greyColors,
   },

   fontFamily: 'arponasans, sans-serif;',

   uiSpeed,

   lineHeights,
   breakpoints,
   fontWeights,
   fontSizes,
   spacing,
   ...misc,
};

export const defaultThemes: Theme[] = [themeLight, themeDark];
