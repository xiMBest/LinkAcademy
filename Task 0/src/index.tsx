import React from 'react';
import ReactDOM from 'react-dom';
import './ui/style/App.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './ui/pages/home/home';
import ProfilePage from './ui/pages/profile/profile';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './core/store/store';
import Profile from './ui/components/common/profile';

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
