import {Github, LinkedIn} from 'kaidohussar-icons';
import React from 'react';

import {IconType} from './index';

export const svgs = (type: IconType) => {
   const svgOptions: {[key in IconType]: React.ReactElement} = {
      github: <Github />,
      linkedin: <LinkedIn />,
   };
   return svgOptions[type];
};
