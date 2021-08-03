import React from 'react';

import {Text} from './';

export default {
   component: Text,
   title: 'Components/Text',
};

export const Heading1 = () => (
   <Text size="xxxl" type="h1">
      Text here
   </Text>
);

Heading1.storyName = 'Heading1';

export const Heading2 = () => (
   <Text size="xxl" type="h2">
      Text here
   </Text>
);

Heading2.storyName = 'Heading2';

export const Heading3 = () => (
   <Text size="xl" type="h3">
      Text here
   </Text>
);

Heading3.storyName = 'Heading3';

export const Paragraph = () => (
   <Text size="lg" type="p">
      Text here
   </Text>
);

Paragraph.storyName = 'Paragraph';
