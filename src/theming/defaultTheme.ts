import {Theme} from './types';

const misc = {
   buttonBorderRadius: 4,
};

const textProperties = {
   fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',

   headingSmallFontSize: 14,
   headingMediumFontSize: 24,
   headingLargeFontSize: 32,
   headingVeryLargeFontSize: 48,
};

const colorLightAndDark = {
   colorDarkBg: '#FFFFFF',
   colorLightBg: '#1A1A1A',
};

export const defaultThemes: Theme[] = [
   {
      name: 'light',

      gridunit: 8,

      buttonLabelFontSize: 14,

      // Colors
      accentColor: '#1A1A1A',
      backgroundColor: '#FCFCFD',

      dangerColor: '#FF3F00',

      linkColor: '#1A1A1A',
      linkFocusedColor: '#1A1A1A',

      ...colorLightAndDark,
      ...misc,
      ...textProperties,
   },
   {
      name: 'dark',

      gridunit: 8,

      buttonLabelFontSize: 14,

      // Colors
      accentColor: '#FFFFFF',
      backgroundColor: '#1A1A1A',

      dangerColor: '#FF3F00',

      linkColor: '#FFFFFF',
      linkFocusedColor: '#FFFFFF',

      ...colorLightAndDark,
      ...misc,
      ...textProperties,
   },
];
