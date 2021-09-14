import { action } from '@storybook/addon-actions';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import React from 'react';

import { Switch } from '.';

export default {
  component: Switch,
  title: 'Components/Switch',
  decorators: [withKnobs],
};

export const Controlled = () => <Switch isToggled={boolean('Toggled', true)} handleToggle={action('clicked')} />;

Controlled.storyName = 'Controlled';

export const UnControlled = () => <Switch handleToggle={action('clicked')} />;

UnControlled.storyName = 'UnControlled';

export const WithLabels = () => <Switch handleToggle={action('clicked')} labels={{ left: 'Left label', right: 'Right label' }} />;

WithLabels.storyName = 'WithLabels';
