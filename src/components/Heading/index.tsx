import React from 'react';
import {styled} from 'theming/defaultTheme';
import {SizingOptions} from 'theming/types';

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
`;

export const Heading: React.FC<HeadingProps> = ({children, ...props}) => <StyledHeading {...props}>{children}</StyledHeading>;

Heading.displayName = 'Heading ';
