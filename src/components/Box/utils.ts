import {css, deviceBreakpoints} from 'theming/defaultTheme';
import {SpacingOptions} from 'theming/types';

import {BoxProps, FlexAlignmentType, FlexDirectionType, SpacingType} from './index';

export const displaySpacingPropertiesByBreakpoint = (cssProp: keyof BoxProps, options: Array<SpacingType>) => {
   return options.map((spacingValues) => {
      const [breakPoint, spacingAmount] = Object.entries(spacingValues)[0];

      switch (cssProp) {
         case 'top':
            return css`
               @media only screen and ${deviceBreakpoints[breakPoint as SpacingOptions]} {
                  margin-top: ${({theme}) => theme.spacing[spacingAmount]};
               }
            `;
         case 'right':
            return css`
               @media only screen and ${deviceBreakpoints[breakPoint as SpacingOptions]} {
                  margin-right: ${({theme}) => theme.spacing[spacingAmount]};
               }
            `;
         case 'bottom':
            return css`
               @media only screen and ${deviceBreakpoints[breakPoint as SpacingOptions]} {
                  margin-bottom: ${({theme}) => theme.spacing[spacingAmount]};
               }
            `;
         case 'left':
            return css`
               @media only screen and ${deviceBreakpoints[breakPoint as SpacingOptions]} {
                  margin-left: ${({theme}) => theme.spacing[spacingAmount]};
               }
            `;
      }
   });
};

export const displayFlexAlignmentPropertiesByBreakpoint = (cssProp: keyof BoxProps, options: Array<FlexAlignmentType>) => {
   return options.map((flex) => {
      const [breakPoint, flexT] = Object.entries(flex)[0];

      switch (cssProp) {
         case 'alignItems':
            return css`
               @media only screen and ${deviceBreakpoints[breakPoint as SpacingOptions]} {
                  align-items: ${flexT};
               }
            `;
         case 'justifyContent':
            return css`
               @media only screen and ${deviceBreakpoints[breakPoint as SpacingOptions]} {
                  justify-content: ${flexT};
               }
            `;
      }
   });
};

export const displayFlexDirectionPropertiesByBreakpoint = (options: Array<FlexDirectionType>) => {
   return options.map((flex) => {
      const [breakPoint, flexDirection] = Object.entries(flex)[0];
      return css`
         @media only screen and ${deviceBreakpoints[breakPoint as SpacingOptions]} {
            flex-direction: ${flexDirection};
         }
      `;
   });
};
