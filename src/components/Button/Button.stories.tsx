import React from 'react';

import {Button} from './Button';

export default {
   component: Button,
   title: 'Components/Button',
};

export const Primary = () => <Button appearance="primary">Primary button</Button>;

Primary.storyName = 'Primary button';

export const Secondary = () => <Button appearance="secondary">Secondary button</Button>;

Secondary.storyName = 'Secondary button';

export const Destructive = () => <Button appearance="destructive">Destructive button</Button>;

Destructive.storyName = 'Destructive button';
