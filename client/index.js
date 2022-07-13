import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'

// uncomment when ready for webpack to bundle styles
import styles from './scss/application.scss';

render(
  <App />,
  document.getElementById('root')
);