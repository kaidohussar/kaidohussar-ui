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
   isHidden?: boolean;

   /**
    * Bar height
    */
   barHeight?: number;
}

/**
 * Frame to wrap you application content
 */

const StyledProgressBar = styled.div<Omit<ProgressBarProps, 'percentage'>>`
   ${({theme, colors, isHidden, barHeight}) => {
      const height = barHeight || 4;

      return css`
         background: ${colors && colors.bar ? colors.bar : theme.colors.grey100};
         width: 100%;
         position: fixed;
         top: 0;
         left: 0;
         height: ${height}px;
         transform: ${isHidden ? `translateY(-40px)` : `translateY(0px)`};
         transition: all ${theme.uiSpeedLonger};
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

export const ProgressBar: React.FC<ProgressBarProps> = ({percentage, colors, isHidden, barHeight}) => (
   <StyledProgressBar colors={colors} isHidden={isHidden} barHeight={barHeight}>
      <StyledProgress percentage={percentage} colors={colors} />
   </StyledProgressBar>
);

ProgressBar.displayName = 'ProgressBar';
