import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
  render: function() {
    return(
      <div>
        {this.props.content}
      </div>
    );
  }
});
