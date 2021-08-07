import React from 'react';

import {Box} from '../Box';
import {Button} from '../Button';
import {StylesProvider} from './index';

export default {
   component: StylesProvider,
   title: 'Components/StylesProvider',
};

export const Primary = () => (
   <StylesProvider>
      <p>This text is changed by styles provider</p>

      <Box top="lg">
         <Button appearance="primary">Changed by StylesProvider</Button>
      </Box>
   </StylesProvider>
);

Primary.storyName = 'Primary';

export const CustomAccentColor = () => (
   <StylesProvider customThemes={[{colors: {accentColor: 'red'}}]}>
      <p>This text is changed by styles provider</p>

      <Box top="lg">
         <Button appearance="primary">Changed by StylesProvider</Button>
      </Box>
   </StylesProvider>
);

CustomAccentColor.storyName = 'CustomAccentColor';
