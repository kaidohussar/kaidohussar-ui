import React from 'react';
import {css, styled} from 'theming/defaultTheme';

import {NavHeaderProps} from 'components/NavHeader';

import {StyledSpinner} from './styled';

export interface LoadingProps {
   size?: 'fill-content' | 'full-page';
}

/**
 * Loading
 */

const StyledPath = styled.path`
   display: flex;
   font-weight: ${({theme}) => theme.fontWeights.light};

   ${({theme}) =>
      css`
         fill: ${theme.name === 'light' ? theme.colors.textColorLightBg : theme.colors.textColorDarkBg};
      `}
`;

export const Loading = (props: LoadingProps) => (
   <StyledSpinner {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="191px" height="191px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
         <StyledPath d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" stroke="none">
            <animateTransform
               attributeName="transform"
               type="rotate"
               dur="1s"
               repeatCount="indefinite"
               keyTimes="0;1"
               values="0 50 51;360 50 51"
            />
         </StyledPath>
      </svg>
   </StyledSpinner>
);

Loading.displayName = 'Loading';
