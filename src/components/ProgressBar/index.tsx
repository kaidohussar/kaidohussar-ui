import React from 'react';
import {css, styled} from 'theming';

export interface ProgressBarProps {
   /**
    * Number from 0 to 100
    */
   percentage: number;

   /**
    * Apply custom colors
    */
   colors?: {
      bar: string;
      progress: string;
   };

   /**
    * Hide progress bar
    */
   hidden?: boolean;
}

/**
 * Frame to wrap you application content
 */

const StyledProgressBar = styled.div<Omit<ProgressBarProps, 'percentage'>>`
   ${({theme, colors, hidden}) => {
      const barHeight = 4;

      return css`
         background: ${colors && colors.bar ? colors.bar : theme.colors.grey100};
         width: 100%;
         position: fixed;
         top: ${hidden ? barHeight * -1 + 'px' : 0};
         left: 0;
         height: ${barHeight}px;
         transition: all 1s;
      `;
   }};
`;

const StyledProgress = styled.div<ProgressBarProps>`
   ${({percentage, theme, colors}) => {
      return css`
         background: ${colors && colors.progress ? colors.progress : theme.colors.accentColor};
         width: ${percentage}%;
         height: 100%;
         transition: width ${theme.uiSpeed};
      `;
   }};
`;

export const ProgressBar: React.FC<ProgressBarProps> = ({percentage, colors, hidden}) => (
   <StyledProgressBar colors={colors} hidden={hidden}>
      <StyledProgress percentage={percentage} colors={colors} />
   </StyledProgressBar>
);

ProgressBar.displayName = 'ProgressBar';
