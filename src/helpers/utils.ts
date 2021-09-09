import {readableColor} from 'polished';

import {SizingOptions, Theme} from '../theming/types';

export const readAbleColor = (theme: Theme) =>
   readableColor(theme.colors.textColorLightBg, theme.colors.textColorDarkBg, theme.colors.textColorLightBg);

export const goToSmallerSize = (theme: Theme, size: SizingOptions) => {
   switch (size) {
      case 'xxxl':
         return theme.fontSizes['xl'];
      case 'xxl':
         return theme.fontSizes['xl'];
      case 'xl':
         return theme.fontSizes['lg'];
      case 'lg':
         return theme.fontSizes['md'];
      case 'md':
         return theme.fontSizes['sm'];
      default:
         return theme.fontSizes[size];
   }
};
