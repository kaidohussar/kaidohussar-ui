import React from 'react';
import {styled} from 'theming';
import {SpacingOptions} from 'theming/types';

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
}

/**
 * Box component for basic alignment and spacing
 */

const StyledBox = styled.div<BoxProps>`
   display: flex;
   ${({flexDirection}) => flexDirection && displayFlexDirectionPropertiesByBreakpoint(flexDirection)};

   ${({justifyContent}) => justifyContent && displayFlexAlignmentPropertiesByBreakpoint('justifyContent', justifyContent)};
   ${({alignItems}) => alignItems && displayFlexAlignmentPropertiesByBreakpoint('alignItems', alignItems)};

   ${({top}) => top && displaySpacingPropertiesByBreakpoint('top', top)};
   ${({right}) => right && displaySpacingPropertiesByBreakpoint('right', right)};
   ${({bottom}) => bottom && displaySpacingPropertiesByBreakpoint('bottom', bottom)};
   ${({left}) => left && displaySpacingPropertiesByBreakpoint('left', left)};

   > * {
      margin: 0;
   }

   &:first-child:not(:only-child) {
      margin-top: 0;
   }
`;

export const Box: React.FC<BoxProps> = ({children, ...props}) => <StyledBox {...props}>{children}</StyledBox>;

Box.displayName = 'Box';
