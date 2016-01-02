import React from 'react';
import ReactDOM from 'react-dom';
import BlogHeader from './header/BlogHeader';
import Sidebar from './sidebar/Sidebar';
import BlogPosts from './post/BlogPosts';
import actionCreators from '../../../action_creators';
import {connect} from 'react-redux';

import { createStore } from 'redux'
import myBlog from '../../../reducer'

let store = createStore(myBlog);

export const Blog = React.createClass({
  getInitialState: function() {
    return store.getState();
  },
  render: function() {
    return(
      <div className="container">
        <BlogHeader blogTitle={this.props.blogTitle} blogDescription={this.props.blogDescription} />
        <div className="row">
          <BlogPosts blogPosts={this.props.blogPosts} />
          <Sidebar sidebars={this.props.sidebars} />
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return state;
}

export const BlogContainer = connect(
  mapStateToProps, actionCreators)(Blog);
