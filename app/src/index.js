import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import Boot from './js/Boot.js';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
require('@popperjs/core');
require('bootstrap');


ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
    <div id="all">
      <Boot/>
    </div>
    {/*<Boot/>*/}
    
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
