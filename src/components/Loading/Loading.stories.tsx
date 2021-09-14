import React from 'react';

import { Loading } from '.';

export default {
  component: Loading,
  title: 'Components/Loading',
};

export const Default = () => <Loading />;

Default.storyName = 'Default';

export const FullPage = () => <Loading size="full-page" />;

FullPage.storyName = 'FullPage';

export const FillContent = () => <Loading size="fill-content" />;

FillContent.storyName = 'FillContent';
