/// <reference no-default-lib="true"/>
/* eslint-disable */
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import {  RouterProvider } from 'react-router-dom';
import { AuthProvider } from './components/contextsApi/AuthContext.tsx';
import { router } from './routers.tsx';
import { createTheme, StyledEngineProvider} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);



root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
        <CssBaseline />
        <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
);
