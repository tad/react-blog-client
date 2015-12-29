import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
  propTypes: {
    sidebars: React.PropTypes.array.isRequired,
  },
  render: function() {
    let sidebars = this.props.sidebars.map(function(sidebar, index) {
      return <div className="sidebar-module" className={sidebar.insetModule? "sidebar-module-inset" : ""} key={index}>
        {sidebar.content}
      </div>
    });
    return(
      <div className="col-sm-3 col-sm-offset-1 blog-sidebar">
        {sidebars}
      </div>
    );
  }
});
