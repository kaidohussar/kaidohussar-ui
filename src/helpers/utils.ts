import {readableColor} from 'polished';

import {Theme} from '../theming/types';

export const readAbleColor = (theme: Theme) => readableColor(theme.textColorLightBg, theme.textColorDarkBg, theme.textColorLightBg);
