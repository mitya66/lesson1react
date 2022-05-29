import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CircularProgress, createTheme, ThemeProvider } from '@mui/material';
import { orange } from '@mui/material/colors';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import persistor, { store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

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
      <PersistGate persistor={persistor} loading={<CircularProgress/>}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
    <App name={currentName} topPosition="80px"/>
    </BrowserRouter>
    </ThemeProvider> 
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    