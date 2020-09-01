import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import loadingScripts from './scripts'
import loadingSyles from './styles'

// import WorkshopsController from "./controllers/WorkshopsController"
import AdminController from "./controllers/AdminController"


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
    <AdminController/>,
  document.getElementById('root'));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
