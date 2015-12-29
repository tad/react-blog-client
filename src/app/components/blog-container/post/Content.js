import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
  propTypes: {
    content: React.PropTypes.object.isRequired,    
  },
  render: function() {
    return(
      <div>
        {this.props.content}
      </div>
    );
  }
});
