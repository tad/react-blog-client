import React from 'react';
import ReactDOM from 'react-dom';
import BlogTitle from './BlogTitle';
import BlogDescription from './BlogDescription';

export default React.createClass({
  render: function() {
    return(
      <div className="blog-header">
        <BlogTitle blogTitle={this.props.blogTitle} />
        <BlogDescription blogDescription={this.props.blogDescription} />
      </div>
    );
  }
});
