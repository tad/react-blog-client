import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
  propTypes: {
    // Not sure how this works with immutable - needs research
    //sidebars: React.PropTypes.array.isRequired,
  },
  render: function() {
    const { sidebars } = this.props;
    return(
      <div className="col-sm-3 col-sm-offset-1 blog-sidebar">
        {sidebars.map((sidebar, index) => (
          <div className="sidebar-module"
               className={sidebar.insetModule? "sidebar-module-inset" : ""}
               key={index}>{sidebar.content}
          </div>
        ))}
      </div>
    );
  }
});
