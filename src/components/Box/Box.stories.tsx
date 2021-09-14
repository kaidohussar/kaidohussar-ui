import React from 'react';

import { Box } from '.';

export default {
  component: Box,
  title: 'Components/Box',
};

export const Primary = () => (
  <Box justifyContent="center" top="md">
    <p>Test content</p>
    <p>Test content</p>
    <p>Test content</p>
    <p>Test content</p>
  </Box>
);

Primary.storyName = 'Primary';

export const AlignItemsByBreakpoint = () => (
  <Box alignItems={{ md: 'center', xl: 'flex-end' }} justifyContent={{ md: 'center' }} flexDirection={{ xs: 'column' }}>
    <p>Test content</p>
    <p>Test content</p>
    <p>Test content</p>
    <p>Test content</p>
  </Box>
);

AlignItemsByBreakpoint.storyName = 'Items aligned by breakpoint';

export const SpacingTop = () => (
  <Box flexDirection={{ xs: 'column' }}>
    <Box top={{ xs: 'xxl' }}>
      <p>Test content</p>
    </Box>
    <Box top={{ xs: 'xxl' }}>
      <p>Test content</p>
    </Box>
    <Box top={{ xs: 'xxl' }}>
      <p>Test content</p>
    </Box>
    <Box top={{ xs: 'xxl' }}>
      <p>Test content</p>
    </Box>
  </Box>
);

SpacingTop.storyName = 'SpacingTop';
