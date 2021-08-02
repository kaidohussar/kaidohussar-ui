import React from 'react';

import {Box} from './';

export default {
   component: Box,
   title: 'Components/Box',
};

export const Primary = () => (
   <Box
      alignItems={[{['md']: 'center'}]}
      justifyContent={[{['md']: 'flex-end'}, {['sm']: 'flex-end'}]}
      flexDirection={[{['xs']: 'column'}, {['lg']: 'row'}]}
   >
      <p>Test content</p>
      <p>Test content</p>
      <p>Test content</p>
      <p>Test content</p>
   </Box>
);

Primary.storyName = 'Default';

export const SpacingTop = () => (
   <Box flexDirection={[{['xs']: 'column'}]}>
      <Box top={[{['xs']: 'xxl'}]}>
         <p>Test content</p>
      </Box>
      <Box top={[{['xs']: 'xxl'}]}>
         <p>Test content</p>
      </Box>
      <Box top={[{['xs']: 'xxl'}]}>
         <p>Test content</p>
      </Box>
      <Box top={[{['xs']: 'xxl'}]}>
         <p>Test content</p>
      </Box>
   </Box>
);

SpacingTop.storyName = 'SpacingTop';
