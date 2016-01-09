import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
  render: function() {
    return(
      <p className="lead blog-description">{this.props.blogDescription}</p>
    );
  }
});
