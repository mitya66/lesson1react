import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const currentName = 'Dima';



ReactDOM.render(
  <React.StrictMode>
  <App name={currentName} topPosition={'50px'} showPurple={true} />
  </React.StrictMode>,
  document.getElementById('root')
);