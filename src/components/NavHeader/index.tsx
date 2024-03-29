import React, {ChangeEvent} from 'react';
import {styled} from 'theming';
import {css} from 'theming/defaultTheme';

import {Button} from 'components/Button';

interface NavItem {
   title: string;
   onClick: (e: ChangeEvent<EventTarget>) => void;
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

const StyledNavHeader = styled.nav<Pick<NavHeaderProps, 'alignment' | 'addOn'>>`
   display: flex;

   ${({theme}) => css`
      padding: ${theme.spacing.lg} 0;
   `}
   ${({alignment}) => css`
      justify-content: ${alignment === 'right' ? 'flex-end' : 'flex-start'};
   `}

   ${({addOn, alignment}) => {
      if (addOn) {
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
      }
      return css`
         button {
            margin-right: ${theme.spacing.lg};
         }
      `;
   }}
`;

const StyledNavItem = styled.div<{active?: boolean}>`
   ${({theme, active}) =>
      active &&
      css`
         font-weight: ${theme.fontWeights.semibold};

         button {
            &::after {
               content: '';
               position: absolute;
               bottom: -5px;
               width: 100%;
               height: 2px;
               left: 0;
               background: ${theme.colors.accentColor};
            }
         }
      `};

   button {
      position: relative;
      text-transform: capitalize;
      padding-bottom: 2px;
   }
`;

const StyledAddon = styled.div`
   display: flex;
   align-items: center;
`;

export const NavHeader: React.FC<NavHeaderProps> = ({alignment = 'right', navItems, addOn}) => (
   <StyledNavHeader alignment={alignment} addOn={addOn}>
      <StyledNavItems alignment={alignment}>
         {navItems.map((item, index) => (
            <StyledNavItem key={index} active={item.active}>
               <Button
                  onClick={(e) => {
                     item.onClick(e);
                  }}
                  size="large"
                  appearance="text"
               >
                  {item.title}
               </Button>
            </StyledNavItem>
         ))}
      </StyledNavItems>
      {addOn && <StyledAddon>{addOn}</StyledAddon>}
   </StyledNavHeader>
);

NavHeader.displayName = 'NavHeader';
