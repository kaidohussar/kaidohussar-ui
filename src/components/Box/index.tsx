import React, { CSSProperties } from 'react';
import { css, styled } from 'theming';
import { SpacingOptions, Theme } from 'theming/types';

import {
  displayFlexAlignmentPropertiesByBreakpoint,
  displayFlexDirectionPropertiesByBreakpoint,
  displaySpacingPropertiesByBreakpoint,
} from './utils';

export type FlexAlignmentOptions = 'flex-end' | 'center' | 'flex-start' | 'space-between' | 'space-around';
export type FlexDirectionOptions = 'column' | 'row';

export type FlexAlignmentType = Partial<{[key in SpacingOptions]: FlexAlignmentOptions}> | FlexAlignmentOptions;

export type FlexDirectionType = Partial<{[key in SpacingOptions]: FlexDirectionOptions}> | FlexDirectionOptions;

export type SpacingType = Partial<{[key in SpacingOptions]: SpacingOptions}> | SpacingOptions;

type MaxWidth = 'small' | 'medium' | 'large';

export interface BoxProps {
   /**
    * Flex direction properties
    */
   flexDirection?: FlexDirectionType;

   /**
    * Flex alignment properties
    */
   justifyContent?: FlexAlignmentType;
   alignItems?: FlexAlignmentType;

   /**
    * Spacing
    */
   top?: SpacingType;
   right?: SpacingType;
   bottom?: SpacingType;
   left?: SpacingType;

   /**
    * Max container width
    */
   maxWidth?: MaxWidth;

   /**
    * Extra CSS props
    */
   cssProps?: CSSProperties;
}

/**
 * Box component for basic alignment and spacing
 */

const getMaxWidth = (maxWidth: MaxWidth, theme: Theme) => {
  switch (maxWidth) {
    case 'small':
      return `${theme.spacing.gridunit * 100}px`;
    case 'medium':
      return `${theme.spacing.gridunit * 144}px`;
    case 'large':
      return `${theme.spacing.gridunit * 192}px`;
  }
};

const StyledBox = styled.div<BoxProps>`
   display: flex;
   ${({ flexDirection }) => flexDirection && displayFlexDirectionPropertiesByBreakpoint(flexDirection)};

   ${({ justifyContent }) => justifyContent && displayFlexAlignmentPropertiesByBreakpoint('justifyContent', justifyContent)};
   ${({ alignItems }) => alignItems && displayFlexAlignmentPropertiesByBreakpoint('alignItems', alignItems)};

   ${({ top }) => top && displaySpacingPropertiesByBreakpoint('top', top)};
   ${({ right }) => right && displaySpacingPropertiesByBreakpoint('right', right)};
   ${({ bottom }) => bottom && displaySpacingPropertiesByBreakpoint('bottom', bottom)};
   ${({ left }) => left && displaySpacingPropertiesByBreakpoint('left', left)};

   ${({ maxWidth, theme }) => {
    if (!maxWidth) {
      return '';
    }

    return css`
         max-width: ${getMaxWidth(maxWidth, theme)};
         width: 100%;
      `;
  }};

   ${({ cssProps }) => cssProps && { ...cssProps }};
`;

export const Box: React.FC<BoxProps> = ({ children, ...props }) => <StyledBox {...props}>{children}</StyledBox>;

Box.displayName = 'Box';
