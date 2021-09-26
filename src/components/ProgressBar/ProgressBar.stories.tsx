import {boolean, number} from '@storybook/addon-knobs';
import React from 'react';

import {ProgressBar} from '.';

export default {
   component: ProgressBar,
   title: 'Components/ProgressBar',
};

export const Primary = () => <ProgressBar percentage={number('percentage', 40)} hidden={boolean('hidden', false)} />;

Primary.storyName = 'Primary';
