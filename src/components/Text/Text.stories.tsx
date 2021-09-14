import React from 'react';

import { Box } from '../Box';
import { Text } from '.';

export default {
  component: Text,
  title: 'Components/Text',
};

export const Paragraph = () => (
  <>
    <Text size="lg" type="p">
      Text here
    </Text>

    <Text size="xl" type="p">
      Text here
    </Text>

    <Text size="xxl" type="p">
      Text here
    </Text>
  </>
);

Paragraph.storyName = 'Paragraph';

export const Link = () => (
  <Box flexDirection="column">
    <Box>
      <Text size="lg" type="a" href="//www.kaidohussar.dev">
        This is a link
      </Text>
    </Box>

    <Box top="md">
      <Text size="xxxl" type="a" href="//www.kaidohussar.dev">
        This is a link
      </Text>
    </Box>
  </Box>
);

Link.storyName = 'Link';
