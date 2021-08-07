import React from 'react';

import {Frame} from './';

export default {
   component: Frame,
   title: 'Components/Frame',
};

export const Primary = () => <Frame maxWidth="medium">This here is frame content</Frame>;

Primary.storyName = 'Primary';
