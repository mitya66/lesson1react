import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import { createTheme } from '@mui/material';
import { orange } from '@mui/material/colors'
import { createTheme, ThemeProvider } from '@mui/material';

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
      <App name={currentName} topPosition={'50px'} showPurple={true} />
    </ThemeProvider> 
  
  </React.StrictMode>,
  document.getElementById('root')
);