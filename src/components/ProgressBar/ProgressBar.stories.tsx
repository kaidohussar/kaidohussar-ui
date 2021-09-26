import {boolean, number} from '@storybook/addon-knobs';
import React from 'react';

import {ProgressBar} from '.';

export default {
   component: ProgressBar,
   title: 'Components/ProgressBar',
};

export const Primary = () => (
   <ProgressBar percentage={number('percentage', 40)} isHidden={boolean('hidden', false)} barHeight={number('Bar height', 10)} />
);

Primary.storyName = 'Primary';
