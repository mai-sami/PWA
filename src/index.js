import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import App from './App';
//  import serviceWorker from'./serviceWorker'
 
ReactDOM.render(
  <React.StrictMode>
    
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

  // serviceWorker.register();