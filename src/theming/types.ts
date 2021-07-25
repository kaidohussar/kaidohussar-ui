import { CSSProperties } from 'styled-components';

export interface Theme {
   name: string;
   accentColor: CSSProperties['color'];
   backgroundColor: CSSProperties['backgroundColor'];
   textColor: CSSProperties['color'];
}
