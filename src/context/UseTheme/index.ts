import { useContext } from 'react';

import { StylesContext } from 'components';

export const useTheme = () => useContext(StylesContext);
