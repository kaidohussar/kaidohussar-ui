import React from 'react';
import {styled} from 'theming';
import {css} from 'theming/defaultTheme';

import {Text} from 'components/Text';

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
   ${({alignment}) => {
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
            a {
               margin-left: ${theme.spacing.lg};
            }
         `;
      } else {
         return css`
            a {
               margin-right: ${theme.spacing.lg};
            }
         `;
      }
   }}
`;

const StyledNavItem = styled.div<{active?: boolean}>`
   font-weight: ${({theme, active}) => active && theme.fontWeights.semibold};
`;

const StyledAddon = styled.div`
   display: flex;
   align-items: center;
`;

export const NavHeader: React.FC<NavHeaderProps> = ({alignment = 'right', navItems, addOn}) => {
   console.log('navItems', navItems);
   return (
      <StyledNavHeader alignment={alignment} addOn={addOn}>
         <StyledNavItems alignment={alignment}>
            {navItems.map((item, index) => (
               <StyledNavItem active={item.active}>
                  <Text key={index} type="a" size="xl" href="">
                     {item.title}
                  </Text>
               </StyledNavItem>
            ))}
         </StyledNavItems>
         {addOn && <StyledAddon>{addOn}</StyledAddon>}
      </StyledNavHeader>
   );
};

NavHeader.displayName = 'NavHeader';
