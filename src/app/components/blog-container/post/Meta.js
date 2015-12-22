import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
  render: function() {
    return(
      <p className="blog-post-meta">
        {this.props.meta}
      </p>
    );
  }
});
