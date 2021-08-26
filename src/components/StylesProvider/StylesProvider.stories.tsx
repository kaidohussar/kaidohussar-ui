import React from 'react';

import {Heading} from 'components/Heading';

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
   <StylesProvider customThemes={[{colors: {accentColor: 'red'}, fontFamily: 'Poppins'}]}>
      <p>This text is changed by styles provider!</p>

      <Box top="lg">
         <Button appearance="primary">Changed by StylesProvider</Button>
      </Box>

      <Heading type="h1" size="md">
         Text
      </Heading>
   </StylesProvider>
);

CustomAccentColor.storyName = 'CustomAccentColor';
