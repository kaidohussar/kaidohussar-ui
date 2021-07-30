export interface Theme {
   name: string;

   gridunit: number;

   fontFamily: string;
   headingSmallFontSize: number;
   headingMediumFontSize: number;
   headingLargeFontSize: number;
   headingVeryLargeFontSize: number;

   buttonLabelFontSize: number;

   // strings
   accentColor: string;
   backgroundColor: string;

   colorDarkBg: string;
   colorLightBg: string;

   dangerColor: string;

   linkColor: string;
   linkFocusedColor: string;

   // Misc

   buttonBorderRadius: number;
}
