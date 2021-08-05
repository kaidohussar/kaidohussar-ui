import React from 'react';

import {Icon} from './';

export default {
   component: Icon,
   title: 'Components/Icon',
};

export const Example = () => <Icon type="github" size="xl" />;

Example.storyName = 'Example';

export const LargerSize = () => <Icon type="linkedin" size="xxxl" />;

LargerSize.storyName = 'LargerSize';

export const IconAsLink = () => <Icon type="linkedin" size="xxxl" href="//www.kaidohussar.dev" target="_blank" />;

IconAsLink.storyName = 'IconAsLink';

export const WithChangedColor = () => <Icon type="linkedin" size="xxxl" color="dangerColor" />;

WithChangedColor.storyName = 'WithChangedColor';
