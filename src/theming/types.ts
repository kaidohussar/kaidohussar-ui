type DefaultSpacings = {[keyof in SpacingOptions]: string};
type DefaultFontSizes = {[keyof in SizingOptions]: string};

interface Spacing extends DefaultSpacings {
   gridunit: number;
}

export type SpacingOptions = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
export type SizingOptions = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

export interface Theme {
   name: string;

   // spacing
   spacing: Spacing;

   fontFamily: string;

   fontSizes: DefaultFontSizes;

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

      textColorDarkBg: string;
      textColorLightBg: string;

      dangerColor: string;

      linkColor: string;
      linkFocusedColor: string;
   };

   breakpoints: DefaultSpacings;

   // Misc

   defaultBorderRadius: string;

   uiSpeed: string;
}
