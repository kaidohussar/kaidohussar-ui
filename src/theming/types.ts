export interface Theme {
   name: string;

   // spacing
   spacing: {
      gridunit: number;
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
   };

   fontFamily: string;

   fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
   };

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

   // Misc

   buttonBorderRadius: string;
}
