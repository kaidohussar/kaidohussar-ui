import React from 'react';
import {styled} from 'theming/defaultTheme';
import {SpacingOptions} from 'theming/types';

import {
   displayFlexAlignmentPropertiesByBreakpoint,
   displayFlexDirectionPropertiesByBreakpoint,
   displaySpacingPropertiesByBreakpoint,
} from './utils';

export type FlexAlignmentType = Partial<{[key in SpacingOptions]: 'flex-end' | 'center' | 'flex-start'}>;

export type FlexDirectionType = Partial<{[key in SpacingOptions]: 'column' | 'row'}>;

export type SpacingType = Partial<{[key in SpacingOptions]: SpacingOptions}>;

export interface BoxProps {
   /**
    * Flex direction properties
    */
   flexDirection?: Array<FlexDirectionType>;

   /**
    * Flex alignment properties
    */
   justifyContent?: Array<FlexAlignmentType>;
   alignItems?: Array<FlexAlignmentType>;

   /**
    * Spacing
    */
   top?: Array<SpacingType>;
   right?: Array<SpacingType>;
   bottom?: Array<SpacingType>;
   left?: Array<SpacingType>;
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

   &:first-child {
      margin-top: 0;
   }
`;

export const Box: React.FC<BoxProps> = ({children, ...props}) => <StyledBox {...props}>{children}</StyledBox>;

Box.displayName = 'Box';
