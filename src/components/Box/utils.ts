import {css, deviceBreakpoints} from 'theming/defaultTheme';
import {SpacingOptions} from 'theming/types';

import {BoxProps, FlexAlignmentOptions, FlexAlignmentType, FlexDirectionType, SpacingType} from './index';

export const displaySpacingPropertiesByBreakpoint = (cssProp: keyof BoxProps, options: SpacingType) => {
   if (typeof options === 'string') {
      switch (cssProp) {
         case 'top':
            return css`
               margin-top: ${({theme}) => theme.spacing[options as SpacingOptions]};
            `;
         case 'right':
            return css`
               margin-right: ${({theme}) => theme.spacing[options as SpacingOptions]};
            `;
         case 'bottom':
            return css`
               margin-bottom: ${({theme}) => theme.spacing[options as SpacingOptions]};
            `;
         case 'left':
            return css`
               margin-left: ${({theme}) => theme.spacing[options as SpacingOptions]};
            `;
      }
   }

   return Object.entries(options).map((spacingValues) => {
      const [breakPoint, spacingAmount] = spacingValues;

      switch (cssProp) {
         case 'top':
            return css`
               @media only screen and ${deviceBreakpoints[breakPoint as SpacingOptions]} {
                  margin-top: ${({theme}) => theme.spacing[spacingAmount as SpacingOptions]};
               }
            `;
         case 'right':
            return css`
               @media only screen and ${deviceBreakpoints[breakPoint as SpacingOptions]} {
                  margin-right: ${({theme}) => theme.spacing[spacingAmount as SpacingOptions]};
               }
            `;
         case 'bottom':
            return css`
               @media only screen and ${deviceBreakpoints[breakPoint as SpacingOptions]} {
                  margin-bottom: ${({theme}) => theme.spacing[spacingAmount as SpacingOptions]};
               }
            `;
         case 'left':
            return css`
               @media only screen and ${deviceBreakpoints[breakPoint as SpacingOptions]} {
                  margin-left: ${({theme}) => theme.spacing[spacingAmount as SpacingOptions]};
               }
            `;
      }
   });
};

export const displayFlexAlignmentPropertiesByBreakpoint = (cssProp: keyof BoxProps, options: FlexAlignmentType) => {
   if (typeof options === 'string') {
      switch (cssProp) {
         case 'alignItems':
            return css`
               align-items: ${options};
            `;
         case 'justifyContent':
            return css`
               justify-content: ${options};
            `;
      }
   }

   return Object.entries(options).map((flex) => {
      const [breakPoint, flexT] = flex;

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

export const displayFlexDirectionPropertiesByBreakpoint = (options: FlexDirectionType) => {
   if (typeof options !== 'object') {
      return css`
         flex-direction: ${options};
      `;
   }

   return Object.entries(options).map((flex) => {
      const [breakPoint, flexDirection] = flex;

      return css`
         @media only screen and ${deviceBreakpoints[breakPoint as SpacingOptions]} {
            flex-direction: ${flexDirection};
         }
      `;
   });
};
