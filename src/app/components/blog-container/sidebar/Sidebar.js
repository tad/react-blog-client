import React from 'react';
import ReactDOM from 'react-dom';
// TEMPORARY IMPORTS TO SIMULATE DYNAMIC CONTENT
import sidebar1 from './Sidebar1';
import sidebar2 from './Sidebar2';
import sidebar3 from './Sidebar3';

// This will eventually be create from stuff put in state.
var sidebars = [sidebar1, sidebar2, sidebar3];

export default React.createClass({
  render: function() {
    return(
      <div className="col-sm-3 col-sm-offset-1 blog-sidebar">
        {sidebars}
      </div>
    );
  }
});
