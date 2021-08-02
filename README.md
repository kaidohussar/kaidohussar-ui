<h1>Set of UI components made by Kaido Hussar ⚡</h1>

<h2>Design system for personal projects</h2>

### Install the library
```bash
npm install kaidohussar/ui --save
```

```bash
yarn add kaidohussar/ui
```

### Set up theme

Default values for light theme are displayed here:
```bash
     {
      name: 'light',

      colors: {
         accentColor: '#1A1A1A',
         backgroundColor: '#FCFCFD',

         colorDarkBg: '#FFFFFF',
         colorLightBg: '#1A1A1A',

         dangerColor: '#FF3F00',

         linkColor: 'blue',
         linkFocusedColor: 'darkblue',
      },

      fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',

      uiSpeed: '0.2s',

      fontWeights: {
         thin: 100,
         extralight: 200,
         light: 300,
         regular: 400,
         medium: 500,
         semibold: 600,
         bold: 700,
         extrabold: 800,
      },
      fontSizes: {
         xs: '12px',
         sm: '14px',
         md: '16px',
         lg: '18px',
         xl: '24px',
         xxl: '32px',
         xxxl: '48px',
      },
      spacing: {
         gridunit: baseUnit, // 8
         xxs: `${baseUnit / 4}px`,
         xs: `${baseUnit / 2}px`,
         sm: `${baseUnit}px`,
         md: `${baseUnit * 2}px`,
         lg: `${baseUnit * 4}px`,
         xl: `${baseUnit * 8}px`,
         xxl: `${baseUnit * 16}px`,
      },

      defaultBorderRadius: '4px',
   },
```

### Usage with React
Default and recommended usage. All components are available as modules and you can use them as any other React component.

```jsx
import { Button } from 'kaidohussar/ui';

<Button>Click me</Button>
```
