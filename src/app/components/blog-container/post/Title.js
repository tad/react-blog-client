import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
  propTypes: {
    //title: React.PropTypes.string.isRequired
  },
  render: function() {
    return(
      <h2 className="blog-post-title">
        {this.props.title}
      </h2>
    );
  }
});
