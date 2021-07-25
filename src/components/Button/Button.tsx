import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
   /**
    * Appearance type
    */
   appearance?: 'primary' | 'secondary';
   /**
    * What background color to use
    */
   backgroundColor?: string;
   /**
    * How large should the button be?
    */
   size?: 'small' | 'medium' | 'large';
   /**
    * Optional click handler
    */
   onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const StyledButton = styled.button<ButtonProps>`
   /* Adapt the colors based on primary prop */
   background: ${({ appearance, theme }) => (appearance === 'primary' ? theme.backgroundColor : 'red')};
   color: ${({ appearance, theme }) => (appearance === 'primary' ? theme.textColor : 'palevioletred')};

   font-size: 1em;
   margin: 1em;
   padding: 0.25em 1em;
   border: 2px solid palevioletred;
   border-radius: 3px;
`;

export const Button: React.FC<ButtonProps> = ({ children, size, ...props }) => (
  <StyledButton size={size} {...props}>
    {children}
  </StyledButton>
);
Button.displayName = 'Button';
