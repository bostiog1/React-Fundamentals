import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let model = { clicks: 0 };



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App clicks={module.clicks} onClick={() =>{ model.clicks += 1;}} />
  </React.StrictMode>
);


