import React from 'react';
import {styled} from 'theming';
import {ColorOptions, SizingOptions} from 'theming/types';

import {svgs} from './svgs';

export type IconType = 'github' | 'linkedin';

export interface IconProps {
   /**
    * Element type
    */
   type: IconType;

   /**
    * Icon size
    */
   size: SizingOptions;

   /**
    * Icon color
    */
   color?: ColorOptions;

   /**
    * Redirect link
    */
   href?: string;

   /**
    * Link target
    */
   target?: '_blank' | '_parent';
}

/**
 * Icon component
 */

const StyledIcon = styled.div.attrs(({href, target, type}: IconProps) => ({
   as: href && 'a',
   name: type,
   'aria-label': type,
   ...(href ? {target: target || '_self', rel: 'noopener'} : {}),
}))<IconProps>`
   display: block;
   width: ${({theme, size}) => theme.fontSizes[size]};
   height: ${({theme, size}) => theme.fontSizes[size]};

   svg {
      width: 100%;
      height: 100%;

      fill: ${({theme, color}) => (color ? theme.colors[color] : theme.colors.accentColor)};

      path {
         fill: ${({theme, color}) => (color ? theme.colors[color] : theme.colors.accentColor)};
      }
   }
`;

export const Icon: React.FC<IconProps> = ({type, size, color, ...props}) => (
   <StyledIcon size={size} color={color} type={type} {...props}>
      {svgs(type)}
   </StyledIcon>
);

Icon.displayName = 'Icon';
