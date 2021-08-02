type DefaultSpacings = {[keyof in SpacingOptions]: string};

interface Spacing extends DefaultSpacings {
   gridunit: number;
}

export interface Theme {
   name: string;

   // spacing
   spacing: Spacing;

   fontFamily: string;

   fontSizes: DefaultSpacings;

   fontWeights: {
      thin: number;
      extralight: number;
      light: number;
      regular: number;
      medium: number;
      semibold: number;
      bold: number;
      extrabold: number;
   };

   colors: {
      accentColor: string;
      backgroundColor: string;

      colorDarkBg: string;
      colorLightBg: string;

      dangerColor: string;

      linkColor: string;
      linkFocusedColor: string;
   };

   breakpoints: DefaultSpacings;

   // Misc

   defaultBorderRadius: string;

   uiSpeed: string;
}

export type SpacingOptions = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
