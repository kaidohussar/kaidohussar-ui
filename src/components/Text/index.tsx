import React from 'react';
import {css, styled} from 'theming';
import {SizingOptions} from 'theming/types';

type TextType = 'div' | 'span' | 'a' | 'p';

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

   /**
    * link to go to
    */
   href?: string;
}

/**
 * Component to display headings or text
 */

const StyledText = styled.div.attrs(({type, href}: TextProps) => ({
   as: type, // change element type
   href,
}))<TextProps>`
   color: ${({theme}) => (theme.name === 'light' ? theme.colors.textColorLightBg : theme.colors.textColorDarkBg)};
   font-size: ${({theme, size}) => theme.fontSizes[size]};
   font-family: ${({theme}) => theme.fontFamily};
   ${({size}) => {
      switch (size) {
         case 'xs':
         case 'sm':
         case 'md':
            return css`
               line-height: 1.6;
            `;
         default:
            return css`
               line-height: 1.4;
            `;
      }
   }};

   ${({size}) => {
      switch (size) {
         case 'lg':
            return css`
               letter-spacing: -0.4px;
            `;
      }
   }};
`;

export const Text: React.FC<TextProps> = ({children, ...props}) => <StyledText {...props}>{children}</StyledText>;

Text.displayName = 'Text';
