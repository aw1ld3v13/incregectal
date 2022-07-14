// import functionality from react
import React from 'react';
import ReactDOM from 'react-dom'; 
import { BrowserRouter } from 'react-router-dom';

// import app
import App from './App';

// render the app
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app'));