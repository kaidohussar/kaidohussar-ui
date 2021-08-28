import React from 'react';

import {StyledSpinner} from './styled';

export interface LoadingProps {
   size?: 'fill-content' | 'full-page';
}

/**
 * Loading
 */

export const Loading = (props: LoadingProps) => (
   <StyledSpinner {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="191px" height="191px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
         <path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#1a1a1a" stroke="none">
            <animateTransform
               attributeName="transform"
               type="rotate"
               dur="1s"
               repeatCount="indefinite"
               keyTimes="0;1"
               values="0 50 51;360 50 51"
            />
         </path>
      </svg>
   </StyledSpinner>
);

Loading.displayName = 'Loading';
