import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <div className='greeting'>
    <h1>Weather Map</h1>
    <h4>Please enter city name</h4>
  </div>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </div>
);

reportWebVitals();
