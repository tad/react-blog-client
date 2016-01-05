import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
  propTypes: {
    //meta: React.PropTypes.object.isRequired,    
  },
  render: function() {
    return(
      <p className="blog-post-meta">
        {this.props.meta}
      </p>
    );
  }
});
