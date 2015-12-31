import React from 'react';
import ReactDOM from 'react-dom';
import BlogHeader from './header/BlogHeader';
import Sidebar from './sidebar/Sidebar';
import BlogPosts from './post/BlogPosts';

import { createStore } from 'redux'
import myBlog from '../../../reducer'

// TEMPORARY IMPORTS TO SIMULATE DYNAMIC CONTENT
import sidebar1 from './static/Sidebar1';
import sidebar2 from './static/Sidebar2';
import sidebar3 from './static/Sidebar3';
import post1 from './static/Post1';
import post2 from './static/Post2';

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
