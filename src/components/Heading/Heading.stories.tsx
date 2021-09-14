import React from 'react';

import { Heading } from '.';

export default {
  component: Text,
  title: 'Components/Heading',
};

export const Heading1 = () => (
  <Heading size="xxxl" type="h1">
    Text here
  </Heading>
);

Heading1.storyName = 'Heading1';

export const Heading2 = () => (
  <Heading size="xxl" type="h2">
    Text here
  </Heading>
);

Heading2.storyName = 'Heading2';

export const Heading3 = () => (
  <Heading size="xl" type="h3">
    Text here
  </Heading>
);

Heading3.storyName = 'Heading3';

export const LightFontWeight = () => (
  <Heading size="xxxl" type="h1" weight="light">
    Text here
  </Heading>
);

LightFontWeight.storyName = 'LightFontWeight';
