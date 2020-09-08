import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css'
import * as serviceWorker from './serviceWorker'
import loadingScripts from './scripts'
import loadingSyles from './styles'

import App from './App'


Promise.all([
  loadingSyles,
  loadingScripts,
]).then(() => {
  ReactDOM.render(
    <App/>,
  document.getElementById('root'));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
