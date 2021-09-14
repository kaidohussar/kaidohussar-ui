import { css, styled } from 'theming/defaultTheme';

import { LoadingProps } from 'components/Loading/index';

export const StyledSpinner = styled.div<LoadingProps>`
   display: flex;
   align-items: center;
   justify-content: center;

   svg {
      max-width: 80px;
   }

   ${({ theme }) => {
    const size = theme.spacing.gridunit * 4;

    return css`
         width: ${size}px;
         height: ${size}px;
      `;
  }}

   ${({ size }) => {
    if (size === 'full-page') {
      return css`
            width: 100vw;
            height: 100vh;
         `;
    }

    if (size === 'fill-content') {
      return css`
            flex: 1;
            width: 100%;
            height: 100%;
         `;
    }
  }}
`;
