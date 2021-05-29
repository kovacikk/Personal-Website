import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";

ReactDOM.render(

  <React.StrictMode>

    <div id="all">
      <App/>
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
  
);

serviceWorker.unregister();
