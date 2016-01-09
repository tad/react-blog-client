import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
  render: function() {
    return(
      <h1 className="blog-title">{this.props.blogTitle}</h1>
    );
  }
});
