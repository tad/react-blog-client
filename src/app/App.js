import React from 'react';
import ReactDOM from 'react-dom';
import Masthead from './components/Masthead'

ReactDOM.render(
  <div id="master">
    <Masthead />
    <div className="container">
      <div className="col-md-6">
        <h1>Hello, Bootstrap!</h1>
      </div>
    </div>
  </div>,
  document.getElementById('app')
);
