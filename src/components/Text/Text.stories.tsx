import React from 'react';

import {Box} from '../Box';
import {Text} from './';

export default {
   component: Text,
   title: 'Components/Text',
};

export const Paragraph = () => (
   <Text size="lg" type="p">
      Text here
   </Text>
);

Paragraph.storyName = 'Paragraph';

export const Link = () => (
   <>
      <Text size="lg" type="a" href="//www.kaidohussar.dev">
         This is a link
      </Text>

      <Box top="md">
         <Text size="xxxl" type="a" href="//www.kaidohussar.dev">
            This is a link
         </Text>
      </Box>
   </>
);

Link.storyName = 'Link';
