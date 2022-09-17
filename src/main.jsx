import React from 'react';
import ReactDOM from 'react-dom';
import './app/common/styles/index.css';
import App from './app/App';
import './app/common/helpers/i18n/i18n.helper';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById('root')
);
