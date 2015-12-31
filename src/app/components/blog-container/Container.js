import React from 'react';
import ReactDOM from 'react-dom';
import BlogHeader from './header/BlogHeader';
import Sidebar from './sidebar/Sidebar';
import BlogPosts from './post/BlogPosts';

import { createStore } from 'redux'
import myBlog from '../../../reducer'

let store = createStore(myBlog);

export default React.createClass({
  getInitialState: function() {
    return store.getState();
  },
  render: function() {
    return(
      <div className="container">
        <BlogHeader blogTitle={this.state.blogTitle} blogDescription={this.state.blogDescription} />
        <div className="row">
          <BlogPosts blogPosts={this.state.blogPosts} />
          <Sidebar sidebars={this.state.sidebars} />
        </div>
      </div>
    );
  }
});
