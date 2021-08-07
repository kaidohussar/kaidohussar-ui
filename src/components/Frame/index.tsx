import React from 'react';
import {deviceBreakpoints, styled} from 'theming';
import {ColorOptions, Theme} from 'theming/types';

type MaxWidth = 'small' | 'medium' | 'large';

export interface FrameProps {
   /**
    * Max container width
    */
   maxWidth: MaxWidth;
   /**
    * Background color
    */
   backgroundColor?: ColorOptions;
}

/**
 * Frame to wrap you application content
 */

const StyledFrame = styled.div<FrameProps>`
   background: ${({backgroundColor, theme}) => (backgroundColor ? theme.colors[backgroundColor] : theme.colors.backgroundColor)};
   min-height: 100vh;
   min-width: 100vh;

   main {
      display: flex;
      flex-direction: column;
      max-width: ${({maxWidth, theme}) => getMaxWidth(maxWidth, theme)};
      padding: ${({theme}) => `0 ${theme.spacing.lg}`};
      margin: 0 auto;
   }

   @media only screen and ${deviceBreakpoints.md} {
      padding: ${({theme}) => `0 ${theme.spacing.md}`};
   }

   @media only screen and ${deviceBreakpoints.sm} {
      padding: ${({theme}) => `0 ${theme.spacing.sm}`};
   }
`;

const getMaxWidth = (maxWidth: MaxWidth, theme: Theme) => {
   switch (maxWidth) {
      case 'small':
         return `${theme.spacing.gridunit * 144}px`;
      case 'medium':
         return `${theme.spacing.gridunit * 192}px`;
      case 'large':
         return `${theme.spacing.gridunit * 248}px`;
   }
};

export const Frame: React.FC<FrameProps> = ({children, maxWidth, backgroundColor}) => (
   <StyledFrame maxWidth={maxWidth} backgroundColor={backgroundColor}>
      <main>{children}</main>
   </StyledFrame>
);

Frame.displayName = 'Frame';
