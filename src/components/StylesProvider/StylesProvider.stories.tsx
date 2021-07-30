import React from 'react';

import {StylesProvider} from './index';

export default {
   component: StylesProvider,
   title: 'Components/StylesProvider',
};

export const Primary = () => (
   <StylesProvider>
      <p>This text is changed by styles provider</p>
   </StylesProvider>
);

Primary.storyName = 'Primary';
