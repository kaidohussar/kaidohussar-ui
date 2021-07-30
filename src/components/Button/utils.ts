// Util func

import {Theme} from '../../theming/types';
import {ButtonAppearance} from './Button';

export const getButtonBackgroundColor = (theme: Theme, appearance: ButtonAppearance) => {
   switch (appearance) {
      case 'primary':
         return theme.accentColor;
      case 'secondary':
         return theme.backgroundColor;
      case 'destructive':
         return theme.dangerColor;
   }
};

export const getButtonTextColor = (theme: Theme, appearance: ButtonAppearance) => {
   switch (appearance) {
      case 'primary':
         return theme.name === 'light' ? theme.colorDarkBg : theme.colorLightBg;
      case 'secondary':
         return theme.name === 'light' ? theme.colorLightBg : theme.colorDarkBg;
      case 'destructive':
         return theme.colorDarkBg;
   }
};

export const getButtonBorderColor = (theme: Theme, appearance: ButtonAppearance) => {
   switch (appearance) {
      case 'primary':
         return theme.name === 'light' ? theme.accentColor : theme.colorLightBg;
      case 'secondary':
         return theme.name === 'light' ? theme.colorLightBg : theme.colorDarkBg;
      case 'destructive':
         return theme.dangerColor;
   }
};
