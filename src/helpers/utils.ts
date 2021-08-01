import {readableColor} from 'polished';

import {Theme} from '../theming/types';

export const readAbleColor = (theme: Theme) => readableColor(theme.colors.colorLightBg, theme.colors.colorDarkBg, theme.colors.colorLightBg);
