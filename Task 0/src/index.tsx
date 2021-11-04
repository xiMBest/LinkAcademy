import React from 'react';
import ReactDOM from 'react-dom';
import './ui/style/App.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './ui/pages/home/home';
import ProfilePage from './ui/pages/profile/profile';

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
