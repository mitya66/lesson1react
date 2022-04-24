import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { orange } from '@mui/material/colors'
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const currentName = 'Dima';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00BFFF',
      neMain: '#00000  '
    }
  },
  status: {
    danger: orange[500],
  },
});


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <App name={currentName} topPosition={'50px'} showPurple={true} />
      </BrowserRouter>
    </ThemeProvider> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);