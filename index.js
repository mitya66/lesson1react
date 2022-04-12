import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { orange } from '@mui/material/colors'
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

const currentName = 'Dima';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00BFFF',
      neMain: '#000000'
    }
  },
  status: {
    danger: orange[500],
  },
});


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <App name={currentName} topPosition={'50px'} showPurple={true} />
      </BrowserRouter>
    </ThemeProvider> 
  
  </React.StrictMode>,
  document.getElementById('root')
);