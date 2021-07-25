import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import React from 'react';

import { ThemeSelector } from './panels/ThemeSelector/chooseTheme';

const ADDON_ID = 'theme-selector';
const PANEL_ID = `${ADDON_ID}/panel`;

addons.register(ADDON_ID, (api) => {
  console.log('api', api);
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Theme selector',
    render: ({ active, key }) => (
      <AddonPanel active={!!active} key={key}>
        <ThemeSelector api={api} channel={addons.getChannel()} />
      </AddonPanel>
    ),
  });
});
