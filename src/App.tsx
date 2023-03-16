import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routes from './router/Routes';
import {useSelector} from 'react-redux'
import { ReduxRootState } from './statemanager/store';

const App: React.FC = () => {
  const theme = useSelector((state:ReduxRootState) => state.theme);  
  useEffect(()=>{
    console.log(theme);
  },[theme])
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={Routes} />
      </ThemeProvider>
    </>
  );
}

export default App;
