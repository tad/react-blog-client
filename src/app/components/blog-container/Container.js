import React from 'react';
import ReactDOM from 'react-dom';
import BlogHeader from './header/BlogHeader';
import Sidebar from './sidebar/Sidebar';

export default React.createClass({
  render: function() {
    return(
      <div className="container">
        <BlogHeader />
        <div className="row">
          <div className="col-sm-8 blog-main">
            <h1>Hello, React World!</h1>
          </div>
          <Sidebar />
        </div>
      </div>
    );
  }
});