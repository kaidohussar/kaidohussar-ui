import React, {ChangeEvent} from 'react';
import {styled} from 'theming';
import {css} from 'theming/defaultTheme';

import {Text} from '../Text';

export interface SwitchProps {
   /**
    * Labels
    */
   labels?: {
      left: string;
      right: string;
   };
   /**
    * Is switch in active state
    */
   isToggled?: boolean;

   /**
    * Change active state
    */
   handleToggle: (event: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Switch
 */

const CheckBoxWrapper = styled.div`
   position: relative;
`;
const CheckBoxLabel = styled.label`
   position: absolute;
   top: 50%;
   left: 0;
   width: 42px;
   height: 16px;
   border-radius: 15px;
   background: #bebebe;
   cursor: pointer;
   transform: translateY(-50%);
   &::after {
      content: '';
      position: absolute;
      top: -4px;
      left: -3px;
      width: 24px;
      height: 24px;
      border-radius: 45px;
      transition: 0.2s;
      background: ${({theme}) => theme.colors.accentColor};
   }
`;
const Input = styled.input`
   opacity: 0;
   z-index: 1;
   border-radius: 16px;
   width: 40px;
   height: 16px;
   margin: 0;
   background: ${({theme}) => theme.colors.grey100};
   &:checked + ${CheckBoxLabel} {
      &::after {
         content: '';
         display: block;
         border-radius: 50%;
         left: calc(100% + 3px);
         transform: translateX(-100%);
         transition: 0.2s;
      }
   }
`;

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   position: relative;

   ${({theme}) => {
      return css`
         font-family: ${theme.fontFamily};
         font-weight: ${theme.fontWeights.regular};
         color: ${theme.colors.textColor};
         @media only screen and (max-width: ${theme.breakpoints.md}) {
            span {
               display: none;
            }
         }
      `;
   }}

   > *:not(:last-child) {
      margin-right: 1rem;
   }
`;

export const Switch: React.FC<SwitchProps> = ({isToggled, handleToggle, labels}) => {
   const uniqueId = Math.random().toString(36);

   return (
      <Wrapper>
         {labels && (
            <Text type="span" size="sm">
               {labels.left}
            </Text>
         )}
         <CheckBoxWrapper>
            <Input
               checked={typeof isToggled === 'boolean' ? isToggled : undefined}
               onChange={(event: ChangeEvent<HTMLInputElement>) => handleToggle(event)}
               id={uniqueId}
               name={uniqueId}
               type="checkbox"
            />

            <CheckBoxLabel htmlFor={uniqueId} />
         </CheckBoxWrapper>
         {labels && (
            <Text type="span" size="sm">
               {labels.right}
            </Text>
         )}
      </Wrapper>
   );
};

Switch.displayName = 'Switch';
