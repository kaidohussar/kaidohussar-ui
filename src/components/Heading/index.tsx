import React from 'react';
import {styled} from 'theming/defaultTheme';
import {FontWeightOptions, SizingOptions} from 'theming/types';

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export interface HeadingProps {
   /**
    * Title
    */
   title?: string;

   /**
    * Element type
    */
   type: HeadingType;

   /**
    * Element size
    */
   size: SizingOptions;

   /**
    * Weight
    */
   weight?: FontWeightOptions;
}

/**
 * Component to display headings or text
 */

const StyledHeading = styled.h1.attrs(({type}: HeadingProps) => ({
   as: type, // change element type
}))<HeadingProps>`
   color: ${({theme}) => (theme.name === 'light' ? theme.colors.textColorLightBg : theme.colors.textColorDarkBg)};
   font-size: ${({theme, size}) => theme.fontSizes[size]};
   font-family: ${({theme}) => theme.fontFamily};
   font-weight: ${({theme, weight}) => (weight ? theme.fontWeights[weight] : theme.fontWeights.regular)};
`;

export const Heading: React.FC<HeadingProps> = ({children, ...props}) => <StyledHeading {...props}>{children}</StyledHeading>;

Heading.displayName = 'Heading ';
