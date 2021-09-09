import {goToSmallerSize} from 'helpers/utils';
import React from 'react';
import {styled} from 'theming';
import {breakpoints} from 'theming/defaultTheme';
import {FontWeightOptions, LineHeightOptions, SizingOptions, Theme} from 'theming/types';

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

   /**
    * Line height
    */
   lineHeight?: LineHeightOptions;
}

/**
 * Component to display headings or text
 */

const StyledHeading = styled.h1.attrs(({type}: HeadingProps) => ({
   as: type, // change element type
}))<HeadingProps>`
   --heading-size: ${({theme, size}) => theme.fontSizes[size]};

   @media only screen and (max-width: ${breakpoints.lg}) {
      --heading-size: ${({theme, size}) => goToSmallerSize(theme, size)};
   }

   color: ${({theme}) => (theme.name === 'light' ? theme.colors.textColorLightBg : theme.colors.textColorDarkBg)};
   font-size: var(--heading-size);
   font-family: ${({theme}) => theme.fontFamily};
   font-weight: ${({theme, weight}) => (weight ? theme.fontWeights[weight] : theme.fontWeights.regular)};
   line-height: ${({theme, lineHeight = 'sm'}) => theme.lineHeights[lineHeight]};
`;

export const Heading: React.FC<HeadingProps> = ({children, ...props}) => <StyledHeading {...props}>{children}</StyledHeading>;

Heading.displayName = 'Heading ';
