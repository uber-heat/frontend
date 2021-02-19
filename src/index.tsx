import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app';
import reportWebVitals from './reportWebVitals';
import './assets/styles/output.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
