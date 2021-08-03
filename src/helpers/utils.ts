import {readableColor} from 'polished';

import {Theme} from '../theming/types';

export const readAbleColor = (theme: Theme) =>
   readableColor(theme.colors.textColorLightBg, theme.colors.textColorDarkBg, theme.colors.textColorLightBg);
