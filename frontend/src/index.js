
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import './i18n'; // Add this line to import i18n configuration

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);