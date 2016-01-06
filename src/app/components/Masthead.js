import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
  propTypes: {
    // masthead: React.PropTypes.object.isRequired
  },
  render: function() {
    console.log('masthead: ', this.props.mastheadContent);
    return(
      <nav className="blog-nav">
                      <a className="blog-nav-item active" href="#">Home</a>
                      <a className="blog-nav-item" href="#/categories">Categories</a>
                      <a className="blog-nav-item" href="#/bookstore">Book Store</a>
                      <a className="blog-nav-item" href="#/links">Links</a>
                      <a className="blog-nav-item" href="#/about">About Me</a>
      </nav>
    );
  }
});
