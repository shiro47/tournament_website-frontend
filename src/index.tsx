import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// remember the original fetch-function to delegate to
const originalFetch = global.fetch;

export const applyBaseUrlToFetch = (baseUrl: string) => {
  // replace the global fetch() with our version where we prefix the given URL with a baseUrl
  global.fetch = (url, options) => {
    const finalUrl = baseUrl + url;
    return originalFetch(finalUrl, options);
  };
};

if (process.env.REACT_APP_BACKEND_API_BASE_URL !== undefined && process.env.REACT_APP_BACKEND_API_BASE_URL !== '') {
  applyBaseUrlToFetch(process.env.REACT_APP_BACKEND_API_BASE_URL);
}


root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
