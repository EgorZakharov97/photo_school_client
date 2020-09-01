import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import loadingScripts from './scripts'
import loadingSyles from './styles'
import Workshops from "./controllers/Workshops.comtroller";

// ReactDOM.render(
//   <React.StrictMode>
//     <IndexController/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

Promise.all([
  loadingSyles,
  loadingScripts,
]).then(() => {
  ReactDOM.render(
    <Workshops/>,
  document.getElementById('root'));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
