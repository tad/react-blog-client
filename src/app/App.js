import React from 'react';
import ReactDOM from 'react-dom';
import Masthead from './components/Masthead'
import BlogHeader from './components/header/BlogHeader';

ReactDOM.render(
  <div id="master">
    <Masthead />
    <div className="container">
      <BlogHeader />
      <div className="col-md-6">
        <h1>Hello, Bootstrap!</h1>
      </div>
    </div>
  </div>,
  document.getElementById('app')
);
