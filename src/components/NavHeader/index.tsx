import React from 'react';
import {styled} from 'theming';
import {css} from 'theming/defaultTheme';

import {Button} from 'components/Button';

interface NavItem {
   title: string;
   onClick: () => void;
   active?: boolean;
}

export interface NavHeaderProps {
   /**
    * Navigation items
    */
   navItems: NavItem[];
   /**
    * Alignment
    */
   alignment?: 'left' | 'right';
   /**
    * Add on to display at the opposite side of nav items
    */
   addOn?: React.ReactNode;
}

/**
 * Navigation header to display at the top of the page
 */

const StyledNavHeader = styled.div<Pick<NavHeaderProps, 'alignment' | 'addOn'>>`
   display: flex;

   ${({theme}) => {
      return css`
         padding: ${theme.spacing.lg} 0;
      `;
   }}
   ${({alignment, theme}) => {
      if (alignment === 'right') {
         return css`
            justify-content: flex-end;
         `;
      } else {
         return css`
            justify-content: flex-start;
         `;
      }
   }}

   ${({addOn, alignment}) => {
      if (!!addOn) {
         return css`
            justify-content: space-between;
            flex-direction: ${alignment === 'right' ? 'row-reverse' : 'row'};
         `;
      }
   }}
`;

const StyledNavItems = styled.div<Pick<NavHeaderProps, 'alignment'>>`
   display: flex;
   font-weight: ${({theme}) => theme.fontWeights.light};

   ${({alignment, theme}) => {
      if (alignment === 'right') {
         return css`
            button {
               margin-left: ${theme.spacing.lg};
            }
         `;
      } else {
         return css`
            button {
               margin-right: ${theme.spacing.lg};
            }
         `;
      }
   }}
`;

const StyledNavItem = styled.div<{active?: boolean}>`
   ${({theme, active}) =>
      active &&
      css`
         font-weight: ${theme.fontWeights.semibold};

         button::after {
            content: '';
            position: absolute;
            bottom: -2px;
            width: 100%;
            height: 2px;
            left: 0;
            background: ${theme.colors.accentColor};
         }
      `};

   button {
      position: relative;
      text-transform: capitalize;
   }
`;

const StyledAddon = styled.div`
   display: flex;
   align-items: center;
`;

export const NavHeader: React.FC<NavHeaderProps> = ({alignment = 'right', navItems, addOn}) => {
   return (
      <StyledNavHeader alignment={alignment} addOn={addOn}>
         <StyledNavItems alignment={alignment}>
            {navItems.map((item, index) => (
               <StyledNavItem key={index} active={item.active}>
                  <Button size="large" appearance="text">
                     {item.title}
                  </Button>
               </StyledNavItem>
            ))}
         </StyledNavItems>
         {addOn && <StyledAddon>{addOn}</StyledAddon>}
      </StyledNavHeader>
   );
};

NavHeader.displayName = 'NavHeader';
