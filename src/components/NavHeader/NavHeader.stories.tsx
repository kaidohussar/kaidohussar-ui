import React from 'react';

import { Switch } from 'components/Switch';

import { NavHeader } from '.';

export default {
  component: NavHeader,
  title: 'Components/NavHeader',
};

export const AlignLeft = () => (
  <NavHeader
    alignment="left"
    navItems={[
      { title: 'Home', onClick: () => {}, active: true },
      { title: 'About', onClick: () => {} },
    ]}
  />
);

AlignLeft.storyName = 'AlignLeft';

export const AlignRight = () => (
  <NavHeader
    alignment="right"
    navItems={[
      { title: 'Home', onClick: () => {}, active: true },
      { title: 'About', onClick: () => {} },
    ]}
  />
);

AlignRight.storyName = 'AlignRight';

export const WithAddon = () => (
  <NavHeader
    alignment="right"
    navItems={[
      { title: 'Home', onClick: () => {}, active: true },
      { title: 'About', onClick: () => {} },
    ]}
    addOn={<Switch labels={{ left: 'Lights ON', right: 'Lights OFF' }} handleToggle={() => {}} />}
  />
);

WithAddon.storyName = 'WithAddon';

export const WithAddonRightSide = () => (
  <NavHeader
    alignment="left"
    navItems={[
      { title: 'Home', onClick: () => {}, active: true },
      { title: 'About', onClick: () => {} },
    ]}
    addOn={<Switch handleToggle={() => {}} />}
  />
);

WithAddonRightSide.storyName = 'WithAddonRightSide';
