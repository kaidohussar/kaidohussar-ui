// Util func

import {css} from 'theming/defaultTheme';
import {Theme} from 'theming/types';

import {ButtonAppearance, ButtonSize} from './';

export const getButtonBackgroundColor = (theme: Theme, appearance: ButtonAppearance) => {
   switch (appearance) {
      case 'primary':
         return theme.colors.accentColor;
      case 'secondary':
         return theme.colors.backgroundColor;
      case 'destructive':
         return theme.colors.dangerColor;
      case 'text':
         return 'transparent';
   }
};

export const getButtonTextColor = (theme: Theme, appearance: ButtonAppearance) => {
   switch (appearance) {
      case 'primary':
         return theme.name === 'light' ? theme.colors.textColorDarkBg : theme.colors.textColorLightBg;
      case 'secondary':
      case 'text':
         return theme.name === 'light' ? theme.colors.textColorLightBg : theme.colors.textColorDarkBg;
      case 'destructive':
         return theme.colors.textColorDarkBg;
   }
};

export const getButtonBorderColor = (theme: Theme, appearance: ButtonAppearance) => {
   switch (appearance) {
      case 'primary':
         return theme.name === 'light' ? theme.colors.accentColor : theme.colors.textColorLightBg;
      case 'secondary':
         return theme.name === 'light' ? theme.colors.textColorLightBg : theme.colors.textColorDarkBg;
      case 'destructive':
         return theme.colors.dangerColor;
      case 'text':
         return 'transparent';
   }
};

export const getButtonSizeAttrs = (size: ButtonSize, theme: Theme) => {
   switch (size) {
      case 'extra-large':
         return theme.fontSizes.xl;
      case 'large':
         return theme.fontSizes.lg;
      case 'medium':
         return theme.fontSizes.md;
      case 'small':
         return theme.fontSizes.sm;
   }
};
