import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Movies from './Movies';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Movies />
  </React.StrictMode>
);
reportWebVitals();
