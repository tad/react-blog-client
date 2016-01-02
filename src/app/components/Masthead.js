import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
  propTypes: {
    masthead: React.PropTypes.object.isRequired
  },
  render: function() {
    console.log('masthead: ', this.props.masthead);
    return(
      <div className="blog-masthead">
        <div className="container">
          {this.props.masthead}
        </div>
      </div>
    );
  }
});
