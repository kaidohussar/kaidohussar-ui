// Util func

import {Theme} from '../../theming/types';
import {ButtonAppearance} from './Button';

export const getButtonBackgroundColor = (theme: Theme, appearance: ButtonAppearance) => {
   switch (appearance) {
      case 'primary':
         return theme.colors.accentColor;
      case 'secondary':
         return theme.colors.backgroundColor;
      case 'destructive':
         return theme.colors.dangerColor;
   }
};

export const getButtonTextColor = (theme: Theme, appearance: ButtonAppearance) => {
   switch (appearance) {
      case 'primary':
         return theme.name === 'light' ? theme.colors.colorDarkBg : theme.colors.colorLightBg;
      case 'secondary':
         return theme.name === 'light' ? theme.colors.colorLightBg : theme.colors.colorDarkBg;
      case 'destructive':
         return theme.colors.colorDarkBg;
   }
};

export const getButtonBorderColor = (theme: Theme, appearance: ButtonAppearance) => {
   switch (appearance) {
      case 'primary':
         return theme.name === 'light' ? theme.colors.accentColor : theme.colors.colorLightBg;
      case 'secondary':
         return theme.name === 'light' ? theme.colors.colorLightBg : theme.colors.colorDarkBg;
      case 'destructive':
         return theme.colors.dangerColor;
   }
};
