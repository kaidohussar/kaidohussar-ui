import React from 'react';
import {styled} from 'theming/defaultTheme';
import {SizingOptions} from 'theming/types';

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

type TextType = HeadingType | 'div' | 'span' | 'link' | 'p';

export interface TextProps {
   /**
    * Title
    */
   title?: string;

   /**
    * Element type
    */
   type: TextType;

   /**
    * Element size
    */
   size: SizingOptions;
}

/**
 * Component to display headings or text
 */

const StyledText = styled.div.attrs(({type}: TextProps) => ({
   as: type, // change element type
}))<TextProps>`
   color: ${({theme}) => (theme.name === 'light' ? theme.colors.textColorLightBg : theme.colors.textColorDarkBg)};
   font-size: ${({theme, size}) => theme.fontSizes[size]};
`;

export const Text: React.FC<TextProps> = ({children, ...props}) => <StyledText {...props}>{children}</StyledText>;

Text.displayName = 'Text';
