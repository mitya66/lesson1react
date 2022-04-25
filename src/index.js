import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material';
import { orange } from '@mui/material/colors';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

const currentName = 'Dima';

const theme = createTheme({
 palette: {
    mode: 'dark',
    primary: {
      main: '#008B8B'
    }
  },
  status: {
    danger: orange[500],
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
    <App name={currentName} topPosition="80px"/>
    </BrowserRouter>
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
