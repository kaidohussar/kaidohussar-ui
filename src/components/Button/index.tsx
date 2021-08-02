import {darken, lighten} from 'polished';
import React, {ButtonHTMLAttributes} from 'react';
import {styled} from 'theming/defaultTheme';

import {getButtonBackgroundColor, getButtonBorderColor, getButtonTextColor} from './utils';

export type ButtonAppearance = 'primary' | 'secondary' | 'destructive';

export type ButtonSize = 'small' | 'medium' | 'large';

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
   background: ${({appearance, theme}) => getButtonBackgroundColor(theme, appearance)};
   color: ${({appearance, theme}) => getButtonTextColor(theme, appearance)};

   font-size: ${({theme}) => `${theme.fontSizes.sm}px`};
   text-transform: uppercase;
   margin: 0;
   padding: ${({theme}) => `${theme.spacing.xs} ${theme.spacing.md}`};
   border-radius: ${({theme}) => theme.defaultBorderRadius};
   border-width: 2px;
   border-color: ${({appearance, theme}) => getButtonBorderColor(theme, appearance)};
   height: 44px;
   border-style: solid;
   cursor: pointer;

   transition: all 0.2s;

   &:focus {
      outline: none;
   }

   &:hover {
      background: ${({appearance, theme}) => (appearance === 'primary' ? lighten : darken)(0.1, getButtonBackgroundColor(theme, appearance))};
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
