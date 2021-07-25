import React from 'react';

import { Button } from './Button';

export default {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    label: {
      description: 'Overwritten description',
      table: {
        type: {
          summary: 'Something short',
          detail: 'Something really really long',
        },
      },
      control: {
        type: null,
      },
    },
  },
};

export const Primary = () => <Button appearance="primary">Primary button</Button>;

Primary.storyName = 'Primary button';

export const Secondary = () => <Button appearance="secondary">Secondary button</Button>;

Secondary.storyName = 'Secondary button';
