import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
  render: function() {
    return(
      <div className="col-sm-3 col-sm-offset-1 blog-sidebar">
        {this.props.sidebars}
      </div>
    );
  }
});
