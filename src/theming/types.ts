interface Spacing extends DefaultSpacings {
   gridunit: number;
}

export type LineHeightOptions = 'xs' | 'sm' | 'md' | 'lg';
export type SpacingOptions = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
export type SizingOptions = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
export type FontWeightOptions = 'thin' | 'extralight' | 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'extrabold';
export type ColorOptions =
   | 'accentColor'
   | 'backgroundColor'
   | 'textColorDarkBg'
   | 'textColorLightBg'
   | 'textColor'
   | 'grey100'
   | 'grey200'
   | 'grey300'
   | 'grey400'
   | 'dangerColor'
   | 'linkColor'
   | 'linkFocusedColor';

type DefaultSpacings = {[keyof in SpacingOptions]: string};
type DefaultFontSizes = {[keyof in SizingOptions]: string};
type DefaultColors = {[keyof in ColorOptions]: string};
type DefaultFontWeights = {[keyof in FontWeightOptions]: number};
type LineHeights = {[keyof in LineHeightOptions]: number};

export interface Theme {
   name: string;

   // spacing
   spacing: Spacing;

   fontFamily: string;

   fontSizes: DefaultFontSizes;

   fontWeights: DefaultFontWeights;

   lineHeights: LineHeights;

   colors: DefaultColors;

   breakpoints: DefaultSpacings;

   // Misc

   defaultBorderRadius: string;

   uiSpeed: string;
   uiSpeedLonger: string;
}
