import React from 'react';
//require("dotenv").config()
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import reportWebVitals from './reportWebVitals';


import { createRoot } from 'react-dom/client';


const base_url_api = process.env.REACT_APP_BASE_URL_API
console.log("base_url_api:" + base_url_api);
console.log("process.env.NODE_ENV:" + process.env.NODE_ENV);
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
// ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
