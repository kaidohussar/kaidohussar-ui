import addons from '@storybook/addons';
import React, { useEffect } from 'react';
import { ThemeProviderComponent } from 'styled-components';

import { Theme } from '../../theming/types';

interface ThemesProviderProps {
   themes: Theme[];
   ThemeProvider: ThemeProviderComponent<any>;
}

const BaseComponent: React.FC<any> = ({
  theme, ThemeProvider, children, themes,
}) => {
  console.log({
    theme, ThemeProvider, children, themes,
  });
  useEffect(() => {
    const channel = addons.getChannel();
    console.log('channel', channel);
    channel.emit('setThemes', themes);
  }, []);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const ThemesProvider: React.FC<ThemesProviderProps> = (props) => <BaseComponent {...props} />;
