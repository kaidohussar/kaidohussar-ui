import {darken, lighten} from 'polished';
import React, {ButtonHTMLAttributes} from 'react';
import {css, styled} from 'theming';

import {getButtonBackgroundColor, getButtonBorderColor, getButtonSizeAttrs, getButtonTextColor} from './utils';

export type ButtonAppearance = 'primary' | 'secondary' | 'destructive' | 'text';

export type ButtonSize = 'small' | 'medium' | 'large' | 'extra-large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   /**
    * Appearance type
    */
   appearance: ButtonAppearance;
   /**
    * What background color to use
    */
   backgroundColor?: string;
   /**
    * How large should the button be?
    */
   size?: ButtonSize;
   /**
    * Optional click handler
    */
   onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */

const StyledButton = styled.button<ButtonProps>`
   text-transform: uppercase;
   margin: 0;
   border-width: 2px;
   border-style: solid;
   cursor: pointer;

   ${({appearance, size, theme}) => {
      return {
         'border-radius': theme.defaultBorderRadius,
         'font-family': theme.fontFamily,
         padding: appearance === 'text' ? '0px' : `${theme.spacing.xs} ${theme.spacing.md}`,
         'border-color': getButtonBorderColor(theme, appearance),
         background: getButtonBackgroundColor(theme, appearance),
         color: getButtonTextColor(theme, appearance),
         'font-size': getButtonSizeAttrs(size || 'medium', theme),
         transition: `all ${theme.uiSpeed}`,
         height: appearance === 'text' ? 'auto' : '44px',
      };
   }}

   &:focus {
      outline: none;
   }

   &:hover {
      background: ${({appearance, theme}) =>
         (appearance === 'primary' ? lighten : darken)(0.1, getButtonBackgroundColor(theme, appearance))};
      border-color: ${({appearance, theme}) => darken(0.1, getButtonBorderColor(theme, appearance))};
   }

   &:active {
      transform: scale(0.95);
   }
`;

export const Button: React.FC<ButtonProps> = ({children, size, ...props}) => (
   <StyledButton size={size} role="button" {...props}>
      {children}
   </StyledButton>
);

Button.displayName = 'Button';
