import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
  propTypes: {
    masthead: React.PropTypes.object.isRequired
  },
  render: function() {
    return(
      <div className="blog-masthead">
        <div className="container">
          {this.props.masthead}
        </div>
      </div>
    );
  }
});
