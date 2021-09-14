import { action } from '@storybook/addon-actions';
import React from 'react';

import { Button } from '.';

export default {
  component: Button,
  title: 'Components/Button',
};

export const Primary = () => (
  <Button onClick={action('clicked')} appearance="primary">
    Primary button
  </Button>
);

Primary.storyName = 'Primary button';

export const Secondary = () => <Button appearance="secondary">Secondary button</Button>;

Secondary.storyName = 'Secondary button';

export const Destructive = () => <Button appearance="destructive">Destructive button</Button>;

Destructive.storyName = 'Destructive button';

export const Text = () => <Button appearance="text">Text button</Button>;

Text.storyName = 'Text button';
