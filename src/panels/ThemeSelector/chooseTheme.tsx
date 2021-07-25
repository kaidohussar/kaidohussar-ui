import React, {useContext} from 'react';

import {StylesContext} from '../../components/StylesProvider';

export const ThemeSelector = (api: any, channel: any) => {
   console.log('api', api);
   console.log('channel', channel);

   const {setTheme} = useContext(StylesContext);

   const selectTheme = (theme: string) => {
      setTheme(theme);
      console.log('api.getChannel()', api.getData());
   };

   return (
      <div>
         <button onClick={() => selectTheme('dark')}>dark</button>
         <button onClick={() => selectTheme('light')}>light</button>
      </div>
   );
};
