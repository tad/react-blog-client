import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
  render: function() {
    return(
      <div className="blog-masthead">
        <div className="container">
          <nav className="blog-nav">
            <a className="blog-nav-item active" href="#">Home</a>
            <a className="blog-nav-item" href="#">Categories</a>
            <a className="blog-nav-item" href="#">Book Store</a>
            <a className="blog-nav-item" href="#">Link Repository</a>
            <a className="blog-nav-item" href="#">About Me</a>
          </nav>
        </div>
      </div>
    );
  }
});
