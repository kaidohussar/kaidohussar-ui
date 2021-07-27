import React, {useState} from 'react';

export const ThemeSelector = ({api}: any) => {
   const [selectedTheme, setSelectedTheme] = useState<string>();

   const selectTheme = (theme: string) => {
      if (api && api.getChannel) {
         const channel = api.getChannel();
         channel.emit('selectTheme', theme);
      }

      setSelectedTheme(theme);
   };

   return (
      <div>
         <button style={{border: selectedTheme === 'dark' ? '1px solid red' : 'unset'}} onClick={() => selectTheme('dark')}>
            darks
         </button>
         <button style={{border: selectedTheme === 'light' ? '1px solid red' : 'unset'}} onClick={() => selectTheme('light')}>
            lights
         </button>
      </div>
   );
};
