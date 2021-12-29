import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Swich } from 'react-router-dom';
import './sass/index.scss';
import App from './App';
import Login from './componets/Login';
import reportWebVitals from './reportWebVitals';
import './asstes/box-icon-2.1.1/css/boxicons.min.css';
ReactDOM.render(
  <BrowserRouter>
    <Login />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
